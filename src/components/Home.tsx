import { Link } from "react-router";
import { Button, Flex, Modal } from "antd";
import { useState } from "react";
import resumeImg from "../assets/images/dummy.png";
import resumePDF from "../../src/assets/pdf/dummy.pdf";
import heroBg from "../../src/assets/images/herobg.png";

const Home = () => {
  const [isModalResumeOpen, setIsResumeModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [isDownloadLoading, setIsDownloadLoading] = useState(false);
  const [copyEmailText, setCopyEmailText] = useState("Copy Email");

  const showResumeModal = () => {
    setIsResumeModalOpen(true);
  };
  const showEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  const handlePreview = () => {
    setIsPreviewLoading(true);
    setTimeout(() => {
      setIsPreviewModalOpen(true);
      setIsPreviewLoading(false);
    }, 3000);
  };

  const handleDownload = () => {
    setIsDownloadLoading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumePDF; // Path to the PDF file after import
      link.download = "Ayush_Niraula.pdf"; // Specify the name of the file to be downloaded
      link.click(); // Trigger the download
      setIsDownloadLoading(false);
    }, 3000);
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("ayushniraula92@gmail.com");
    setCopyEmailText("Copied!");
    setTimeout(() => {
      setCopyEmailText("Copy Email");
    }, 1000);
  };

  return (
    <>
      <section>
        <Modal
          title="Do you want to download the resume or preview it? 😁"
          open={isModalResumeOpen}
          centered
          footer={null}
          closeIcon={true}
          closable={true}
          onCancel={() => setIsResumeModalOpen(false)}
        >
          <div className="flex justify-center gap-4">
            <Button
              type="default"
              onClick={handlePreview}
              loading={isPreviewLoading}
            >
              Preview
            </Button>
            <Button
              type="default"
              onClick={handleDownload}
              loading={isDownloadLoading}
            >
              Download
            </Button>
          </div>
        </Modal>

        <Modal
          title="Let’s connect and get to work! Or just a quick ‘Hi’ works too. 😎"
          open={isEmailModalOpen}
          centered={true}
          footer={null}
          closeIcon={true}
          closable={true}
          onCancel={() => setIsEmailModalOpen(false)}
        >
          <div className="flex flex-col items-center gap-4 mt-4">
            <input
              type="text"
              readOnly
              value="ayushniraula92@gmail.com"
              className="w-72 px-4 py-2 border rounded-md text-center bg-gray-100"
            />
            <Button type="primary" onClick={handleEmailCopy}>
              {copyEmailText}
            </Button>
          </div>

          {/* <iframe
          src="https://drive.google.com/file/d/14GMx6VaVNNPsPoli8o1SmBwnIMiEsi23/preview"
          width="100%"
          
          title="Resume Preview"
        /> */}
        </Modal>

        <Modal
          title="Resume Preview"
          open={isPreviewModalOpen}
          footer={null}
          centered
          width="80%" // Adjusted for responsiveness
          bodyStyle={{ padding: 0 }}
          destroyOnClose
          onCancel={() => setIsPreviewModalOpen(false)}
        >
          {/* Image Embed */}
          <div className="relative w-full">
            <img
              src={resumeImg}
              alt="Resume"
              className="rounded-lg shadow-lg w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </Modal>

        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center rounded-md bg-gray-300 px-3 py-1">
                <div className="mr-1 h-2 w-2 rounded-full bg-green-600"></div>

                <p className="text-sm">Available for work</p>
              </div>
              <p className="text-sm text-gray-500 sm:text-xl">
                Software Engineer
              </p>
              {/* Title */}
              <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8">
                Ayush Niraula
              </h1>
              <p className="text-sm text-gray-500 sm:text-xl">
                Experienced in React, Angular, and the MERN stack, I specialize
                in building high-quality web applications. With a strong passion
                for AI and Machine Learning, I aim to integrate these
                technologies to drive innovation.
              </p>
              {/* Divider */}
              <div className="mb-8 mt-8 h-px w-full bg-black"></div>
              <div className="mb-6 flex flex-col gap-2 text-sm text-gray-500 sm:text-base lg:mb-8">
                <p>
                  <strong>2023 to 2024 : </strong>Software Engineer at{" "}
                  <a
                    href="https://thebigsolutions.com/"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    <i>
                      <u>The Big Solutions</u>
                    </i>
                  </a>
                </p>
                <p>
                  <strong>2022 to 2023 : </strong>Front-End Engineer at{" "}
                  <a
                    href="https://mypay.com.np/"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    <i>
                      <u>MyPay </u>
                    </i>
                  </a>
                </p>
                <p>
                  <strong>Prior to 2023 : </strong>Freelance Developer
                </p>
              </div>
              {/* Link */}
              <a
                href="#"
                className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 lg:mb-12"
              >
                <Link to="/work">
                  <p>Work Experience</p>
                </Link>
                ➡️
              </a>
              {/* Buttons */}
              <div className="flex flex-col gap-4 font-semibold sm:flex-row">
                <a
                  onClick={showEmailModal}
                  href="#"
                  className="flex items-center gap-4 rounded-md bg-black px-6 py-3 text-white"
                >
                  ✉️
                  <p>Email Me</p>
                </a>
                <a
                  onClick={showResumeModal}
                  className="flex gap-4 rounded-md border border-solid border-black px-6 py-3 cursor-pointer"
                >
                  🧑‍💻
                  <p>Resume</p>
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="max-h-[700px] overflow-hidden rounded-md bg-gray-100 relative group">
              <img
                src={heroBg}
                alt="Hero background"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
