import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  const modalRoot = document.getElementById("modal")!;
  return createPortal(
    <>
      <div
        className="backdrop fixed left-0 top-0 z-20 h-screen w-full"
        onClick={onClose}
      ></div>

      <div className="flex items-center justify-center">
        <div className="md:min-w-3xl fixed top-1/3 z-30 w-full rounded-md bg-slate-500 p-2 shadow-md md:max-w-3xl">
          {children}
        </div>
      </div>
    </>,
    modalRoot,
  );
};

export default Modal;
