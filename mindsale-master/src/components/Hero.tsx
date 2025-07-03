'use client'
// Package Imports
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'

//Icon Imports
import { CiDesktopMouse2 } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";


const Hero = () => {
    const texts = ['Crezcamos', 'Crecimiento, marketing']; // Textos que cambiarán
    const textsBelow = ['Juntos', 'y ventas']; // Textos que cambiarán
    const [currentTextIndex, setCurrentTextIndex] = useState(0); // Índice del texto actual
    const [currentTextBelowIndex, setCurrentTextBelowIndex] = useState(0); // Índice del texto actual
    const [fade, setFade] = useState(true); // Estado para manejar la opacidad

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Inicia el desvanecimiento
            setTimeout(() => {
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cambia el texto después del desvanecimiento
                setCurrentTextBelowIndex((prevIndex) => (prevIndex + 1) % textsBelow.length);
                setFade(true); // Aparece el nuevo texto con opacidad
            }, 300); // Tiempo de desvanecimiento en ms
        }, 3000); // Intervalo de tiempo entre cambios en ms

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='flex flex-col gap-2 w-full'>
            <Image
                alt='Hero'
                title='Hero'
                quality={100}
                fill
                sizes='100vw'
                style={{
                    // objectFit: 'cover',
                    position: 'absolute',
                    // zIndex: '-1',
                }}
                src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1723560432/mindsale/fondomindsalesinsilla_jvnyti.webp'
            />
            <div className="relative lg:-mt-40 2xl:-mt-20 m-auto max-w-3xl lg:mx-0 lg:grid lg:max-w-full lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:gap-x-8">
                <div className="flex flex-col w-[90%] col-span-1 mx-auto lg:pl-32">
                    <p className='mt-12 lg:mt-16 xl:mt-36 -tracking-tighter text-white text-lg text-left'>Consultoria Empresarial Integral</p>
                    <h1 className={`w-full text-5xl lg:text-[65px] font-medium tracking-tight text-white relative transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        {texts[currentTextIndex]} <br />
                        <span className='font-bold'>{textsBelow[currentTextBelowIndex]}</span>
                    </h1>
                    <p className='max-w-xl -tracking-tighter text-white text-sm lg:text-lg mt-6 lg:mt-10 xl:mt-5'>Ayudamos a nuestros clientes a armar una base solida de crecimiento, destacase en el mercado y a conseguir los resultados que están buscando. </p>
                </div>
                <div className="mt-12 lg:mt-0 col-span-1">
                    <Image
                        alt='Hero Icon'
                        title='Hero Icon'
                        width={750}
                        height={750}
                        src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1726717936/mindsale/FINAL_2_dg5xua.webp'
                    />
                </div>
            </div>

            <div className='relative w-full m-auto xl:-mt-20 grid grid-cols-2 lg:grid-cols-3 gap-2'>
                {/* <CiDesktopMouse2 className='text-white text-4xl cursor-pointer hover:opacity-85' />
                    <span className='-tracking-tighter text-white text-sm text-center lg:text-lg'>
                    Scroll para ver nuestros proyectos
                    </span> */}
                <span className='relative rounded-xl cursor-pointer flex items-center justify-center overflow-hidden p-[1px] z-10' >
                    <div
                        className='w-full h-full absolute rounded-[100%] transform animate-styles_rotate'
                        style={{
                            backgroundImage:
                                'conic-gradient(#0057ff 20deg, transparent 120deg)'
                        }}
                    />
                    <span className={`relative z-20 block rounded-xl bg-black px-8 py-3 text-center text-[8px] lg:text-sm text-white shadow-2xl font-medium`}>
                        <Link to="Agendar" smooth={true} offset={-140} href='#' title='Agendar'>
                            Agendar Consultoria gratis
                        </Link>
                    </span>
                </span>

                <div className='hidden lg:flex lg:col-span-1'></div>

                <a
                    href="https://www.instagram.com/"
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label="Facebook profile"
                    className='cursor-pointer hover:opacity-60'>
                    <PiInstagramLogoLight className='text-4xl text-white m-auto' />
                </a>
            </div>

        </section>
    )
}

export default Hero