import { ReactNode } from "react";
import style from "./style.module.scss"

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className={style.modal}>
      <div className={style["modal-content"]}>{children}</div>
    </div>
  )
}

export default Modal
