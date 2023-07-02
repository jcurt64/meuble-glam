import { BanknotesIcon, BoltIcon } from "@heroicons/react/24/solid";
import React from "react";
import { FaBath, FaWifi } from "react-icons/fa";
import { MdCleaningServices, MdDryCleaning, MdKitchen } from "react-icons/md";

export default function ModalLoftParis() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-yellow-600 text-white font-semibold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Voir les détails
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl text-center text-slate-700 font-semibold">
                    Détails équipements & prestations
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex flex-col items-center my-4">
                    
                  <div className="flex gap-2 mt-2 pb-4">
                    <p className="font-bold text-slate-700">Superficie : </p>
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
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-800  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    fermer
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
