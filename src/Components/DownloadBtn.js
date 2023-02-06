
import React, { useRef } from "react";
import jsPDF from 'jspdf';



function DownloadBtn() {
    /*  const reportTemplateRef = useRef(null);
 
     const handleGeneratePdf = () => {
         const doc = new jsPDF({
             format: 'a4',
             unit: 'px',
         });
 
         // Adding the fonts.
         doc.setFont('Inter-Regular', 'normal');
 
         doc.html(reportTemplateRef.current, {
             async callback(doc) {
                 await doc.save('document');
             },
         });
     }; */
    const generatePDF = () => {

        const report = new jsPDF('portrait', 'pt', 'a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });}
        
        return (
            <button className="btn btn-outline-primary" onClick={generatePDF} > Download Resume</button>

        )
    }


export default DownloadBtn;