import React from 'react'
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const ContactForm = () => {
    return (
        <section className='px-6 py-10 mx-auto md:px-14 xl:px-32 '>
            <div className="w-full p-10 mx-auto space-y-6 lg:w-3/5 bg-primary rounded-tl-[20px]">
                <h3 className="w-full text-5xl font-normal text-center capitalize text-secondary font-libreCaslonDisplay">
                    Get in touch!
                </h3>
                <form>
                    {/* User Name */}
                    <div className="mb-4">
                        <label className="mb-2.5 block font-medium text-white capitalize">
                            Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter your User Name"
                                className="w-full py-4 pl-6 pr-10 text-white bg-transparent border rounded-lg outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <FaRegUser className="absolute text-xl right-4 top-5 text-neutral-200" />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="mb-2.5 block font-medium text-white capitalize">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your User Name"
                                className="w-full py-4 pl-6 pr-10 text-white bg-transparent border rounded-lg outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <BsEnvelopeAtFill className="absolute text-xl right-4 top-5 text-neutral-200" />
                        </div>
                    </div>
                    {/* phone no. */}
                    <div className="mb-4">
                        <label className="mb-2.5 block font-medium text-white capitalize">
                            Phone Number
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter your User Name"
                                className="w-full py-4 pl-6 pr-10 text-white bg-transparent border rounded-lg outline-none border-stroke placeholder:text-slate-300 placeholder:text-sm focus:border-secondary focus-visible:shadow-none"
                            />
                            <FaPhoneAlt className="absolute text-xl right-4 top-5 text-neutral-200" />
                        </div>
                    </div>
                    {/* Message */}
                    <div className="mb-6">
                        <label className="mb-2.5 block font-medium text-white capitalize">
                            Message
                        </label>
                        <div className="relative">
                            <textarea
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
                            className="px-5 py-3 uppercase transition cursor-pointer rounded-xl w-max text-primary hover:bg-opacity-90 bg-secondary disabled:bg-opacity-40 font-libreCaslonDisplay"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm
