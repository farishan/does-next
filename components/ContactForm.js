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
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 lg:mb-16">
        <Label extendClass="lg:mb-6">Nama</Label>
        <Input {...register('name')} />
      </div>

      <div className="mb-8 lg:mb-16">
        <Label extendClass="lg:mb-6">Alamat Email*</Label>
        <Input {...register('email', { required: true })} />
        {errors.email && <p className="text-red-600">This field is required</p>}
      </div>

      <div className="mb-8 lg:mb-16">
        <Label extendClass="lg:mb-6">Subjek</Label>
        <Input {...register('subject')} />
      </div>

      <div className="mb-8 lg:mb-16">
        <Label extendClass="lg:mb-6">Pesan*</Label>
        <Textarea {...register('message', { required: true })} />
        {errors.message && (
          <p className="text-red-600">This field is required</p>
        )}
      </div>

      <Button extendClass="w-full py-5 text-sm uppercase">Kirim</Button>
    </form>
  )
}
