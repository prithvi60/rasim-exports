import ContactForm from '@/components/contact/ContactForm'
import ContactGrid from '@/components/contact/ContactGrid'
import ContactHero from '@/components/contact/ContactHero'
import React from 'react'

const page = () => {
    return (
        <section>
            <ContactHero />
            <ContactGrid />
            <ContactForm />
        </section>
    )
}

export default page
