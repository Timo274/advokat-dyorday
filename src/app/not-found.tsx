import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-dark pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary-dark pointer-events-none z-10" />
      
      {/* Background large numbers */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <span className="text-[30vw] font-serif font-bold text-white">404</span>
      </div>

      <div className="container-custom relative z-20 text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <span className="text-8xl md:text-9xl font-serif font-bold text-gradient-gold block mb-4">
            404
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Сторінку не знайдено
          </h1>
          <p className="text-white/70 text-lg md:text-xl">
            Можливо, ця сторінка була переміщена, видалена або ніколи не існувала.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button href="/" variant="primary" size="lg" className="w-full sm:w-auto">
            Повернутися на головну
          </Button>
          <Button href="/kontakty" variant="secondary" size="lg" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:text-white">
            Зв'язатися з нами
          </Button>
        </div>
      </div>
    </div>
  );
}
