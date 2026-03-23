import { Button } from './../../shared/Button/Button';
import { Modal } from './../../shared/Modal/Modal';
import style from './style.module.scss';

type DeleteModalProps = {
  closeModal: () => {},
}

export const DeleteModal = ({closeModal}: DeleteModalProps) => {
  return (
    <Modal>
      <div className={style["delete-modal"]}>
        <p>Точно удалить задачу?</p>
        <div className={style["delete-modal__actions"]}>
          <Button title="Удалить" onClick={() => {}} />
          <Button title="Выйти" outline onClick={() => closeModal()} />
        </div>
      </div>
    </Modal>
  );
};
