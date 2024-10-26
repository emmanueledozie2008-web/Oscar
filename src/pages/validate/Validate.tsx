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
import profile from "./assets/fireside.jpg";
import p2p from "./assets/p2p.jpg";

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
    { name: "Profile", image: profile },
    { name: "P2P", image: p2p },
  ];
  function renderLinks() {
    return linkItems.map((l) => (
      <div className="flex flex-col gap-5 items-center">
        <Link to="/wallet">
          <button className="hover:scale-110 p-3 transition-all duration-300 h-20 w-20 border rounded-md">
            <img src={l.image} alt="Bank icon" className="scale-125" />
          </button>
        </Link>
        <p>{l.name}</p>
      </div>
    ));
  }
  return (
    <main className="container mx-auto px-4 max-w-screen-xl">
      <div>
        <img src={piLogo} alt="" className="mx-auto max-w-[300px] w-full" />
      </div>
      <p className="font-semibold text-slate-700 text-xl text-center">
        Welcome to the Pi browser
      </p>
      <div className="mt-20">
        <div className="grid sm:grid-cols-5  grid-cols-3 justify-around flex-wrap gap-10">
          {renderLinks()}
        </div>
        <div className="grid place-content-center w-full my-10">
          <Link to="/wallet">
            <button className="px-5 py-2 mx-auto rounded-sm bg-primary-1 text-white grid place-content-center">
              <p>Explore the Testnet Ecosystem</p>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
