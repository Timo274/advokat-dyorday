import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { Users, FileText, Settings, LogOut, CheckCircle, Clock, Inbox } from 'lucide-react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  // Fetch data
  const recentRequests = await prisma.contactRequest.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
  });

  const totalRequests = await prisma.contactRequest.count();
  const newRequests = await prisma.contactRequest.count({ where: { status: 'NEW' } });
  const totalPosts = await prisma.blogPost.count();

  return (
    <div className="min-h-screen bg-surface-light flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-primary-dark text-white p-6 flex flex-col">
        <div className="mb-10">
          <h2 className="text-xl font-bold font-serif tracking-wide text-accent-gold">АДМІН-ПАНЕЛЬ</h2>
          <p className="text-xs text-white/50 mt-1">v1.0.0</p>
        </div>

        <nav className="space-y-2 flex-grow">
          <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-xl text-white font-medium border border-white/10">
            <Inbox className="w-5 h-5 text-accent-gold" />
            <span>Заявки</span>
            {newRequests > 0 && (
              <span className="ml-auto bg-accent-gold text-primary-dark text-xs font-bold px-2 py-0.5 rounded-full">
                {newRequests}
              </span>
            )}
          </Link>
          <div className="flex items-center space-x-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl cursor-not-allowed opacity-50">
            <FileText className="w-5 h-5" />
            <span>Блог (В розробці)</span>
          </div>
          <div className="flex items-center space-x-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl cursor-not-allowed opacity-50">
            <Settings className="w-5 h-5" />
            <span>Налаштування</span>
          </div>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold mr-3">
              {session.user?.name?.[0] || 'A'}
            </div>
            <div>
              <p className="text-sm font-bold">{session.user?.name}</p>
              <p className="text-xs text-white/50 truncate w-32">{session.user?.email}</p>
            </div>
          </div>
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-primary-dark mb-2">Огляд заявок</h1>
          <p className="text-text-secondary">Управління зверненнями клієнтів з сайту</p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary font-medium mb-1">Нові заявки</p>
              <p className="text-3xl font-bold text-primary-dark">{newRequests}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center">
              <Inbox className="w-6 h-6 text-accent-gold" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary font-medium mb-1">Всього звернень</p>
              <p className="text-3xl font-bold text-primary-dark">{totalRequests}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary font-medium mb-1">Статті в блозі</p>
              <p className="text-3xl font-bold text-primary-dark">{totalPosts}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-success" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary-dark">Останні заявки</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-light text-text-secondary text-sm">
                  <th className="p-4 font-medium">Дата</th>
                  <th className="p-4 font-medium">Ім'я</th>
                  <th className="p-4 font-medium">Телефон</th>
                  <th className="p-4 font-medium">Послуга</th>
                  <th className="p-4 font-medium">Повідомлення</th>
                  <th className="p-4 font-medium">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentRequests.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-text-secondary">
                      Немає заявок. Тут з'являться дані, коли хтось заповнить форму на сайті.
                    </td>
                  </tr>
                ) : (
                  recentRequests.map((req) => (
                    <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm text-text-secondary whitespace-nowrap">
                        {format(new Date(req.createdAt), 'dd MMM yyyy, HH:mm', { locale: uk })}
                      </td>
                      <td className="p-4 font-medium text-primary-dark">{req.name}</td>
                      <td className="p-4 text-primary font-medium">
                        <a href={`tel:${req.phone}`} className="hover:underline">{req.phone}</a>
                      </td>
                      <td className="p-4 text-sm text-text-secondary">
                        {req.service === 'criminal' ? 'Кримінальне' :
                         req.service === 'tck' ? 'ТЦК' :
                         req.service === 'family' ? 'Сімейне' :
                         req.service === 'land' ? 'Земельне' :
                         req.service === 'other' ? 'Інше' : 'Не вказано'}
                      </td>
                      <td className="p-4 text-sm text-text-secondary max-w-xs truncate" title={req.message || ''}>
                        {req.message || '—'}
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          req.status === 'NEW' ? 'bg-red-100 text-red-800' :
                          req.status === 'IN_PROGRESS' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {req.status === 'NEW' ? 'Нова' : req.status === 'IN_PROGRESS' ? 'В роботі' : 'Завершено'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
