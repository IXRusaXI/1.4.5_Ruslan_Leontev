import style from './style.module.scss';
import Add from './../../shared/icons/add.svg?react';
import { AddEditTaskModal } from './../../features/AddEditTaskModal/AddEditTaskModal';
import { Button } from './../../shared/Button/Button';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
import { taskList } from './../../entities/serverData/taskList';

export const TodoList = () => {
  const showAddEditModal = false;
  const showDeleteModal = false;
  return (
    <>
      <div className={style["page-wrapper"]}>
        <div className={style["top-title"]}>
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => {}} />
        </div>
        <div className={style["task-container"]}>
          {taskList.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskModal />}
      {showDeleteModal && <DeleteModal />}
    </>
  );
};
