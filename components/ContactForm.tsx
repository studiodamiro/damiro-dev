'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactFormValidator, TContactFormValidator } from '@/lib/validators/contactForm';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactFormValidator>({ resolver: zodResolver(ContactFormValidator) });

  const submitHandler: SubmitHandler<TContactFormValidator> = async (data) => {
    try {
      const response = await fetch('/placeholder.png', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...data }).toString(),
      });

      if (response.ok) {
        router.push('/message-sent');
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit(submitHandler)}
      >
        <input type='hidden' name='form-name' value='contact' />
        <input className='hidden' name='bot-field' />
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            required
            {...register('email')}
            className={cn({ 'focus-visible:ring-red-500': errors.email })}
            placeholder='you@email.com'
          />
        </div>
        <div>
          <Label htmlFor='name'>Name</Label>
          <Input
            required
            {...register('name')}
            className={cn({ 'focus-visible:ring-red-500': errors.name })}
            placeholder='What should I call you?'
          />
        </div>
        <div>
          <Label htmlFor='message'>Movie Details</Label>
          <Textarea
            required
            {...register('message')}
            className={cn({ 'focus-visible:ring-red-500': errors.message })}
            placeholder='Help me find it. What year was it released? Whose movie is it? Any links?'
          />
        </div>
        <button
          type='submit'
          className={cn(
            'relative mx-[2px] px-4 py-3 flex-none rounded-lg tracking-widest text-sm font-bold uppercase shadow-md items-center justify-center',
            'bg-slate-900/70 dark:bg-white/70 dark:text-slate-900 text-white opacity-80 hover:opacity-100',
            'transition-all duration-300 ease-out'
          )}
        >
          Request Reflection
        </button>
      </form>
    </div>
  );
}
