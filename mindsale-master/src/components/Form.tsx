"use client"
import { useState, useRef, ReactNode, useEffect } from 'react'
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        console.log('entre');
        emailjs
            .sendForm('service_', 'template_', form.current!, {
                publicKey: 'q',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset()
                    toast.success('Se ha enviado el formulario');
                },
                (error: any) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='lg:mx-[18rem] 2xl:mx-[18rem]' id='Agendar'>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-poppins text-lg lg:text-4xl text-white text-center'>
                    Contactenos y le brindaremos la mejor solución
                </p>
                <hr className='w-full border-y-2 border-brand-blue/70 my-2 mt-4'></hr>
            </div>
            <div className='mx-auto mb-12'>
                <form
                    className='flex flex-col gap-4 rounded-3xl'
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <div className='flex flex-col lg:flex-row lg:justify-between gap-4'>
                        <div className='flex flex-col w-full'>
                            <label className='font-poppins text-white'>Nombre completo <span className='text-red-400'>*</span></label>
                            <input
                                type='text'
                                name='nombreCompleto'
                                required
                                className='rounded-md bg-gray-100 text-gray-600 font-normal p-2 w-full border border-blue-300 outline-brand-blue/70'
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='font-poppins text-white'>Email<span className='text-red-400'>*</span></label>
                            <input
                                type='email'
                                name='email'
                                required
                                className='rounded-md bg-gray-100 text-gray-600 font-normal p-2 w-full border border-blue-300 outline-brand-blue/70'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row lg:justify-between gap-4 '>
                        <div className='flex flex-col w-full'>
                            <label className='font-poppins text-white'>Teléfono </label>
                            <input
                                type='number'
                                name='telefono'
                                className='rounded-md bg-gray-100 text-gray-600 font-normal p-2 w-full border border-blue-300 outline-brand-blue/70'
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='font-poppins text-white'>Provincia </label>
                            <input
                                type='text'
                                name='provincia'
                                className='rounded-md bg-gray-100 text-gray-600 font-normal p-2 w-full border border-blue-300 outline-brand-blue/70'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='font-poppins text-white'>Comentanos tu idea <span className='text-red-400'>*</span></label>
                        <textarea
                            name='mensaje'
                            required
                            className='rounded-md bg-gray-100 text-gray-600 font-normal p-2 h-32 border border-blue-300 outline-brand-blue/70'
                        />
                    </div>

                    <button
                        type='submit'
                        className='rounded-md bg-blue-700 hover:opacity-90 font-semibold text-white p-3 flex flex-row items-center justify-center'
                    >
                        Enviar
                    </button>
                </form>
            </div>


            <Toaster />
        </div>
    )
}

export default Form