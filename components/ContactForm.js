import useContent from '@/helpers/use-content'
import React from 'react'
import { useForm } from 'react-hook-form'
import Button from './Button'
import Input from './form/Input'
import Label from './form/Label'
import Textarea from './form/Textarea'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const {
    label_name,
    label_email,
    label_subject,
    label_message,
    label_submit
  } = useContent('contact')

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 lg:mb-16">
        <Label extendClass="lg:mb-6">{label_name}</Label>
        <Input {...register('name')} />
      </div>

      <div className="mb-8 lg:mb-16">
        <Label extendClass="lg:mb-6">{label_email}*</Label>
        <Input {...register('email', { required: true })} />
        {errors.email && <p className="text-red-600">This field is required</p>}
      </div>

      <div className="mb-8 lg:mb-16">
        <Label extendClass="lg:mb-6">{label_subject}</Label>
        <Input {...register('subject')} />
      </div>

      <div className="mb-8 lg:mb-16">
        <Label extendClass="lg:mb-6">{label_message}*</Label>
        <Textarea {...register('message', { required: true })} />
        {errors.message && (
          <p className="text-red-600">This field is required</p>
        )}
      </div>

      <Button extendClass="w-full py-5 text-sm uppercase">
        {label_submit}
      </Button>
    </form>
  )
}
