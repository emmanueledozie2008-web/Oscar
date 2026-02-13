import { Link } from "react-router-dom";
import piLogo from "./assets/pi_logo-x.png";
import fireside from "./assets/fireside.jpg";
import wallet from "./assets/wallet.jpg";
import brainstorm from "./assets/brainstorm.jpg";
import mine from "./assets/mine.jpg";
import blockchain from "./assets/blockchain.jpg";
import develop from "./assets/develop.jpg";
import kyc from "./assets/kyc.jpg";
import chat from "./assets/chat.jpg";
import p2p from "./assets/p.png";
import p2p2 from "./assets/p2p.jpg";
import Domains from "./assets/domain.jpg";
import Navbar2 from "./Navbar2";
import { IoMdArrowDropup } from "react-icons/io";
import Appstuidt from "./assets/app.png";
import see1 from "./assets/see1.jpg";

export default function Validate() {
  const linkItems = [
    { name: "Fireside", image: fireside },
    { name: "Wallet", image: wallet },
    { name: "Brainstorm", image: brainstorm },
    { name: "Mine.pi", image: mine },
    { name: "Blockchain", image: blockchain },
    { name: "Develop", image: develop },
    { name: "KYC", image: kyc },
    { name: "Chat", image: chat },
    { name: "Profile", image: p2p },
    { name: "Domains", image: Domains },
    { name: "App Studio", image: Appstuidt },
    { name: "P2P", image: p2p2 },
  ];

  function renderLinks() {
    return linkItems.map((l) => (
      <div key={l.name} className="flex flex-col gap-2 items-center text-center">
        <Link to="/wallet">
          <button className="hover:scale-110 p-2 sm:p-3 transition-all duration-300 w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] rounded-md">
            <img
              src={l.image}
              alt={`${l.name} icon`}
              className="w-full h-full object-cover rounded-md"
            />
          </button>
        </Link>
        <p className="text-xs sm:text-sm font-medium">{l.name}</p>
      </div>
    ));
  }

  return (
    <main className="container mx-auto px-4 sm:px-14 max-w-screen-xl">
      {/* Logo and Welcome text */}
      <div className="flex flex-wrap items-center justify-center mt-10 gap-2 text-center font-bold">
        <img src={piLogo} alt="Pi Logo" className="w-[70px] sm:w-[90px]" />
        <p className="font-semibold text-yellow-400 text-base sm:text-lg whitespace-nowrap">
          Welcome to the Pi Ecosystem
        </p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <h3 className="text-base sm:text-lg text-black">Core Team Apps</h3>
        <IoMdArrowDropup />
      </div>

      <div className="mt-6">
        <div className="grid sm:grid-cols-5 grid-cols-3 justify-around flex-wrap gap-3">
          {renderLinks()}
        </div>

        <div className="grid place-content-center w-full my-10">
          <Link to="/wallet">
            <img src={see1} alt="Explore Ecosystem" className="rounded-md max-w-full h-auto pb-7" />
          </Link>
          
        </div>
      </div>

      <div className="sticky top-0 z-50">
        <Navbar2 />
      </div>
    </main>
  );
}
