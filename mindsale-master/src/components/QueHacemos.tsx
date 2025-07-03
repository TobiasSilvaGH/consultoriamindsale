import React from 'react'

import { PiArrowDownLeftLight } from "react-icons/pi";
import { PiArrowUpRightThin } from "react-icons/pi";

const QueHacemos = () => {
    return (
        <section className='w-full relative' id='Hacemos'>
            {/* Pseudo-elemento para desenfocar solo el fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{
                    backgroundImage: 'url("https://res.cloudinary.com/dpmum6s9p/image/upload/v1723241004/mindsale/carrusel_f1ftsn.webp")',
                }}
            />
            {/* Contenedor del contenido que debe mantenerse enfocado */}
            <div className='relative flex flex-col items-center justify-center max-w-7xl p-2 py-20 m-auto text-center'>
                <div className='flex flex-row gap-1'>
                    <h3 className='text-left text-3xl xs:text-4xl xl:text-5xl mb-4 leading-[3rem] font-medium text-white'>
                        ¿Qué Hacemos?
                    </h3>
                </div>
                <p className='text-lg tracking-tight md:text-xl text-left text-white font-light'>
                    En Mindsale, brindamos un servicio integral de consultoría empresarial orientado a lograr el éxito eficiente de tu negocio. Nuestro enfoque comienza con un análisis exhaustivo de tu situación actual, evaluando los resultados de tu empresa y los puntos de contacto con tus clientes. Revisamos tu sistema de planificación estratégica y detectamos los obstáculos que impiden el logro de tus objetivos.
                </p>
                <p className='text-lg tracking-tight md:text-xl text-left text-white font-light mt-10'>
                    A partir de este diagnóstico, desarrollamos planes estratégicos personalizados que abarcan desde la mejora de tus activos digitales y físicos hasta la optimización de tu oferta de productos y servicios, basándonos en investigación de mercado. También adaptamos sistemas organizacionales para garantizar que tu empresa cumpla con sus metas de manera efectiva.
                </p>
            </div>
        </section>
    )
}

export default QueHacemos