"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { PDFFiles, PDFFilesList } from "@/libs/data";

const PdfList = () => {
    const [toggler, setToggler] = useState(false);
    const [currentPdf, setCurrentPdf] = useState(PDFFiles[0]);
    const [slideIndex, setSlideIndex] = useState(1);

    const handlePdfChange = (pdf) => {
        setCurrentPdf(pdf);
        setSlideIndex(1);
        setToggler(!toggler);
    };

    const filterData = PDFFilesList.find((val) => val.name === currentPdf);

    return (
        <div className="">
            <div className="flex flex-col gap-4 underline">
                {PDFFiles.map((pdf, index) => (
                    <button key={index} onClick={() => handlePdfChange(pdf)}>
                        {pdf}
                    </button>
                ))}
            </div>
            {/* Ensure filterData is defined before accessing its properties */}
            {filterData && (
                <FsLightbox
                    toggler={toggler}
                    sources={filterData.lists}
                    slide={slideIndex}
                />
            )}
        </div>
    );
};

export default PdfList;
