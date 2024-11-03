import React from 'react'

const page = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-full px-6 py-10 overflow-hidden text-white mt-14 justify- md:gap-5 md:px-14 xl:px-32 bg-primary">
            <h3 className="text-[27px] md:text-[40px] lg:text-[48px] font-libreCaslonDisplay font-normal !leading-snug uppercase xl:mt-0 tracking-custom">
            Privacy and Data Protection Policy 
            </h3>
            {/* <MdPolicy className='text-6xl text-white  xl:text-9xl' /> */}
            <p className="w-full text-base font-semibold text-justify !leading-custom-line sm:text-lg font-figtree sm:indent-7 md:w-4/5">
         <PrivacyPolicy/>
            </p>
        </section>
    )
}

export default page


const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <p>
        At <strong>Rasim Export Pvt. Ltd.</strong>, we prioritize integrity, transparency, and customer satisfaction in every aspect of our operations. To safeguard our clients data and uphold trust, our Privacy and Data Protection Policy is as follows:
      </p>

      <section>
        <h2>1. Data Collection and Use</h2>
        <ul>
          <li>
            <strong>Purpose-Driven Collection:</strong> We collect personal information only for essential purposes, such as order processing, improving customer service, and enhancing product offerings.
          </li>
          <li>
            <strong>Strict Confidentiality:</strong> All customer information is kept confidential and is only used within our organization to fulfill the agreed-upon services and to improve our offerings.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Data Sharing and Disclosure</h2>
        <ul>
          <li>
            <strong>No Unauthorized Sharing:</strong> We do not share or sell customer data with any third parties for marketing purposes.
          </li>
          <li>
            <strong>Legal and Regulatory Compliance:</strong> Customer information may only be shared with third parties if required by law, in compliance with applicable international trade regulations and ethical business standards.
          </li>
          <li>
            <strong>Consent for Disclosure:</strong> In instances where data sharing is necessary (e.g., logistics or customs), we ensure customer consent or contract terms that respect their privacy rights.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Data Security</h2>
        <ul>
          <li>
            <strong>Robust Protection Measures:</strong> We employ industry-standard security protocols and procedures to protect personal information from unauthorized access, misuse, or loss.
          </li>
          <li>
            <strong>Access Control:</strong> Only authorized personnel with legitimate business purposes are granted access to sensitive customer information.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. International Compliance</h2>
        <ul>
          <li>
            <strong>Adherence to Global Standards:</strong> As an exporter, we comply with all relevant international laws, including data protection regulations and ethical standards.
          </li>
          <li>
            <strong>Periodic Review:</strong> Our policies are regularly reviewed and updated to reflect changes in regulatory requirements and industry best practices.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Customer Rights</h2>
        <ul>
          <li>
            <strong>Transparency and Access:</strong> Customers may request to review, update, or delete their personal data as permitted by law.
          </li>
          <li>
            <strong>Inquiries:</strong> For any concerns or questions regarding data privacy, customers are encouraged to contact us directly.
          </li>
        </ul>
      </section>

      <p>
        Our commitment to privacy and ethical practices helps ensure a secure and reliable experience for all our valued clients worldwide.
      </p>
    </div>
  );
};

