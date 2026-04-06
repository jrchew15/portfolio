import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function ResumePdfDisplay() {
  return (
    <div className="flex w-full justify-center overflow-x-auto py-5">
      <div className="w-fit overflow-x-hidden overflow-y-auto">
        <Document file={"./Resume.pdf"}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}
