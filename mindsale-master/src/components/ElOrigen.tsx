import React from 'react'
import Image from 'next/image'

const ElOrigen = () => {
    return (
        <section className={`flex w-full`} id='Origen'>
            <div className="relative m-auto max-w-3xl lg:mx-32 lg:grid lg:max-w-full lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:gap-x-8">
                <div className='flex flex-col justify-center p-2 py-20 m-auto text-center col-span-1 '>
                    <h3 className='text-left text-3xl xs:text-4xl xl:text-5xl mb-4 leading-[3rem] font-medium text-white'>
                        Mindsale: el origen
                    </h3>
                    <p className='text-lg tracking-tight md:text-xl text-left text-stone-300 font-light'>
                        Hola, mi nombre es Tobías Gastón Silva, fundador de Mindsale.<br />
                        Coach profesional y personal. Marketing digital y Ventas. Plan de negocios. Planificación Estratégica. Programación.
                    </p>
                    <p className='text-lg tracking-tight md:text-xl text-left text-white font-light mt-10'>
                        A través de mi experiencia laboral me di cuenta que muchas empresas tenían inconvenientes similares con las ventas, en el marketing, en el equipo de trabajo y les costaba cumplir sus objetivos empresariales. Estas empresas invertían mucho dinero en marketing, rotaban de personal, cambiaban de estrategias y aun así seguían sin conseguir sus objetivos y todo esto me llevo a involucrarme en el estudio de las causas del éxito en las empresas. Me di cuenta que los fracasos eran por motivos similares como: Las empresas que invertían mucho dinero en marketing no se preocupaban mucho por el servicio que estaban ofreciendo, o no comunicaban de manera clara su servicio. No contaban con un sistema de organización que les permita hacer un seguimiento de las estrategias. No contaban con una base solida de su negocio (Plan de Negocios) y Esto hacia que no tengan una fuente de consulta para su crecimiento. El personal no tenia en claro la visión y objetivos, entre muchos más… Entonces diseñe una propuesta única en la que te ofrecemos una consultoría gratuita para poder analizar todos los motivos de tu empresa por las cuales no están pudiendo conseguir los objetivos empresariales, diseñarte un plan solido para que les permita tener un crecimiento sostenible en el tiempo y un acompañamiento hasta su implementación.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0 col-span-1">
                    <Image
                        alt='Hero Icon'
                        title='Hero Icon'
                        width={750}
                        height={750}
                        src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1724347641/mindsale/FotoportadaTobias_1_1_dymszg.webp'
                    />
                </div>
            </div>
        </section>
    )
}

export default ElOrigen