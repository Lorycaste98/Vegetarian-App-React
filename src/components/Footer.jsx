import React from 'react';
import logo from '../assets/logo-green.png';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaRegCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white text-center px-6 pt-8 pb-4 w-full">
      <div className="max-w-[1240px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-[70px]" />
            <h1 className="font-bold text-xl ">VegetaFlavors</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold">CONTATTI:</p>
            <p>info@example.com</p>
            <p>+39 123 4567890</p>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://github.com/Lorycaste98" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="my-2 mx-4" size={30} />
            </a>
            <a href="https://www.instagram.com/lorycastelletti/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="my-2 mx-4" size={30} />
            </a>
            <a
              href="https://www.facebook.com/lorenzo.l.caste.9/?locale=it_IT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="my-2 mx-4" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/lorenzo-castelletti-532b9b191/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="my-2 mx-4" size={30} />
            </a>
          </div>
        </div>
        <div className="font-thin mt-6">
          <p className="flex items-center justify-center">
            <FaRegCopyright className="mr-2" />
            2024 VegetaFlavors. Tutti i diritti riservati
          </p>
          <p>Realizzato da Lorenzo Castelletti</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
