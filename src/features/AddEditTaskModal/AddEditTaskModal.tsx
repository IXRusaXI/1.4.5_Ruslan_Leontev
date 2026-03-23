import classNames from 'classnames';
import Close from './../../shared/icons/close.svg?react';
import { Button } from './../../shared/Button/Button';
import { Input } from './../../shared/Input/Input';
import { Modal } from './../../shared/Modal/Modal';
import './style.scss';

type EditTaskModalProps = {
  closeModal: MouseEventHandler<HTMLButtonElement>
}

export const AddEditTaskModal = ({closeModal}: EditTaskModalProps) => {

  return (
    <Modal>
      <form>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">Добавить задачу</span>
            <Close className="cp" onClick={() => closeModal()} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={() => {}}
            name="title"
            value=""
          />
          <div className="modal-priority">
            <span>Приортитет</span>
            <ul className="priority-buttons">
              {['high', 'medium', 'low'].map((priority) => {
                const priorityLabels = {
                  high: 'высокий',
                  medium: 'средний',
                  low: 'низкий'
                };

                return (
                  <li
                    key={priority}
                    className={classNames(`${priority}-selected`, priority)}
                  >
                    {priorityLabels[priority]}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title="Добавить" onClick={() => {}} />
          </div>
        </div>
      </form>
    </Modal>
  );
};
