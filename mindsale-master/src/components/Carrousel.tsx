/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const itemsInfo = [
    {
        "title": "Enfoque Integral y Personalizado",
        "subtitle": "Diseñamos soluciones a medida, alineadas con la visión y objetivos específicos de cada cliente, asegurando un enfoque único para cada empresa.",
        "image": "https://res.cloudinary.com/dpmum6s9p/image/upload/v1723241003/mindsale/iconcarrousel_mstvlx.webp",
    },
    {
        "title": "Transformación Estratégica",
        "subtitle": "Integramos todos los aspectos del negocio para una transformación completa, no solo en términos digitales, sino también en estrategia y procesos internos.",
        "image": "https://res.cloudinary.com/dpmum6s9p/image/upload/v1723246893/mindsale/iconcarrousel2_hp13fs.webp",
    },
    {
        "title": "Asociación Proactiva",
        "subtitle": "Acompañamos a nuestros clientes en cada paso del camino, asegurando que las soluciones implementadas no solo cumplan, sino que superen sus expectativas y objetivos.",
        "image": "https://res.cloudinary.com/dpmum6s9p/image/upload/v1723246894/mindsale/iconcarrousel3_hsocta.webp",
    },
    // {
    //     "title": "Branding e Identidad Visual",
    //     "subtitle": "En Mindsale entendemos que para construir una marca sólida es esencial tener una imagen que comunique y refleje los valores que deseamos transmitir a nuestros clientes potenciales. Por eso, nos encargamos de desarrollar una imagen que esté alineada con la visión y los valores de tu empresa, facilitando así que tus clientes la identifiquen y se conecten con ella. ",
    //     "image": "https://res.cloudinary.com/dpmum6s9p/image/upload/v1723246894/mindsale/iconcarrousel4_kxrfrz.webp",
    // },
    // {
    //     "title": "Comunicación, Marketing Digital y Ventas",
    //     "subtitle": "Puede ser que tengamos un gran producto, pero con esto no basta porque por ahí no lo estamos comunicando de manera clara es por eso que en Mindsale buscamos comunicar de manera clara, crear u optimizar tus plataformas digitales para aumentar la visibilidad y la conversión, desarrollando estrategias que impulsan el crecimiento, visibilidad de tu negocio y aumentar las ventas. ",
    //     "image": "https://res.cloudinary.com/dpmum6s9p/image/upload/v1723246895/mindsale/iconcarrousel5_guhu1i.webp",
    // },
    // {
    //     "title": "Desarrollo Web",
    //     "subtitle": "Junto a nuestro equipo especializado en desarrollo web optimizamos tu sitio web para que tenga alineación con los valores y branding de tu empresa. También adaptarlo para los planes estratégicos de promoción del producto o servicio. También posicionar tu sitio web para aumentar la visibilidad y la conversión.",
    //     "image": "https://res.cloudinary.com/dpmum6s9p/image/upload/v1723246928/mindsale/iconcarrousel6_usp0f8.webp",
    // },
]

const Carrousel = () => {
    return (
        <section
            style={{
                backgroundImage: 'url("https://res.cloudinary.com/dpmum6s9p/image/upload/v1723241004/mindsale/carrusel_f1ftsn.webp")',
                backgroundSize: 'cover', // Asegura que la imagen cubra todo el espacio disponible
                backgroundPosition: 'center' // Centra la imagen en el contenedor
            }}
            className={`flex items-center aspect-video rounded-lg m-auto max-w-full lg:max-w-[98%] xl:max-w-[80%] shadow-lg p-8 lg:p-24 mt-20 `}>
            <Swiper
                style={{
                    '--swiper-pagination-color': '#ffff',
                } as React.CSSProperties}
                loop
                slidesPerView={1}
                spaceBetween={300}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-full"
            >

                {
                    itemsInfo.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col gap-[2px] lg:gap-4 lg:grid lg:grid-cols-2 h-full items-center m-auto'>
                                <img
                                    alt={`${item.title} carrousel`}
                                    title={`${item.title} title`}
                                    src={item.image}
                                    className='w-28 lg:m-auto lg:w-72'
                                />
                                <div className='flex flex-col gap-2 lg:gap-12 mb-10 lg:mb-0'>
                                    <h1 className="text-[10px] lg:text-5xl font-semibold tracking-tight text-white lg:text-right uppercase">
                                        {item.title}
                                    </h1>
                                    <p className='text-white text-[8px] lg:text-lg lg:text-right font-light'>{item.subtitle} </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>


        </section>
    )
}

export default Carrousel