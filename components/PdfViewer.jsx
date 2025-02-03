"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { PDFFiles, PDFFilesList } from "@/libs/data";

const PdfList = () => {
    const [toggler, setToggler] = useState(false);
    const [currentPdf, setCurrentPdf] = useState(PDFFiles[0]);

    const handlePdfChange = (pdf) => {
        setToggler(!toggler)
        setCurrentPdf(pdf);
    };

    const filterData = PDFFilesList.find(val => val.name === currentPdf)

    return (
        <div className="">
            <div className="flex flex-col gap-4 underline">
                {PDFFiles.map((pdf, index) => (
                    <button key={index} onClick={() => handlePdfChange(pdf)}>
                        {pdf}
                    </button>
                ))}
            </div>
            <FsLightbox
                toggler={toggler}
                sources={filterData.lists}
            />

        </div>
    );
};

export default PdfList
