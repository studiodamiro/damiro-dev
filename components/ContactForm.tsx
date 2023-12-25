'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactFormValidator, TContactFormValidator } from '@/lib/validators/contactForm';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

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
    <div className='w-full h-full'>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col gap-2'
      >
        <input type='hidden' name='form-name' value='contact' />
        <input className='hidden' name='bot-field' />

        <div className='w-4/5'>
          <div className='flex flex-row gap-2 items-center uppercase tracking-wider text-xs py-1.5'>
            <Label htmlFor='email'>Email</Label>
            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
          </div>
          <Input
            required
            {...register('email')}
            className={cn({ 'focus-visible:ring-red-500': errors.email })}
            placeholder='you@email.com'
          />
        </div>

        <div className='w-2/3'>
          <div className='flex flex-row gap-2 items-center uppercase tracking-wider text-xs py-1.5'>
            <Label htmlFor='name'>Name</Label>
            {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
          </div>
          <Input
            required
            {...register('name')}
            className={cn({ 'focus-visible:ring-red-500': errors.name })}
            placeholder='What should I call you?'
          />
        </div>

        <div>
          <div className='flex flex-row gap-2 items-center uppercase tracking-wider text-xs py-1.5'>
            <Label htmlFor='message'>Message</Label>
            {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
          </div>
          <Textarea
            required
            {...register('message')}
            className={cn({ 'focus-visible:ring-red-500': errors.message })}
            placeholder='Message details ...'
          />
        </div>

        <Button type='submit' className='w-1/3 uppercase mt-2'>
          Submit
        </Button>
      </form>
    </div>
  );
}
