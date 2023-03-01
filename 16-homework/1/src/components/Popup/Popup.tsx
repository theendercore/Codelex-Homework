import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Popup.css";

type PopupProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Popup({ open, onClose, children }: PopupProps) {
  if (!open) return null;

  return createPortal(
    <>
      <div
        className="bg-invisible fixed top-0 left-0 right-0 bottom-0 z-40"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 z-50 translate-y-[-50%] translate-x-[-50%] rounded-xl border-4 border-slate-800 bg-slate-900 p-12 text-slate-100 shadow-inner">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-xl border-4 border-slate-800 bg-slate-900 px-3 py-1 text-slate-500 shadow-inner hover:border-slate-500 hover:bg-slate-700 hover:text-slate-100"
        >
          x
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
}

/*const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};*/

/*const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};*/
