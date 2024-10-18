import React from 'react'
import ScrollToSection from '../ScrollToSection '

const VisionMission = () => {

    return (
        <>
            <ScrollToSection offset={-100} duration={500} />
            <section name="vision" id="vision" className="flex flex-col items-center justify-between gap-6 px-6 py-14 lg:flex-row md:px-14 xl:px-32">
                <div className='size-[320px] sm:size-[510px] p-3.5 bg-primary rounded-full flex justify-center items-center'>
                    <div className='size-[290px] sm:size-[480px] p-3.5 bg-secondary rounded-full flex justify-center items-center'>
                        <div className='size-[260px] sm:size-[450px] p-3.5 bg-primary rounded-full flex justify-center  items-center'>
                            <div className='size-[230px] sm:size-[420px] flex flex-col items-center justify-start ga-2 sm:gap-7 w-full bg-white rounded-full py-3.5 sm:py-7 px-9 overflow-scroll no-scrollbar'>
                                <h4 className='text-2xl font-medium tracking-wide text-justify sm:text-4xl font-libreCaslonDisplay'>MISSION</h4>
                                <p className='mb-5 text-sm font-normal text-justify sm:text-base font-figtree sm:mb-0'>From 2002, when Rasim was started as a small shirt manufacturer entering into the apparel market, we have come a long way expanding our business into various products such as dresses, jumpsuits, bottoms,  kids and infant clothing for Men, Women, Boys & Girls. While we have grown in scale, the core mission still remains unchanged: <span className='italic'>“Placing customers at the heart of everything we do”</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block p-10 space-y-6 text-white bg-primary rounded-tl-xl'>
                    <h4 className='text-2xl font-medium tracking-wide text-center sm:text-4xl font-libreCaslonDisplay'>VISION</h4>
                    <p className='text-sm sm:text-xl font-medium font-figtree !leading-custom-line text-justify'>
                        Rasim  guarantees fashion that breaks down barriers by eliminating wastes and adopting various sustainable and eco friendly practices throughout the factory. Leveraging strong marketing expertise, our company continuously enhances its offering, ensuring global buyers to find the clothing they love.
                    </p>
                </div>
            </section>
        </>
    )
}

export default VisionMission
