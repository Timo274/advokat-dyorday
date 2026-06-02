'use server';

import { z } from 'zod';
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

  try {
    // Send Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const { error } = await resend.emails.send({
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
            <p><small>Заявка відправлена з сайту lawyer-dordiai.vercel.app</small></p>
          `,
        });
        if (error) {
          console.error('Resend API returned an error:', error);
        }
      } catch (emailError) {
        console.error('Email failed to send:', emailError);
      }
    } else {
      console.warn('RESEND_API_KEY is not set. Email was not sent.');
    }

    // Send WhatsApp via CallMeBot
    const waPhone = process.env.WHATSAPP_PHONE;
    const waApiKey = process.env.WHATSAPP_API_KEY;
    if (waPhone && waApiKey) {
      try {
        const waText = `🚨 *Нова заявка з сайту!*\n\n👤 *Ім'я:* ${name}\n📞 *Телефон:* ${phone}\n📂 *Справа:* ${service || 'Не вказано'}\n📝 *Повідомлення:* ${message || 'Не вказано'}`;
        const encodedText = encodeURIComponent(waText);
        const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${waPhone}&text=${encodedText}&apikey=${waApiKey}`;
        
        const response = await fetch(waUrl);
        if (!response.ok) {
          console.error('WhatsApp message failed to send. Status:', response.status);
        }
      } catch (waError) {
        console.error('Error sending WhatsApp message:', waError);
      }
    } else {
      console.warn('WHATSAPP_PHONE or WHATSAPP_API_KEY is not set. WhatsApp message was not sent.');
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
