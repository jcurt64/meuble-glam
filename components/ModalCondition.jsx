import { MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { MdDirectionsCar } from "react-icons/md";

export default function ModalCondition() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="text-red-800 underline text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
       (Voir les conditions permettant de bénéficier de cette offre)
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg text-center text-slate-700 font-semibold">
                    {`Conditions d'éligibilité à l'offre Bonus`}
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
                <div className="relative p-6 flex-auto">
                <div className="flex gap-2 pb-4 mt-8">
                <MapPinIcon className="w-6 h-6 font-light text-red-800" />
                <p className="text-slate-700 text-center font-thin">
                  Lieu de résidence du client : Paris / Banlieue proche
                </p>
              </div>

              <p className="text-slate-700 font-bold">Bonus Classic</p>
              <div className="flex gap-2 pb-4 mt-3">
                <MdDirectionsCar className="w-6 h-6 font-light text-slate-700" />
                <p className="text-slate-700 font-thin text-sm">
                  {`1 aller gratuit : domicile du client -> Aéroport Roissy Charles de Gaulle -> Résidence Le
                  Glam meublés`}
                </p>
              </div>
              <p className="text-yellow-500 font-bold">Bonus VIP</p>

              <div className="flex gap-2 pb-4 mt-3">
                <div className="flex items-center gap-3">
                  <MdDirectionsCar className="w-6 h-6 font-light text-yellow-500" />
                  <div>
                    <p className="text-slate-700 font-thin text-sm">
                      {`1 aller gratuit : domicile -> Aéroport Roissy Charles de Gaulle ->
                      Résidence Le Glam meublés`}
                    </p>
                    <p className="text-slate-700 font-thin text-sm">
                      {`1 retour gratuit : Résidence Le Glam meublés -> Aéroport Roissy Charles de
                      Gaulle -> domicile du client`}
                    </p>
                  </div>
                </div>
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
