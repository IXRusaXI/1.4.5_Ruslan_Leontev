import classNames from 'classnames';
import Close from './../../shared/icons/close.svg';
import { Button } from './../../shared/Button/Button';
import { Input } from './../../shared/Input/Input';
import { Modal } from './../../shared/Modal/Modal';
import './style.scss';
import { Dispatch, MouseEventHandler, SetStateAction, SyntheticEvent } from 'react';
import { Task } from '../../entities/serverData/taskList';
import { useTypedDispatch, useTypedSelector } from './../../hooks/redux';
import { modalActions } from './../../store/modalSlice';
import { todoActions } from './../../store/todoListSlice';
import { Priority, translatePriority } from '../../app/types';

type EditTaskModalProps = {
  closeModal: () => void,
  task?: Task | null
}

export const AddEditTaskModal = ({
  closeModal, 
}: EditTaskModalProps) => {
  const dispatch = useTypedDispatch();

  const isAddModalOpen = useTypedSelector((state) => state.modal.isAddModalOpen);
  const isEditModalOpen = useTypedSelector((state) => state.modal.isEditModalOpen);

  const actualTask = useTypedSelector((state) => state.todo.actualTask);

  function inputActive(evt: React.ChangeEvent<HTMLInputElement>) {
    if (!actualTask) return

    dispatch(todoActions.setActualTask({
      ...actualTask,
      title: evt.target.value
    }))
  }

  function selectPriority(priority: Priority) {
    if (!actualTask) return

    dispatch(todoActions.setActualTask({
      ...actualTask,
      priority: priority
    }))
  }

  function save() {
    if (!actualTask) return

    if (isAddModalOpen) {
      dispatch(todoActions.addNewTodo(actualTask))
    } else if (isEditModalOpen) {
      dispatch(todoActions.editTodo(actualTask))
    }

    dispatch(todoActions.clearTodo())
    closeModal()
  }

  return (
    <Modal>
      <form>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">{isEditModalOpen ? 'Редактировать' : "Добавить"} задачу</span>
            <img src={Close} className="cp" onClick={() => closeModal()} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={(evt) => inputActive(evt)}
            name="title"
            value={actualTask?.title}
          />
          <div className="modal-priority">
            <span>Приортитет</span>
            <ul className="priority-buttons">
              {Object.values(Priority).map((priority) => {

                return (
                  <li
                    key={priority}
                    onClick={() => selectPriority(priority)}
                    className={classNames(`${priority}-selected`, priority, priority === actualTask?.priority && 'active')}
                  >
                    {translatePriority(priority)}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title={isEditModalOpen ? 'Редактировать' : "Добавить"} onClick={() => save()} />
          </div>
        </div>
      </form>
    </Modal>
  );
};
