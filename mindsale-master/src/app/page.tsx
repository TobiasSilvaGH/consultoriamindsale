import Image from "next/image";

// Component Imports
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatsappButton from "@/components/WhatsappButton";
import VisionesTangibles from "@/components/VisionesTangibles";
import Nosotros from "@/components/Nosotros";
import QueHacemos from "@/components/QueHacemos";
import Carrousel from "@/components/Carrousel";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Form from "@/components/Form";
import ElOrigen from "@/components/ElOrigen";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-12 bg-black min-h-screen">
        <div className="flex flex-col mt-32 lg:mt-52 gap-y-32 sm:gap-y-52 p-4 lg:p-2">
          <Hero />
          <WhatsappButton />
        </div>
        <div style={{
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://res.cloudinary.com/dpmum6s9p/image/upload/v1723500385/mindsale/fondomindsale_ru8ps2.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(15px)',
            zIndex: -1,
          }} />
          <div className="flex flex-col mt-32 lg:-mt-16 gap-y-32">
            <VisionesTangibles />
            <Nosotros />
            <QueHacemos />
            <Carrousel />
            <Services />
            <Clients />
            <Contact />
            <Form />
            <ElOrigen />
          </div>
          <Image
            alt='Contact bg'
            title='Contact bg'
            layout="responsive"
            width={720}
            height={480}
            sizes='100vw'
            src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1723503327/mindsale/finalicon_uoxoer.webp'
            className="w-full h-auto "
          />
        </div>
      </main>
    </>
  );
}
