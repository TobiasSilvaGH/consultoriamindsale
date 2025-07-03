import React from 'react'
import { Link } from 'react-scroll';

import { PiArrowDownLeftLight } from "react-icons/pi";
import { PiArrowUpRightThin } from "react-icons/pi";


const Nosotros = () => {
    return (
        <section className='w-full ' id="Nosotros">
            <div className='flex flex-col justify-center max-w-5xl p-2 py-20 m-auto text-center '>
                <div className='flex flex-row gap-1'>

                    <h3 className='text-left text-3xl xs:text-4xl xl:text-5xl mb-4 leading-[3rem] font-medium text-white'>
                        Sobre Nosotros
                    </h3>
                </div>
                <p className='text-lg tracking-tight md:text-xl text-left text-white font-light'>
                    En Mindsale, entendemos que cada empresa tiene objetivos únicos y desafíos específicos. Es por eso que te ofrecemos una consultoría personalizada para comprender a fondo su visión y objetivos, para así desarrollar un plan estratégico y encargarnos de llevarlo a cabo junto a nuestro equipo especializado.
                </p>

                <h3 className='text-left text-3xl xs:text-4xl xl:text-5xl mb-4 leading-[3rem] font-medium text-white mt-14'>
                    Nuestra Visión
                </h3>
                <p className='text-lg tracking-tight md:text-xl text-left text-white font-light'>
                    Queremos ser la primera opción para las empresas que buscan transformar sus visiones en realidades tangibles. Nos esforzamos por ser socios estratégicos en el éxito de nuestros clientes, sin importar su tamaño o sector.
                </p>

                <h3 className='text-left text-3xl xs:text-4xl xl:text-5xl mb-4 leading-[3rem] font-medium text-white mt-14'>
                    Nuestra Misión
                </h3>
                <p className='text-lg tracking-tight md:text-xl text-left text-white font-light'>
                    Nuestra misión es apoyar a las empresas con un enfoque basado en principios y valores fundamentales del éxito empresarial. Trabajamos en estrecha colaboración con cada cliente, desde la definición de su visión y valores hasta la implementación de estrategias efectivas para alcanzar sus objetivos.
                </p>

                <h3 className='text-left text-3xl xs:text-4xl xl:text-5xl mb-4 leading-[3rem] font-medium text-white mt-14'>
                    Nuestros Valores
                </h3>
                <p className='text-lg tracking-tight md:text-xl text-left text-white font-light'>
                    Nos guiamos por la integridad, diligencia, compromiso, innovación, colaboración y excelencia. Estos valores fundamentan nuestra capacidad para ofrecer resultados medibles y concretos que fomentan el crecimiento y la competitividad de nuestros clientes.
                </p>
            </div>
        </section>
    )
}

export default Nosotros