import google from "../assets/google_play.webp";
import apple from "../assets/apple_store-300x89.webp";
import mobilePi from "../assets/pi mobile.webp";

export default function GetApp() {
  return (
    <section className="getApp py-20">
      <div className="flex flex-col lg:flex-row container mx-auto px-4 max-w-screen-xl">
        <div className="w-full lg:w-1/2">
          <img src={mobilePi} alt="" className="lg:mx-0 mx-auto"/>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <h1 className="text-secondary text-2xl lg:text-4xl font-semibold" data-aos="fade-right">
            Download the mobile app to start mining today! Join now.
          </h1>
          <p className="font-semibold text-white">
            Keep your money! Mining Pi is free. <br /> All you need is an invitation <br />
            from an existing trusted member on the network. If you have an
            invitation you can download the mobile app <br /> below.
          </p>
          <div className="flex gap-5 flex-wrap">
            <img src={google} alt="" className="h-10"/>
            <img src={apple} alt="" className="h-10"/>
          </div>
        </div>
      </div>
    </section>
  );
}
