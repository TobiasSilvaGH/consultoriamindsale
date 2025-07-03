/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { PiArrowDownLeftLight } from "react-icons/pi";
import { PiArrowUpRightThin } from "react-icons/pi";

const Services = () => {
    const [moreData, setMoreData] = useState(false)
    const [indexItem, setIndexItem] = useState<number | null>()

    const images = [
        'https://res.cloudinary.com/dpmum6s9p/image/upload/v1723241003/mindsale/iconcarrousel_mstvlx.webp',
        'https://res.cloudinary.com/dpmum6s9p/image/upload/v1723241003/mindsale/iconcarrousel_mstvlx.webp',
        'https://res.cloudinary.com/dpmum6s9p/image/upload/v1723241003/mindsale/iconcarrousel_mstvlx.webp',
        'https://res.cloudinary.com/dpmum6s9p/image/upload/v1723241003/mindsale/iconcarrousel_mstvlx.webp',
    ]

    const items = [
        {
            title: 'Consultoría Empresarial',
            description: 'En Mindsale, ofrecemos un servicio integral de consultoría empresarial diseñado para transformar tu negocio. Comenzamos con un análisis exhaustivo de tu situación actual y resultados para entender tu punto de partida. Evaluamos los puntos de contacto con tus clientes, revisamos tu sistema de planificación estratégica y detectamos los obstáculos que impiden el logro de tus objetivos. Desarrollamos planes estratégicos personalizados, mejoramos tus activos digitales y físicos, y optimizamos tu oferta de productos y servicios mediante investigación de mercado. Adaptamos sistemas organizacionales para asegurar la efectividad en el cumplimiento de tus metas. Nuestro objetivo es proporcionarte soluciones prácticas y efectivas que impulsen el crecimiento y éxito de tu empresa.'
        },
        {
            title: 'Coaching Empresarial',
            description: 'Ayudamos a los directivos a identificar los obstáculos que impiden alcanzar los objetivos empresariales. Creamos planes de acción y brindamos acompañamiento continuo hasta su cumplimiento. Nuestro coaching está diseñado para mejorar el desempeño y la efectividad de los líderes y al personal de tu organización.'
        },
        {
            title: 'Branding e Identidad Visual',
            description: 'En Mindsale, entendemos que una marca sólida comienza con una imagen que comunique y refleje los valores de tu empresa. Desarrollamos una identidad visual alineada con tu visión y valores, facilitando así que tus clientes potenciales reconozcan y conecten con tu marca. Trabajamos en cada detalle para asegurar que tu marca se distinga y tenga un impacto duradero.'
        },
        {
            title: 'Comunicación, Marketing Digital y Ventas',
            description: 'Un gran producto necesita una comunicación efectiva para tener éxito. En Mindsale, optimizamos tus plataformas digitales para aumentar la visibilidad y conversión. Desarrollamos estrategias de marketing digital que impulsan el crecimiento, mejoran la visibilidad de tu negocio y aumentan las ventas. Nos aseguramos de que tu mensaje llegue de manera clara y eficaz a tu público objetivo.'
        },
        {
            title: 'Desarrollo Web',
            description: 'Nuestro equipo especializado en desarrollo web se encarga de optimizar tu sitio para alinearlo con los valores y branding de tu empresa. Adaptamos el sitio web a tus planes estratégicos de promoción y trabajamos en su posicionamiento para aumentar la visibilidad y conversión. Aseguramos que tu presencia en línea sea efectiva y que soporte tus objetivos empresariales.'
        }
    ]

    return (
        <section className='flex flex-col gap-10 lg:grid lg:grid-cols-2 max-w-full lg:max-w-[98%] m-auto p-4 lg:p-24' id='Servicios'>
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
                className="mySwiper max-w-full m-auto"
            >
                {
                    images.map((item, index) => (
                        <SwiperSlide key={index} className='bg-brand-blue/10 m-auto'>
                            <img
                                alt={`index carrousel`}
                                title={`index title`}
                                src={item}
                                className='w-28 m-auto mb-6 lg:m-auto lg:w-72'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className='flex flex-col text-white text-right lg:mx-20'>
                <h2 className="text-6xl lg:text-[70px] font-light tracking-tight text-white border-b-[2px] pb-5">SERVICIOS</h2>
                {
                    items.map((item, index) => (
                        <div key={index} className='flex flex-col gap-1 pb-4 my-3 border-b-[1px] border-y-white'>
                            <div className='flex flex-row gap-2 items-center justify-end'>
                                <h3 className='text-2xl lg:text-4xl font-extralight text-white'>{item.title}</h3>
                                {
                                    indexItem == index ? (
                                        <PiArrowUpRightThin className='text-white text-5xl cursor-pointer' onClick={() => setIndexItem(indexItem == index ? null : index)} />
                                    ) : (
                                        <PiArrowDownLeftLight className='text-white text-5xl cursor-pointer' onClick={() => setIndexItem(indexItem == index ? null : index)} />
                                    )
                                }
                            </div>
                            {
                                indexItem == index ? (
                                    <div className='flex flex-col gap-1'>

                                        <p className=' text-white text-sm lg:text-lg font-thin lg:mr-12'>
                                            {item.description}
                                        </p>
                                        {
                                            indexItem == 0 && moreData ? (
                                                <div className='flex flex-row justify-end'>
                                                    <PiArrowUpRightThin className='text-brand-blue text-5xl cursor-pointer text-right' onClick={() => setMoreData(prev => !prev)} />
                                                </div>
                                            ) : indexItem == 0 && !moreData ? (
                                                <div className='flex flex-row justify-end'>
                                                    <PiArrowDownLeftLight className='text-brand-blue text-5xl cursor-pointer text-right' onClick={() => setMoreData(prev => !prev)} />
                                                </div>
                                            ) : null
                                        }
                                        {
                                            indexItem == 0 && moreData && (
                                                <ul className='list-disc space-y-4 p-4 '>
                                                    <li className='text-left text-gray-300 text-lg font-semibold leading-relaxed'>
                                                        Análisis de la Situación y Resultados <br />
                                                        <span className='text-sm text-gray-100 font-normal'>
                                                            Evaluamos el estado actual de tu empresa y los resultados obtenidos para entender tu situación inicial y establecer una base sólida para la mejora.
                                                        </span>
                                                    </li>
                                                    <li className='text-left text-gray-300 text-lg font-semibold leading-relaxed'>
                                                        Revisión de Puntos de Contacto con Clientes <br />
                                                        <span className='text-sm text-gray-100 font-normal'>
                                                            Examinamos todos los puntos de contacto entre tu empresa y tus clientes para identificar oportunidades de optimización y fortalecer las relaciones con ellos.
                                                        </span>
                                                    </li>
                                                    <li className='text-left text-gray-300 text-lg font-semibold leading-relaxed'>
                                                        Evaluación del Sistema de Planificación Estratégica<br />
                                                        <span className='text-sm text-gray-100 font-normal'>
                                                            Revisamos si tu empresa cuenta con un sistema de planificación estratégica adecuado para alcanzar sus objetivos. En caso necesario, proponemos mejoras para asegurar que tu estrategia esté alineada con tus metas.
                                                        </span>
                                                    </li>
                                                    <li className='text-left text-gray-300 text-lg font-semibold leading-relaxed'>
                                                        Identificación de Obstáculos y Oportunidades<br />
                                                        <span className='text-sm text-gray-100 font-normal'>
                                                            Detectamos los factores que están bloqueando el logro de tus objetivos y descubrimos oportunidades de crecimiento e implementación para potenciar tu negocio.
                                                        </span>
                                                    </li>
                                                    <li className='text-left text-gray-300 text-lg font-semibold leading-relaxed'>
                                                        Desarrollo de Planes Estratégicos <br />
                                                        <span className='text-sm text-gray-100 font-normal'>
                                                            Creamos planes estratégicos personalizados que están alineados con la visión y los objetivos de tu empresa. Trabajamos contigo para llevar a cabo estos planes y asegurar su completa implementación y cumplimiento.
                                                        </span>
                                                    </li>
                                                    <li className='text-left text-gray-300 text-lg font-semibold leading-relaxed'>
                                                        Optimización de Puntos de Contacto Digitales y Nuevos Canales de Venta <br />
                                                        <span className='text-sm text-gray-100 font-normal'>
                                                            Mejoramos tus puntos de contacto digitales y añadimos nuevos canales de venta, como e-commerce, para ampliar tu alcance y mejorar la experiencia del cliente.
                                                        </span>
                                                    </li>
                                                    <li className='text-left text-gray-300 text-lg font-semibold leading-relaxed'>
                                                        Optimización Estratégica de Productos y Servicios<br />
                                                        <span className='text-sm text-gray-100 font-normal'>
                                                            Realizamos investigaciones de mercado y análisis de opiniones de clientes para optimizar tus productos y servicios. Alineamos tu oferta con las expectativas del consumidor y las tendencias del mercado para maximizar su éxito.
                                                        </span>
                                                    </li>
                                                    <li className='text-left text-gray-300 text-lg font-semibold leading-relaxed'>
                                                        Diseño y Adaptación Organizacional <br />
                                                        <span className='text-sm text-gray-100 font-normal'>
                                                            Adaptamos o creamos sistemas organizativos para el seguimiento efectivo de los planes estratégicos. Mejoramos la efectividad y motivación en el cumplimiento de los objetivos propuestos.
                                                        </span>
                                                    </li>

                                                </ul>
                                            )
                                        }
                                    </div>
                                ) : null
                            }
                        </div>
                    ))
                }
            </div>


        </section>
    )
}

export default Services