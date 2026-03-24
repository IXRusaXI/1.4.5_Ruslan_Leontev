import classNames from 'classnames';
import Close from './../../shared/icons/close.svg?react';
import { Button } from './../../shared/Button/Button';
import { Input } from './../../shared/Input/Input';
import { Modal } from './../../shared/Modal/Modal';
import './style.scss';
import { useState } from 'react';

type EditTaskModalProps = {
  closeModal: MouseEventHandler<HTMLButtonElement>,
  apply: () => {},
  setName: () => {},
  name: string,
  setPriority: () => {},
  selectedPriority: string,
  task: {}
}

export const AddEditTaskModal = ({
  closeModal, 
  apply, 
  setName, 
  name, 
  selectedPriority,
  setPriority,
  task
}: EditTaskModalProps) => {
  if (task) {
    setName(task.title)
    setPriority(task.priority)
  }
  
  function inputActive(evt) {
    console.log("Нажал знак", event.target.value)
    if (task) {
      task.title = event.target.value
      setName(event.target.value)
    } else {
      setName(event.target.value)
    }
  }

  function selectPriority(priority) {
    if (task) {
      task.priority = priority
      setPriority(priority)
    } else {
      setPriority(priority)
    }
  }

  return (
    <Modal>
      <form>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">{task ? 'Редактировать' : "Добавить"} задачу</span>
            <Close className="cp" onClick={() => closeModal()} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={(evt) => inputActive(evt)}
            name="title"
            value={name}
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
                    onClick={() => selectPriority(priority)}
                    className={classNames(`${priority}-selected`, priority, priority === selectedPriority && 'active')}
                  >
                    {priorityLabels[priority]}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title={task ? 'Редактировать' : "Добавить"} onClick={() => apply(name)} />
          </div>
        </div>
      </form>
    </Modal>
  );
};
