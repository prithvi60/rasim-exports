import React from "react";
import { IoLocation } from "react-icons/io5";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const ContactUsHome = () => {
    return (
        <section className="flex flex-col items-start gap-5 px-6 py-10 text-white justify-normal lg:flex-row md:px-14 xl:px-32">
            <div className="w-full p-10 mx-auto space-y-0 lg:w-2/5 bg-primary">
                <h3 className="w-full text-5xl font-normal text-center capitalize font-libreCaslonDisplay tracking-custom">
                    Get in touch!
                </h3>
                <form
                    className="space-y-7 font-libreCaslonDisplay"
                    action={
                        "https://public.herotofu.com/v1/cd09b6a0-91c7-11ef-82c2-4bbcc1388e1d"
                    }
                    method="post"
                    accept-charset="UTF-8"
                >
                    {/* User Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="mb-2.5 block font-medium text-white capitalize "
                        >
                            Name
                        </label>
                        <div className="relative font-figtree">
                            <input
                                id="name"
                                type="text"
                                name="Name"
                                placeholder="Enter your User Name"
                                className="w-full py-4 pl-6 pr-10 text-white bg-transparent border rounded-lg outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <FaRegUser className="absolute text-xl right-4 top-5 text-neutral-200" />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="mb-2.5 block font-medium text-white capitalize"
                        >
                            Email
                        </label>
                        <div className="relative font-figtree">
                            <input
                                id="email"
                                name="Email"
                                type="email"
                                placeholder="Enter your User Name"
                                className="w-full py-4 pl-6 pr-10 text-white bg-transparent border rounded-lg outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <BsEnvelopeAtFill className="absolute text-xl right-4 top-5 text-neutral-200" />
                        </div>
                    </div>
                    {/* phone no. */}
                    <div className="mb-4">
                        <label
                            htmlFor="phone"
                            className="mb-2.5 block font-medium text-white capitalize"
                        >
                            Phone Number
                        </label>
                        <div className="relative font-figtree">
                            <input
                                name="Phone"
                                id="phone"
                                type="text"
                                placeholder="Enter your User Name"
                                className="w-full py-4 pl-6 pr-10 text-white bg-transparent border rounded-lg outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <FaPhoneAlt className="absolute text-xl right-4 top-5 text-neutral-200" />
                        </div>
                    </div>
                    {/* Message */}
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="mb-2.5 block font-medium text-white capitalize"
                        >
                            Message
                        </label>
                        <div className="relative font-figtree">
                            <textarea
                                name="Message"
                                id="message"
                                placeholder="Enter Your Message"
                                rows={3}
                                className="w-full py-4 pl-6 pr-10 text-white bg-transparent border rounded-lg outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <MdOutlineMessage className="absolute text-xl right-4 top-10 text-neutral-200" />
                        </div>
                    </div>
                    {/* Submit */}
                    <div className="w-full mx-auto mb-5 text-center">
                        <button
                            type="submit"
                            className="px-5 py-3 transition cursor-pointer rounded-xl w-max tracking-custom hover:bg-opacity-90 bg-secondary disabled:bg-opacity-40"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="block w-full p-5 text-white space-y-9 sm:p-10 lg:w-3/5 bg-primary">
                <div className="flex items-center gap-3">
                    <IoLocation className="text-5xl text-white" />
                    <h4 className="text-5xl font-normal tracking-wide text-white font-libreCaslonDisplay">
                        Location
                    </h4>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="block ml-3.5 space-y-4">
                        <h4 className="text-2xl font-semibold tracking-wide text-white capitalize font-figtree">
                            Factory <span className="text-sm">(For Communication)</span>
                        </h4>
                        <div className="text-lg font-normal tracking-wide capitalize font-figtree">
                            <p className="w-full text-white">
                                4/249A, Rasim Enclave, Poonamallee
                                <br />
                                High Rd, Goparasanallur
                                <br />
                                Kattupakkam, Chennai - 600056
                            </p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.9247210789926!2d80.11232561629664!3d13.048682773950777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c39e8c0a61%3A0x10060ee946c2087!2sRasim%20Exports%20Private%20Limited!5e0!3m2!1sen!2sin!4v1727437573636!5m2!1sen!2sin"
                            width={"100%"}
                            height={"100%"}
                            className="h-[220px]"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="block ml-3.5 space-y-4">
                        <h4 className="text-2xl font-semibold tracking-wide text-white capitalize font-figtree">
                            Head office
                        </h4>
                        <div className="text-lg font-normal tracking-wide capitalize font-figtree">
                            <p className="w-full text-white">
                                # 18/13, Zakariya colony 1st Street
                                <br />
                                Choolaimedu, Chennai,
                                <br />
                                Tamil Nadu - 600 094.
                            </p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.8494032357875!2d80.1199942454696!3d13.048702578877181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261fcc5f55f75%3A0x59f2e49cbaead487!2sHDFC%20Bank!5e0!3m2!1sen!2sin!4v1729844811145!5m2!1sen!2sin"
                            width={"100%"}
                            height={"100%"}
                            className="h-[220px] "
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <BsEnvelopeAtFill className="text-5xl text-white" />
                    <h4 className="text-5xl font-normal tracking-wide text-white font-libreCaslonDisplay">
                        Email Us
                    </h4>
                </div>
                <ul className="flex flex-wrap items-center text-lg font-normal text-white list-disc gap-7 ml-9 font-figtree">
                    <li>md@rasims.com</li>
                    <li>hr@rasims.com</li>
                    <li>info@rasims.com</li>
                </ul>
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.9247210789926!2d80.11232561629664!3d13.048682773950777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c39e8c0a61%3A0x10060ee946c2087!2sRasim%20Exports%20Private%20Limited!5e0!3m2!1sen!2sin!4v1727437573636!5m2!1sen!2sin"
                    width={"100%"}
                    height={"100%"}
                    className="h-[320px] lg:h-full"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
            </div>
        </section>
    );
};

export default ContactUsHome;
