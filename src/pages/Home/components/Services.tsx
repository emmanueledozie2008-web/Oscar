import piWallet from "../assets/piwallt-removebg-preview.png";

export default function Services() {
  return (
    <section className="bg-white py-10">
      <div className="flex lg:flex-nowrap px-4 flex-wrap-reverse container mx-auto max-w-screen-xl items-center gap-5">
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          <h1 className="text-primary-3 font-semibold text-4xl lg:text-6xl">
            Pi makes crypto <br /> mining easy.
          </h1>
          <p className="text-slate-800 text-lg font-semibold">
            Breakthrough tech allows you to mine Pi on your phone without
            draining your battery.
          </p>
          <div>
            <a href="" className="text-lg">
              <button className="bg-primary-3 px-10 py-3 flex rounded-md items-center gap-3">
                <span className="inline"> Learn the tech behind Pi</span>
                <p className="h-5 w-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#ffffff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </p>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={piWallet} alt="" className="mx-auto lg:mx-0" />
        </div>
      </div>
      <div className="container px-4 mt-10  mx-auto max-w-screen-xl text-slate-700 gap-10 grid lg:grid-cols-3 grid-cols-1">
        <div
          className="text-center shadow-xl px-16 py-5 border rounded-md w-full h-full"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <p className="mb-5 h-32 w-32 flex justify-center items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-full h-full"
            >
              <path
                fill="#593b8b"
                d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"
              />
            </svg>
          </p>
          <h2 className="text-2xl font-semibold mb-3">Decentralized</h2>
          <p className="font-semibold text-slate-600">
            Secure, Immutable, non- counterfeitable and interoperable digital
            money.
          </p>
        </div>
        <div
          className="text-center shadow-xl px-16 py-5 border rounded-md w-full h-full"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="mb-5 h-32 w-32 flex justify-center items-center mx-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-full h-full"
            >
              <path
                fill="#593b8b"
                d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"
              />
            </svg>
          </p>
          <h2 className="text-2xl font-semibold mb-3">Mobile First</h2>
          <p className="font-semibold text-slate-600">
            Secure, Immutable, non- counterfeitable and interoperable digital
            money.
          </p>
        </div>
        <div
          className="text-center shadow-xl px-16 py-5 border rounded-md w-full h-full"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="mb-5 h-32 w-32 flex justify-center items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-full h-full"
            >
              <path
                fill="#593b8b"
                d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
              />
            </svg>
          </p>
          <h2 className="text-2xl font-semibold mb-3">
            User & Planet-Friendly
          </h2>
          <p className="font-semibold text-slate-600">
            Secure, Immutable, non- counterfeitable and interoperable digital
            money.
          </p>
        </div>
      </div>
    </section>
  );
}
