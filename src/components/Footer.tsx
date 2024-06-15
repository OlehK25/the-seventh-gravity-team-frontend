import * as React from "react";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

function FooterData() {
  return (
    <div className="flex flex-col gap-6 p-12 h-[337px] bg-black text-white">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="text-6xl text-white text-start mr-10">Logo</div>

          <div className="flex flex-col gap-4 p-4">
            <h2 className="font-bold">Наші контакти</h2>

            <div className="flex items-center gap-2 hover:cursor-pointer hover:text-blue-200">
              <FiMapPin className="w-6 h-6" />
              <span>Вул.Ніжинська.Nauhub</span>
            </div>

            <div className="flex items-center gap-2 hover:cursor-pointer hover:text-blue-200">
              <CiMail className="w-6 h-6" />
              <span>support@nauhub</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <ul>
            <li className="hover:cursor-pointer hover:text-blue-200">
              Допомогти
            </li>
            <li className="py-1 hover:cursor-pointer hover:text-blue-200">
              Збори
            </li>
            <li className="py-1 hover:cursor-pointer hover:text-blue-200">
              Про нас
            </li>
            <li className="py-1 hover:cursor-pointer hover:text-blue-200">
              Звіт
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-1 w-[300px]">
          <h2>Наші соцмережі</h2>
          <div className="flex gap-4 w-[300px]">
            <FaFacebook className="hover:cursor-pointer w-5 h-5" />
            <FaTelegramPlane className="hover:cursor-pointer w-5 h-5 text-white" />
            <FaInstagram className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterData;
