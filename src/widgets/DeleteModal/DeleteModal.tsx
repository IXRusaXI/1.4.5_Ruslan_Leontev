import { Button } from './../../shared/Button/Button';
import { Modal } from './../../shared/Modal/Modal';
import style from './style.module.scss';

export const DeleteModal = () => {
  return (
    <Modal>
      <div className={style["delete-modal"]}>
        <p>Точно удалить задачу?</p>
        <div className={style["delete-modal__actions"]}>
          <Button title="Удалить" onClick={() => {}} />
          <Button title="Выйти" outline onClick={() => {}} />
        </div>
      </div>
    </Modal>
  );
};
