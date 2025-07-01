import { Link } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import piLogo from "./assets/pi_logo-x.png";
import fireside from "./assets/fireside.jpg";
import wallet from "./assets/wallet.jpg";
import brainstorm from "./assets/brainstorm.jpg";
import mine from "./assets/mine.jpg";
import blockchain from "./assets/blockchain.jpg";
import develop from "./assets/develop.jpg";
import kyc from "./assets/kyc.jpg";
import chat from "./assets/chat.jpg";
import p2p from "./assets/profile.jpg";
import Domains from "./assets/domain.jpg";
import p2p2 from "./assets/p2p.jpg";
import app from "./assets/appstore.jpg";
import Navbar2 from "../validate/Navbar2";

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
    { name: "App Studio", image: app },
    { name: "P2P", image: p2p2 },
  ];

  function renderLinks() {
    return linkItems.map((l) => (
      <div key={l.name} className="flex flex-col gap-2 items-center text-center">
        <Link to="/wallet">
          <button className="hover:scale-110 p-3 transition-all duration-300 h-16 w-16 rounded-md">
            <img src={l.image} alt={`${l.name} icon`} className="scale-125" />
          </button>
        </Link>
        <p className="text-sm font-medium">{l.name}</p>
      </div>
    ));
  }

  return (
    <main className="container mx-auto px-14 max-w-screen-xl">
      {/* Logo and Welcome text always in one line */}
      <div className="flex flex-nowrap items-center justify-center mt-10 gap-1 font-bold">
        <img src={piLogo} alt="Pi Logo" className="max-w-[90px] w-full" />
        <p className="font-semibold text-yellow-400 text-lg whitespace-nowrap">
          Welcome to the Pi Ecosystem
        </p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <h3 className="text-1xl text-black">Core Team Apps</h3>
        <IoMdArrowDropup />
      </div>

      <div className="mt-6">
        <div className="grid sm:grid-cols-5 grid-cols-3 justify-around flex-wrap gap-10">
          {renderLinks()}
        </div>

        <div className="grid place-content-center w-full my-10">
          <Link to="/wallet">
            <button className="px-5 py-2 mx-auto rounded-sm bg-primary-1 text-white">
              <p>Explore the Testnet Ecosystem</p>
            </button>
          </Link>
        </div>
      </div>

      <div className="sticky top-0 z-50">
        <Navbar2 />
      </div>
    </main>
  );
}
