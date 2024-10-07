import React from 'react'

const VisionMission = () => {
    return (
        <section className="flex flex-col items-center justify-between gap-6 px-6 py-10 lg:flex-row md:px-14 xl:px-32">
            <div className='size-[320px] sm:size-[460px] p-3.5 bg-secondary rounded-full flex justify-center items-center'>
                <div className='size-[290px] sm:size-[430px] p-3.5 bg-primary rounded-full flex justify-center items-center'>
                    <div className='size-[260px] sm:size-[400px] p-3.5 bg-secondary rounded-full flex justify-center  items-center'>
                        <div className='size-[230px] sm:size-[370px] flex flex-col items-center justify-start ga-2 sm:gap-7 w-full bg-white rounded-full py-3.5 sm:py-7 px-9 overflow-scroll no-scrollbar'>
                            <h4 className='text-2xl font-medium tracking-wide text-justify sm:text-4xl font-libreCaslonDisplay'>MISSION</h4>
                            <p className='mb-5 text-sm font-normal text-justify sm:text-base font-figtree sm:mb-0'>Since <span className='text-3xl sm:text-[40px] font-libreCaslonDisplay font-medium whitespace-nowrap'>2002</span> Rasim Exports Pvt Ltd has been at the heart of apparel manufacturing, committed to crafting high-quality clothing for men, women, and children. Our journey is driven by a passion for excellence and a dedication to sus</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block p-10 space-y-6 text-white bg-primary rounded-tl-xl'>
                <h4 className='text-2xl font-medium tracking-wide text-center sm:text-4xl font-libreCaslonDisplay'>VISION</h4>
                <p className='text-sm sm:text-xl font-medium font-figtree !leading-snug'>
                    Since <span className='text-[40px] font-libreCaslonDisplay font-medium whitespace-nowrap'>2002</span> Rasim Exports Pvt Ltd has been at the heart of apparel manufacturing, committed to crafting high-quality clothing for men, women, and children. Our journey is driven by a passion for excellence and a dedication to sus
                </p>
            </div>
        </section>
    )
}

export default VisionMission
