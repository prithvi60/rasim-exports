import React from 'react'

const ServiceVideo = () => {
    return (
        <section className='relative px-6 py-10 md:px-14 xl:px-32'>
            <video
                muted
                loop
                autoPlay
                playsInline
                // ref={loadingImage}
                className={`h-[65vh] w-full object-cover object-center translate-y-0 transition-all duration-700 ease-linear rounded-tl-2xl`}
            >
                <source
                    src={
                        "https://ik.imagekit.io/webibee/Rasim-Exports/service_page/service-video.mp4"
                    }
                    type="video/mp4"
                />
            </video>
        </section>
    )
}

export default ServiceVideo
