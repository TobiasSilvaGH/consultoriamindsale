"use client"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WhatsappButton = () => {
    return (
        <FloatingWhatsApp
            phoneNumber='+5493764358285'
            accountName="Mindsale"
            statusMessage=""
            chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
            placeholder="Escribe un mensaje..."
            avatar='https://res.cloudinary.com/dpmum6s9p/image/upload/v1723237098/mindsale/logomobile_do1fpg.webp'
        />
    )
}

export default WhatsappButton