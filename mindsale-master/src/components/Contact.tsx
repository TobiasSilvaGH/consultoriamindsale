'use client'
import React, { useEffect } from 'react'
import { InlineWidget } from "react-calendly";

const Contact = () => {

    return (
        <section className='relative flex flex-col gap-20 p-4 lg:p-24' id='Contáctanos'>
            <h3 className='text-3xl lg:text-5xl font-light text-white text-center -tracking-tight'>
                CONSTRUYAMOS
                <span className='font-semibold'> JUNTOS</span>
            </h3>

            <button className='text-xl m-auto py-2 px-10 rounded-full w-fit text-white bg-gradient-to-r from-[#2373fc] to-[#062961]'>
                Contactanos
            </button>

            {/* <InlineWidget styles={{}} url="https://calendly.com/tobiass327/30min" /> */}
            <div style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }} className=''>
                <InlineWidget
                    url="https://calendly.com/tobiass327/30min"
                    styles={{ height: '600px', width: '100%', overflow: 'none' }}
                    pageSettings={{
                        backgroundColor: '2373fc',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '00a2ff',
                        textColor: '4d5055'
                    }}
                />
            </div>

        </section>
    )
}

export default Contact