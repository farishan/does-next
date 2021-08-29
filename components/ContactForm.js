import React from 'react'
import { useForm } from 'react-hook-form'
import Button from './Button'

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
      <div className="mb-4">
        <label className="block">Nama</label>
        <input {...register('name')} />
      </div>

      <div className="mb-4">
        <label className="block">Alamat Email*</label>
        <input {...register('email', { required: true })} />
        {errors.email && <p className="text-red-600">This field is required</p>}
      </div>

      <div className="mb-4">
        <label className="block">Subjek</label>
        <input {...register('subject')} />
      </div>

      <div className="mb-4">
        <label className="block">Pesan</label>
        <textarea {...register('message', { required: true })} />
        {errors.message && (
          <p className="text-red-600">This field is required</p>
        )}
      </div>

      <Button>Kirim</Button>
    </form>
  )
}
