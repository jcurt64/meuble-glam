"use client";

import React, { useState } from "react";

import {
  ShareIcon,
  MapPinIcon,
  PhoneIcon,
  PhotoIcon,
  ArrowDownLeftIcon,
  BanknotesIcon,
  BoltIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { FaBath, FaWifi } from "react-icons/fa";
import { MdKitchen, MdCleaningServices, MdDryCleaning } from "react-icons/md";
import ModalLoftParis from "./ModalLoftParis";
import Image from "next/image";
import Carousel from "./Carousel";

const sliders = [
     "/1.jpg",
   "/2.jpg",
   "/3.jpg",
]

const AppartDetail = ({
  title1,
  title2,
  como1,
  como2,
  como3,
  como4,
  subtitle,
  price,
  img,
}) => {
const openSlider =  {

}
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="  mb-10 pb-10 flex flex-col items-center justify-between gap-y-8 bg-white rounded-md p-4 mx-4 drop-shadow-md">
      {/* TITLE */}
      <p className="text-center text-xl mb-1 mt-10 font-bold tracking-wide text-slate-700">
        <span className="px-3 py-2 pl-4 mr-2 bg-red-900 rounded-full text-white">
          #{" "}
        </span>
        {title1}
      </p>

      {/* SUBTITLE */}

      <p className="text-center font-light text-gray-600 max-w-[400px]">
        {subtitle}
      </p>

      <div className="relative flex items-center justify-center filter saturate-200">
        {/* LEFT */}

        {/* image */}
       
        <div>
        <Carousel autoSlide={true}>
          {sliders.map((slide) => (
            <Image key={slide} src={slide} alt="" width={300} height={300}
            
            className="rounded filter saturate-150"/>
          ))}
        </Carousel>
      </div>
        {/* <div className="absolute flex gap-3 bottom-3 text-center bg-white/90 cursor-pointer text-white px-8 py-4 rounded-md ">
          <button onClick={openSlider}
          className="text-gray-800 font-bold">Voir +</button>
          <PhotoIcon className="w-6 h-6 font-light text-gray-800" />
        </div> */}

      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-end gap-2 justify-center">
          <p className="font-light text-gray-600">Partager</p>
          <ShareIcon className="w-7 h-7 font-light text-gray-600" />
        </div>

        <div className="flex justify-center gap-4"></div>

        <div className="flex items-center justify-evenly gap-2 mt-7">
          <MapPinIcon className="h-7 w-7 font-light text-yellow-600" />
          <p className=" text-center font-light text-yellow-600 ">
            {`15 mn du centre ville - 25 mn de l'aéroport`}
          </p>
        </div>

        {/* COMODITIES */}
        <div className="w-full flex flex-col items-center justify-center mt-5">
          {/* DETAILS INFO */}

          <ModalLoftParis open={open} />

          {/* MODAL */}
          {modal && (
            <div className=" ">
              <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-white">
                <div className="flex flex-col items-center justify-center ">
                  <h1 className="text-xl font-bold mt-10 text-slate-700 mb-4 border-b-2 border-dotted border-slate-700">
                    Détails équipements & prestations{" "}
                  </h1>
                  <div className="flex gap-2 mt-2 pb-4">
                    <p className="font-bold">Superficie : </p>
                    <p className="text-slate-700 font-thin">45m2</p>
                  </div>
                  <div className="flex gap-2 pb-4">
                    <MdKitchen className="w-6 h-6 font-light text-green-800" />
                    <p className="text-slate-700 font-thin">
                      Cuisine américaine
                    </p>
                  </div>
                  <div className="flex gap-2 pb-4">
                    <FaBath className="w-6 h-6 font-light text-pink-600" />
                    <p className="text-slate-700 font-thin">Douche italienne</p>
                  </div>
                  <div className="flex gap-2 pb-4">
                    <BoltIcon className="w-6 h-6 font-light text-orange-600" />
                    <p className="text-slate-700 font-thin">
                      Groupe électrogène
                    </p>
                  </div>
                  <div className="flex gap-2 pb-4">
                    <FaWifi className="w-6 h-6 font-light text-blue-600" />
                    <p className="text-slate-700 font-thin">WIFI</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <BanknotesIcon className="w-6 h-6 font-light text-green-600" />
                    <p className="text-xl font-bold tracking-wide text-slate-700">
                      FCFA 30 000<span className="text-sm">/ nuit</span>
                    </p>
                  </div>

                  {/* OPTIONS */}

                  <p className="mt-5 font-bold underline underline-offset-4 mb-5">
                    Otions
                  </p>

                  <div className="flex gap-2 pb-4">
                    <MdCleaningServices className="w-6 h-6 font-light text-green-800" />
                    <p className="text-slate-700 font-thin">
                      Ménage 3X / semaine
                    </p>
                  </div>
                  <div className="flex gap-2 pb-4">
                    <MdDryCleaning className="w-6 h-6 font-light text-pink-600" />
                    <p className="text-slate-700 font-thin">
                      Lavage et repassage 3X / semaine
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <BanknotesIcon className="w-6 h-6 font-light text-green-600" />
                    <p className="text-xl font-bold tracking-wide text-slate-700">
                      FCFA 35 000<span className="text-sm">/ nuit</span>
                    </p>
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
        </div>
      </div>
      {/* PRICE */}
      <div>
        <div className="flex items-center justify-center -mt-2 gap-2">
          <BanknotesIcon className="w-6 h-6 font-light text-green-600" />
          <p className="text-lg font-bold tracking-wide text-slate-700">
            A partir de FCFA {price} <span className="text-sm">/ nuit</span>
          </p>
        </div>

        {/* reservation */}

        <div className="flex items-center justify-center ">
          <div className="flex mt-7 items-center justify-center px-1 bg-red-900 w-full rounded-md py-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out">
            <a href="tel:Majelink" className="flex gap-2 items-center ">
              <PhoneIcon className="w-6 h-6 text-white" />

              <p className="text-center text-white tracking-wide w-[100%] animate-pulse">
                Réservation au 06.43.90.59.82
              </p>
            </a>
          </div>
          
        </div>
      </div>
     
    </div>
  );
}

export default AppartDetail;
