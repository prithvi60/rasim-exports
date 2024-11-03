import React from "react";

const page = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen px-6 py-10 mt-5 overflow-hidden text-white justify- md:gap-20 md:mt-0 md:px-14 xl:px-32 bg-primary">
            <h3 className="text-[27px] md:text-[40px] lg:text-[48px] font-libreCaslonDisplay font-normal !leading-snug uppercase xl:mt-0 tracking-custom">
                Terms and Conditions
            </h3>
            <p className="text-base font-semibold text-justify !leading-custom-line sm:text-lg font-figtree sm:indent-7 w-full md:w-4/5">
<TermsAndConditions/>
            </p>
        </section>
    );
};

export default page;

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <p>
        By accessing and using the services provided by <strong>Rasim Export Pvt. Ltd.</strong>, you agree to comply with the following terms and conditions.
      </p>

      <section>
        <h2>1. Availability of Products and Services</h2>
        <p>
          All products and services offered by Rasim Export Pvt. Ltd. are subject to availability and may be modified, replaced, or discontinued at any time without prior notice.
        </p>
      </section>

      <section>
        <h2>2. Pricing</h2>
        <p>
          Prices for all products and services are subject to change without prior notice. We strive to ensure accuracy in pricing; however, errors may occur, and we reserve the right to correct any errors or omissions.
        </p>
      </section>

      <section>
        <h2>3. Third-Party Carrier Responsibility</h2>
        <p>
          Rasim Export Pvt. Ltd. is not responsible for any delays, damages, or losses caused by third-party carriers. Any issues related to transit, delays, or damages incurred during shipment are the responsibility of the respective carrier.
        </p>
      </section>

      <section>
        <h2>4. Liability Limitation</h2>
        <p>
          To the fullest extent permitted by law, Rasim Export Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or products.
        </p>
      </section>

      <section>
        <h2>5. Dispute Resolution</h2>
        <p>
          All disputes arising in connection with any transaction with Rasim Export Pvt. Ltd. will be subject to the exclusive jurisdiction of the courts where the company is registered.
        </p>
      </section>

      <section>
        <h2>6. Acceptance of Terms</h2>
        <p>
          By using our website, products, or services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
        </p>
      </section>
    </div>
  );
};

