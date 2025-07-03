'use client'

// Package Imports
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import { Dropdown } from "flowbite-react";

import { MdKeyboardArrowDown } from "react-icons/md";

const variants = {
    open: {
        clipPath: 'inset(-40% -20% -20% -40% round 2px)',
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
        },
        boxShadow: '-1px 4px 14px -6px rgba(0,0,0,0.75)'
    },
    closed: {
        clipPath: 'inset(10% 50% 90% 50% round 10px)',
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3
        }
    }
}

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        if (window.scrollY >= 90) {
            setIsScrolled(true)
        }
    }, [])

    useEffect(() => {
        const changeStyles = () => {
            if (window.scrollY >= 90) {
                setIsScrolled(true)
            } else { setIsScrolled(false) }
        }

        window.addEventListener('scroll', changeStyles)

        return () => window.removeEventListener('scroll', changeStyles)
    }, [])

    return (
        <header className={`w-full h-24 top-0 z-50 fixed p-1 ${isScrolled ? 'shadow-md bg-brand-blue/60 lg:bg-brand-blue/10 animate-fadeInDown' : ''}`}>
            <motion.nav
                animate={'open'}
                className='w-full max-w-3xl m-auto h-full p-3 flex flex-row justify-between lg:max-w-[100rem] items-center lg:px-10'>
                <Image
                    alt='Logo'
                    title='Logo'
                    src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1723220878/mindsale/mindsalewhite_1_kqrlqd.webp"
                    width={130}
                    height={130}
                    className='hidden lg:inline-block cursor-pointer'
                />
                <Image
                    alt='Logo'
                    title='Logo'
                    src="https://res.cloudinary.com/dpmum6s9p/image/upload/v1723237098/mindsale/logomobile_do1fpg.webp"
                    width={30}
                    height={30}
                    className='inline-block lg:hidden cursor-pointer'
                />
                <ul className='w-[90%] max-w-3xl p-8 text-left flex items-center self-center text-[1rem] gap-x-1 lg:gap-x-8 justify-center'>
                    {/* <li>
                        <Link className="cursor-pointer text-white text-[10px] lg:text-base font-normal border-b-2 border-b-transparent hover:border-b-brand-blue transition-all ease-linear duration-150"
                            to="Nosotros" smooth={true} offset={-140} href='#' title='Nosotros'>
                            Nosotros
                        </Link>
                    </li> */}
                    <li>
                        <Dropdown label="Nosotros" dismissOnClick={false} renderTrigger={() =>
                            <span className='cursor-pointer text-white text-[8px] lg:text-base font-normal border-2 border-brand-blue p-2 rounded-md transition-all ease-linear duration-150 flex whitespace-nowrap items-center hover:opacity-85'>
                                Nosotros <MdKeyboardArrowDown className='text-[8px] lg:text-2xl' />
                            </span>
                        }>
                            <Dropdown.Item>
                                <Link
                                    to="Nosotros" smooth={true} offset={-140} href='#' title='Nosotros'>
                                    Nosotros
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    to="Origen" smooth={true} offset={-140} href='#' title='Origen'>
                                    Origen
                                </Link>
                            </Dropdown.Item>
                        </Dropdown>
                    </li>

                    <li>
                        <Dropdown label="¿Que Hacemos?" dismissOnClick={false} renderTrigger={() =>
                            <span className='cursor-pointer text-white text-[8px] lg:text-base font-normal border-2 border-brand-blue p-2 rounded-md transition-all ease-linear duration-150 flex whitespace-nowrap items-center hover:opacity-85'>
                                ¿Que Hacemos? <MdKeyboardArrowDown className='text-[8px] lg:text-2xl' />
                            </span>
                        }>
                            <Dropdown.Item>
                                <Link
                                    to="Hacemos" smooth={true} offset={-140} href='#' title='Hacemos'>
                                    ¿Que Hacemos?
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    to="Servicios" smooth={true} offset={-140} href='#' title='Servicios'>
                                    Servicios
                                </Link>
                            </Dropdown.Item>
                        </Dropdown>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-white text-[8px] lg:text-base font-normal border-b-2 border-b-transparent hover:border-b-brand-blue transition-all ease-linear duration-150"
                            to="Agendar" smooth={true} offset={-140} href='#' title='Agendar'>
                            Contáctanos
                        </Link>
                    </li>
                </ul>
                <span className='relative rounded-xl cursor-pointer flex items-center justify-center overflow-hidden p-[1px] z-10'>
                    <div
                        className='w-full h-full absolute rounded-[100%] transform animate-styles_rotate'
                        style={{
                            backgroundImage:
                                'conic-gradient(#0057ff 20deg, transparent 120deg)'
                        }}
                    />
                    <span className={`relative z-20 block rounded-xl ${isScrolled ? 'bg-black' : 'bg-black'} 
                      p-1 lg:px-12 lg:py-4 text-center text-[7px] lg:text-sm text-white shadow-2xl font-medium`}>
                        <Link to="Contáctanos" smooth={true} offset={-140} href='#' title='Contáctanos'>
                            Agendar <br />
                            Consultoria <br />
                            gratis
                        </Link>
                    </span>
                </span>

            </motion.nav>
        </header>
    )
}

export default Navbar