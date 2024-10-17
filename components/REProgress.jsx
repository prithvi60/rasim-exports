import { REProcess } from '@/libs/data'
import Image from 'next/image'
import React from 'react'

const REProgress = () => {
    return (
        <section className='px-5 mx-auto py-7 lg:px-16 lg:py-12'>
            <div className='flex flex-col flex-wrap items-center justify-center gap-5 sm:flex-row md:gap-8'>
                {REProcess.map((list, idx) => (
                    <div key={idx} className='flex flex-col items-center justify-center gap-6 w-max'>
                        <div className='relative overflow-hidden bg-white rounded-full shadow-xl w-28 h-28 lg:h-36 lg:w-36'>
                            <Image alt={list.alt} fill src={list.img} className='object-cover object-center p-5' />
                        </div>
                        <h4 className='w-4/5 text-base font-semibold text-center font-figtree md:text-lg'>{list.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default REProgress
