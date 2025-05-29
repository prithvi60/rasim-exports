import CertificateSpinningLogo from '@/components/certification/CertificateSpinningLogo'
import React from 'react'

const page = () => {
    return (
        <main>
            {/* <CertificateCarousel /> */}
            <CertificateSpinningLogo />
            <ESGOutcomes />
        </main>
    )
}

export default page


const ESGOutcomes = () => {
    return (
        <div className='flex flex-col items-center justify-center p-6 bg-primary text-white'>
            <h1 className='text-3xl font-bold mb-4'>Environmental, Social, and Governance (ESG) Outcomes at Rasim</h1>
            <ul className='list-disc pl-5 space-y-4'>
                <li>
                    <strong className='text-lg'>Continuous Improvement Focus:</strong>
                    <ul className='list-disc pl-5'>
                        <li>Aim to enhance ESG outcomes through data-driven insights, tools, and services.</li>
                    </ul>
                </li>
                <li>
                    <strong className='text-lg'>Certifications:</strong>
                    <ul className='list-disc pl-5'>
                        <li><strong>WRAP Approval:</strong> Rasim is a WRAP-approved factory, demonstrating compliance with social compliance criteria.</li>
                        <li><strong>Sedex Certification:</strong> Validates ethical business practices to customers globally.</li>
                    </ul>
                </li>
                <li>
                    <strong className='text-lg'>Management Systems:</strong>
                    <ul className='list-disc pl-5'>
                        <li><strong>SA8000:</strong> A management-systems approach for social performance emphasizing continuous improvement over mere checklist audits.</li>
                    </ul>
                </li>
                <li>
                    <strong className='text-lg'>Organic Standards:</strong>
                    <ul className='list-disc pl-5'>
                        <li><strong>Organic Content Standard (OCS):</strong> A global standard for third-party certification of organic materials and chain of custody.</li>
                        <li>Goal: Increase organic agricultural production.</li>
                    </ul>
                </li>
                <li>
                    <strong className='text-lg'>Textile Certifications:</strong>
                    <ul className='list-disc pl-5'>
                        <li><strong>GOTS (Global Organic Textile Standard):</strong> High-level environmental criteria across the organic textiles supply chain.</li>
                        <li>Requires compliance with social criteria.</li>
                        <li>Certification for textile products with a minimum of 70% organic fibers.</li>
                    </ul>
                </li>
                <li>
                    <strong className='text-lg'>Accredited Monitoring:</strong>
                    <ul className='list-disc pl-5'>
                        <li><strong>Accordia:</strong> Over 20 years as an Accredited Monitoring Firm for the WRAP Factory Certification program.</li>
                    </ul>
                </li>
                <li>
                    <strong className='text-lg'>OEKO-TEX Standards:</strong>
                    <ul className='list-disc pl-5'>
                        <li>Science-based standards to help make responsible decisions and protect natural resources.</li>
                        <li>Certification system for textiles and leather products, measuring harmful substances.</li>
                        <li>Accordia&apos;s accreditation spans major sourcing countries in the Americas and Asia.</li>
                    </ul>
                </li>
                <li>
                    <strong className='text-lg'>Compliance Principles:</strong>
                    <ul className='list-disc pl-5'>
                        <li>The program is based on 12 Principles focusing on:
                            <ul className='list-disc pl-5'>
                                <li>Labor rights</li>
                                <li>Human rights</li>
                                <li>Legal compliance</li>
                                <li>Environmental and security criteria</li>
                            </ul>
                        </li>
                        <li>Supported by a business’s management system for sustainable compliance.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
