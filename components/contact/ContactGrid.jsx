import React from 'react'
import { BsEnvelopeAtFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'

const ContactGrid = () => {
    return (
        <section className='grid grid-cols-1 gap-5 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3 md:px-14 xl:px-32'>
            <div className='block space-y-6 rounded-tl-[20px] bg-secondary p-5 '>
                <div className='p-2 bg-primary w-max rounded-tl-[14px]'>
                    <BsEnvelopeAtFill className="text-4xl xl:text-5xl text-secondary" />
                </div>
                <h4 className="text-4xl font-normal tracking-wide xl:text-5xl font-libreCaslonDisplay text-primary">
                    Email Us
                </h4>
                <ul className="p-2 space-y-6 sm:space-y-10 text-xl sm:text-[26px] xl:text-[36px] font-normal text-white list-disc list-inside font-figtree bg-primary w-full sm:w-max">
                    <li>
                        md@rasims.com
                    </li>
                    <li>
                        hr@rasims.com
                    </li>
                </ul>
            </div>
            <div className='block space-y-6 rounded-tl-[20px] bg-secondary p-5 '>
                <div className='p-2 bg-primary w-max rounded-tl-[14px]'>
                    <IoLocation className="text-4xl xl:text-5xl text-secondary" />
                </div>
                <h4 className="text-4xl font-normal tracking-wide xl:text-5xl font-libreCaslonDisplay text-primary">
                    Location
                </h4>
                <ul className="w-full p-2 space-y-3 bg-primary sm:w-max">
                    <li>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.9247210789926!2d80.11232561629664!3d13.048682773950777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c39e8c0a61%3A0x10060ee946c2087!2sRasim%20Exports%20Private%20Limited!5e0!3m2!1sen!2sin!4v1727437573636!5m2!1sen!2sin" width={"100%"} height={"100%"} className="h-[80px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </li>
                    <li>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.9247210789926!2d80.11232561629664!3d13.048682773950777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c39e8c0a61%3A0x10060ee946c2087!2sRasim%20Exports%20Private%20Limited!5e0!3m2!1sen!2sin!4v1727437573636!5m2!1sen!2sin" width={"100%"} height={"100%"} className="h-[80px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </li>
                </ul>
            </div>
            <div className='block space-y-6 rounded-tl-[20px] bg-secondary p-5 '>
                <div className='p-2 bg-primary w-max rounded-tl-[14px]'>
                    <FaPhoneAlt className="text-4xl xl:text-5xl text-secondary" />
                </div>
                <h4 className="text-4xl font-normal tracking-wide xl:text-5xl font-libreCaslonDisplay text-primary">
                    Phone
                </h4>
                <ul className="p-2 text-xl space-y-4 sm:space-y-6 sm:text-[22px] xl:text-[30px] font-normal text-white list-disc list-inside font-figtree bg-primary w-full sm:w-max">
                    <li>
                        044-26496461
                    </li>
                    <li>
                        +91 - 98410 - 78683
                    </li>
                    <li>
                        +91 - 95516 - 97865
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ContactGrid