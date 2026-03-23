import style from './style.module.scss';
import Add from './../../shared/icons/add.svg?react';
import { AddEditTaskModal } from './../../features/AddEditTaskModal/AddEditTaskModal';
import { Button } from './../../shared/Button/Button';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
import { taskList } from './../../entities/serverData/taskList';
import { useState } from 'react';



export const TodoList = () => {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className={style["page-wrapper"]}>
        <div className={style["top-title"]}>
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => setShowAddEditModal(true)} />
        </div>
        <div className={style["task-container"]}>
          {taskList.map((task) => (
            <TaskCard task={task} showDeleteTaskModal={() => setShowDeleteModal(true)} 
              closeDeleteTaskModal={() => setShowDeleteModal(false)} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskModal closeModal={() => setShowAddEditModal(false)} />}
      {showDeleteModal && <DeleteModal />}
    </>
  );
};


