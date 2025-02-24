import { useState } from "react";
import {useNavigate} from "react-router-dom";


const Footer = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  return (
    

<footer className="bg-white border-gray-200 dark:bg-gray-200 w-full h-54 py-12">
  <div className="max-w-screen-xl flex flex-wrap flex-col md:flex-row items-center justify-between mx-auto p-4">
    <div className="flex items-start flex-col p-4">
        <span className="text-2xl font-semibold whitespace-nowrap dark:text-black">Kontakt</span>
        <span><b>Email:</b> <a href="mailto:info.utilesolutions@gmail.com" className="md:dark:hover:text-blue-500">info.utilesolutions@gmail.com</a></span>
    </div>
    <div>
        <span>{new Date().getFullYear()} © Utile Solutions</span>
    </div>
    <div className="items-start justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
        <li>
            <span onClick={() => navigate("/services")} className="block py-2 px-3 md:p-0 md:dark:hover:text-blue-500">Services</span>
        </li>
        <li>
            <span onClick={() => navigate("/priser")} className="block py-2 px-3 md:p-0 md:dark:hover:text-blue-500">Priser</span>
        </li>
        <li>
            <span onClick={() => navigate("/om-os")} className="block py-2 px-3 md:p-0 md:dark:hover:text-blue-500">Om</span>
        </li>
        </ul>
    </div>
  </div>
</footer>
  );
};

export default Footer;
