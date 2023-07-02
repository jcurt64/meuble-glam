"use client"

import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  HomeModernIcon,
  MapPinIcon,
  BanknotesIcon,
  Car,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { FaBath, FaWifi } from "react-icons/fa";
import { MdKitchen, MdDirectionsCar, MdDryCleaning } from "react-icons/md";
import { motion } from "framer-motion";
import ModalCondition from "./ModalCondition";
import Image from "next/image";

const Bonus = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <motion.div 
    initial={{
      x: -300,
      opacity: 0,
    }}
    transition={{ duration: 1.2 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    className=" flex flex-col items-center justify-start" id="bonus">
      <p className="text-[30px] mx-4 mt-16 font-bold tracking-wide text-slate-700 dark:text-gray-200 text-center font-Montserrat border-b-4 border-dotted border-yellow-500 ">
        NOTRE BONUS{" "}
        <span className="text-red-900 text-4xl cursor-crosshair">GLAM</span>
        OUR
      </p>
      <p className="max-w-[600px] text-center mt-8 px-4 tracking-wide font-light text-gray-600 dark:text-gray-400 text-lg">
       { `Bénéficiez d'un double transfert gratuit via notre véhicule électrique
        haut de gamme, entre votre domicile et l'aéroport.`}
      </p>
      <ModalCondition open={open}  />

      {modal && (
        <div className=" ">
          <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-white">
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-xl font-bold mt-10 mb-10 text-slate-700 border-b-2 border-dotted border-slate-700">
                {`Conditions d'éligibilé au bonus`}
              </h1>
              <p className="text-red-700 tracking-wide max-w-[350px] text-center underline  underline-offset-4">
                Les conditions suivantes doivent être remplies afin de
                bénéficier de notre offre bonus :{" "}
              </p>

              <div className="flex gap-2 pb-4 mt-8">
                <MapPinIcon className="w-6 h-6 font-light text-red-800" />
                <p className="text-slate-700 font-thin">
                  Lieu de résidence du client : Paris / Banlieue proche
                </p>
              </div>

              <p className="text-slate-700 font-bold">Bonus Classic</p>
              <div className="flex gap-2 pb-4 mt-3">
                <MdDirectionsCar className="w-6 h-6 font-light text-slate-700" />
                <p className="text-slate-700 font-thin text-sm">
                  {`1 aller gratuit : domicile -> Roissy Charles de Gaulle - Le
                  Glam meublés`}
                </p>
              </div>
              <p className="text-yellow-500 font-bold">Bonus VIP</p>

              <div className="flex gap-2 pb-4 mt-3">
                <div className="flex items-center gap-3">
                  <MdDirectionsCar className="w-6 h-6 font-light text-yellow-500" />
                  <div>
                    <p className="text-slate-700 font-thin text-sm">
                      {`1 aller gratuit : domicile -> Roissy Charles de Gaulle ->
                      Le Glam meublés`}
                    </p>
                    <p className="text-slate-700 font-thin text-sm">
                      {`1 retour gratuit : Le Glam meublés -> Roissy Charles de
                      Gaulle -> domicile`}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={toggleModal}
                className="mt-12 text-center border-t w-[300px]"
              >
                <XCircleIcon className="w-12 h-22 pt-10 font-light text-gray-800 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative flex mt-20 px-4">
        <div className="absolute -top-5 -left-7">
          <SparklesIcon className="w-12 h-12 font-light text-red-500" />
        </div>
        <div className="absolute -bottom-9 -right-12">
          <SparklesIcon className="w-18 h-16 font-light text-pink-500 " />
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="filter saturate-200 p-4 bg-white rounded-md drop-shadow-xl hover:scale-110 transition-transform duration-200 ease-out">
            <Image
              className="rounded-md"
              src="/32.jpg"
              alt="encours"
              width="280"
              height="340"
            />
          </div>
          <div className="filter saturate-200 p-4 bg-white rounded-md drop-shadow-xl hover:scale-110 transition-transform duration-200 ease-out">
            <Image
              className="rounded-md"
              src="/33.jpg"
              alt="encours"
              width="280"
              height="340"
            />
            <p className="text-center text-[25px] md:text-[35px] w-[270px]  mt-7 text-slate-700 font-sweaseed">
              Vous allez adorer le confort de notre véhicule électrique!
              <span> &#128521;</span>
            </p>
          </div>
          <div className="p-4 bg-white rounded-md drop-shadow-xl hover:scale-110 transition-transform duration-200 ease-out">
            <Image
              className="rounded-md"
              src="/35.jpg"
              alt="encours"
              width="280"
              height="340"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Bonus;
