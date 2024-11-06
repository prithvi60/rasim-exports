import React from "react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactGrid = () => {
    return (
        <section className="grid grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 md:px-14 xl:px-32 place-content-center place-items-center">
            <div className="block space-y-4 rounded-lg w-full md:w-[35vw] bg-primary p-6 shadow-lg transition-transform transform hover:scale-105">
                <div className="flex items-center justify-start gap-4">
                    <BsEnvelopeAtFill className="text-3xl text-white" />
                    <h4 className="text-3xl font-semibold text-white tracking-custom font-libreCaslonDisplay" style={{ lineHeight: '1.5' }}>
                        Email Us
                    </h4>
                </div>
                <ul className="p-2 space-y-2 text-lg font-normal text-white font-figtree text-center">
                    <li>md@rasims.com</li>
                    <li>mr@rasims.com</li>
                    <li>hb@rasims.com</li>
                </ul>
            </div>
            <div className="block space-y-4 rounded-lg w-full md:w-[35vw] bg-primary p-6 shadow-lg transition-transform transform hover:scale-105">
                <div className="flex items-center justify-start gap-4">
                    <FaPhoneAlt className="text-3xl text-white" />
                    <h4 className="text-3xl font-semibold text-white tracking-custom font-libreCaslonDisplay" style={{ lineHeight: '1.5' }}>
                        Phone
                    </h4>
                </div>
                <ul className="p-2 space-y-2 text-lg font-normal text-white font-figtree text-center">
                    <li>+044 - 26791882&nbsp;&nbsp;</li>
                    <li>+91 - 8939235917</li>
                    <li>+91 - 9551697865</li>
                </ul>
            </div>
            <div className="block space-y-4 rounded-lg w-full md:w-[35vw] bg-primary p-6 shadow-lg transition-transform transform hover:scale-105">
                <div className="flex items-center justify-start gap-4">
                    <IoLocation className="text-3xl text-white" />
                    <h4 className="text-3xl font-semibold text-white tracking-custom font-libreCaslonDisplay" style={{ lineHeight: '1.5' }}>
                        Head Office
                    </h4>
                </div>
                <ul className="w-full p-2 space-y-2 text-lg font-normal text-white font-figtree">
                    <li>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.8370508540197!2d80.22954378642928!3d13.054986395709701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267867309ff9b%3A0x72df85537ff7338b!2sRasim%20crescent!5e0!3m2!1sen!2sin!4v1730896009567!5m2!1sen!2sin"
                            width={"100%"}
                            height={"300"}
                            className="rounded-lg"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </li>
                </ul>
            </div>
            <div className="block space-y-4 rounded-lg w-full md:w-[35vw] bg-primary p-6 shadow-lg transition-transform transform hover:scale-105">
                <div className="flex items-center justify-start gap-4">
                    <IoLocation className="text-3xl text-white" />
                    <h4 className="text-3xl font-semibold text-white tracking-custom font-libreCaslonDisplay" style={{ lineHeight: '1.5' }}>
                        Factory
                    </h4>
                </div>
                <ul className="w-full p-2 space-y-2 text-lg font-normal text-white font-figtree">
                    <li>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.8494032357875!2d80.1199942454696!3d13.048702578877181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261fcc5f55f75%3A0x59f2e49cbaead487!2sHDFC%20Bank!5e0!3m2!1sen!2sin!4v1729844811145!5m2!1sen!2sin"
                            width={"100%"}
                            height={"300"}
                            className="rounded-lg"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ContactGrid;
