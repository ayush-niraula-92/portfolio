const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col mx-auto w-full max-w-7xl px-5 py-4 text-center">
          <div className="mx-auto my-12 w-full border border-gray-300 lg:my-20"></div>
          <div className="lg:flex lg:flex-row-reverse lg:justify-between">
            <div className="lg:mt-0 mb-8 mt-6 flex flex-row space-x-4">
              {/* Email */}
              <a
                href=""
                className="group relative flex h-12 w-12 items-center justify-center rounded-full  hover:bg-red-500 transition-all"
              >
                <img
                  src="https://www.svgrepo.com/show/511921/email-1573.svg"
                  alt="Email"
                  className="h-6 w-6 transition-all group-hover:scale-110"
                />
              </a>
              {/* LinkedIn */}
              <a
                href=""
                className="group relative flex h-12 w-12 items-center justify-center rounded-full  hover:bg-blue-700 transition-all"
              >
                <img
                  src="https://www.svgrepo.com/show/521725/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-6 transition-all group-hover:scale-110"
                />
              </a>
              {/* GitHub */}
              <a
                href=""
                className="group relative flex h-12 w-12 items-center justify-center rounded-full  hover:bg-slate-500 transition-all"
              >
                <img
                  src="https://www.svgrepo.com/show/507717/github-square.svg"
                  alt="GitHub"
                  className="h-6 w-6 transition-all group-hover:scale-110"
                />
              </a>
              {/* Instagram */}
              <a
                href=""
                className="group relative flex h-12 w-12 items-center justify-center rounded-full  hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 transition-all"
              >
                <img
                  src="https://www.svgrepo.com/show/521711/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6 transition-all group-hover:scale-110"
                />
              </a>
              {/* Facebook */}
              <a
                href=""
                className="group relative flex h-12 w-12 items-center justify-center rounded-full  hover:bg-blue-600 transition-all"
              >
                <img
                  src="https://www.svgrepo.com/show/521654/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6 transition-all group-hover:scale-110"
                />
              </a>
              {/* Medium */}
              <a
                href=""
                className="group relative flex h-12 w-12 items-center justify-center rounded-full  hover:bg-green-700 transition-all"
              >
                <img
                  src="https://www.svgrepo.com/show/510068/medium.svg"
                  alt="Medium"
                  className="h-6 w-6 transition-all group-hover:scale-110"
                />
              </a>
            </div>
            <p className="font-inter lg:mt-0 text-sm text-gray-500">
              © {new Date().getFullYear()} Ayush Niraula. Designed & developed
              with ❤️
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
