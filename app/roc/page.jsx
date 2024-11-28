"use client"
import React from 'react';
import { Document, Page, PDFDownloadLink, Text } from '@react-pdf/renderer'; // Import React PDF components
import { useState } from 'react';
import PdfViewer from '@/components/PdfViewer';
import Modal from 'react-modal'; // Import Modal component
const pdfFiles = [
  '/roc-20-21.pdf',
  '/roc-21-22.pdf',
  '/roc-22-23.pdf',
  '/roc-23-24.pdf',
];
const page = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen px-6 py-10 mt-5 overflow-hidden text-white justify- md:gap-20 md:mt-0 md:px-14 xl:px-32 bg-primary">
            <h3 className="text-[27px] md:text-[40px] lg:text-[48px] font-libreCaslonDisplay font-normal !leading-snug uppercase xl:mt-0 tracking-custom">
                ROC Filing
            </h3>
            <h4 className='text-lg font-semibold'>View the pdf by selecting the links</h4>
            <p className="text-base font-semibold text-justify !leading-custom-line sm:text-lg font-figtree sm:indent-7 w-full md:w-4/5">
            <PdfList pdfFiles={pdfFiles} />
            </p>
        </section>
    );
};

export default page;

const PdfList = ({ pdfFiles }) => {

  const [currentPdf, setCurrentPdf] = useState(pdfFiles[0]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility



  const handlePdfChange = (pdf) => {
      setCurrentPdf(pdf);
      setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
      setIsModalOpen(false); // Close the modal
  };

  return (
      <div className="pdf-viewer">
          <div className="pdf-selector flex flex-col underline gap-4">
              {pdfFiles.map((pdf, index) => (
                  <button key={index} onClick={() => handlePdfChange(pdf)}>
                      {`Annual Return  ${index + 20} - ${index + 21}`} 
                  </button>
              ))}
          </div>

          {/* Modal for PDF Viewer */}
          <Modal isOpen={isModalOpen} onRequestClose={closeModal} className={"overflow-hidden w-full mt-16"}>
              <button onClick={closeModal} className='text-lg flex justify-center w-full font-bold text-red-600'> Close</button> 
          <PdfViewer url={currentPdf} />
          </Modal>
      </div>
  );
};


