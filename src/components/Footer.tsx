import piNetwork from "../assets/Pi-Network.webp";

export default function Footer() {
  return (
    <footer className="px-4 bg-[rgb(132, 53, 142)] pt-10 pb-20">
      <div className="container mt-10 mx-auto max-w-screen-xl text-lg flex flex-wrap gap-10 justify-between font-semibold text-slate-300">
        <ul className="flex flex-col gap-4">
          <li className="hover:text-slate-500 transition-all duration-300">
            <a href="https://minepi.com/white-paper/">Pi Whitepaper</a>
          </li>
          <li className="hover:text-slate-500 transition-all duration-300">
            <a href="https://minepi.com/support/">Support & FAQ</a>
          </li>
          <li className="hover:text-slate-500 transition-all duration-300">
            <a href="https://socialchain.app/tos">Terms of Service</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="hover:text-slate-500 transition-all duration-300">
            <a href="https://socialchain.app/privacy">Privacy Policy</a>
          </li>
          <li className="hover:text-slate-500 transition-all duration-300">
            <a href="https://socialchain.app/developer_terms">
              Developer Terms of Use
            </a>
          </li>
          <li className="hover:text-slate-500 transition-all duration-300">
            <a href="https://minepi.com/pi-trademark-guidelines/">
              Pi Trademark
            </a>
          </li>
        </ul>
        <div>
          <img src={piNetwork} alt="" className=" w-full h-auto sm:h-20"/>
        </div>
      </div>
    </footer>
  );
}
