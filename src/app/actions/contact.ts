'use server';

import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';

// Define the validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Ім'я повинно містити щонайменше 2 символи" }),
  phone: z.string().regex(/^\+?[\d\s-]{10,15}$/, { message: "Невірний формат номеру телефону" }),
  service: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    name?: string[];
    phone?: string[];
    service?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Extract data from FormData
  const rawData = {
    name: formData.get('name') as string,
    phone: formData.get('phone') as string,
    service: formData.get('service') as string,
    message: formData.get('message') as string,
  };

  // 2. Validate data
  const validatedFields = contactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, phone, service, message } = validatedFields.data;

  // 3. Process the data (Save to DB & Send Email)
  try {
    // Save to Database
    const newRequest = await prisma.contactRequest.create({
      data: {
        name,
        phone,
        service,
        message,
      },
    });

    // Send Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'Сайт Адвоката <onboarding@resend.dev>', // Update with a verified domain later
        to: 'dordavan@gmail.com',
        subject: `Нова заявка з сайту від: ${name}`,
        html: `
          <h2>Нова заявка на консультацію</h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Категорія справи:</strong> ${service || 'Не вказано'}</p>
          <p><strong>Повідомлення:</strong> ${message || 'Не вказано'}</p>
          <br/>
          <p><small>Заявка збережена в базі даних (ID: ${newRequest.id})</small></p>
        `,
      });
    } else {
      console.warn('RESEND_API_KEY is not set. Email was not sent, but saved to DB.');
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      error: "Сталася помилка при відправці. Будь ласка, спробуйте пізніше або зателефонуйте нам.",
    };
  }
}
