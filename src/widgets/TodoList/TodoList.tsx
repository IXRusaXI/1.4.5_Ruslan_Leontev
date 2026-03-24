import style from './style.module.scss';
import Add from './../../shared/icons/add.svg?react';
import { AddEditTaskModal } from './../../features/AddEditTaskModal/AddEditTaskModal';
import { Button } from './../../shared/Button/Button';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
import { taskList } from './../../entities/serverData/taskList';
import { useState } from 'react';



export const TodoList = () => {
  const [list, setList] = useState(taskList)

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState('')

  function getDeleteTaskId() {
    return deleteTaskId
  }

  function setTaskId(id: string) {
    setDeleteTaskId(id)
  }

  function deleteTask(id: string) {
    const newList = list.filter(task => task.id !== deleteTaskId)
    setList(newList)
    setDeleteTaskId('')
  }

  return (
    <>
      <div className={style["page-wrapper"]}>
        <div className={style["top-title"]}>
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => setShowAddEditModal(true)} />
        </div>
        <div className={style["task-container"]}>
          {list.map((task) => (
            <TaskCard id={task.id} task={task} showDeleteTaskModal={() => setShowDeleteModal(true)} 
              showAddTaskModal={() => setShowAddEditModal(true)}
              deleteTaskId={() => setTaskId(task.id)}
              />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskModal closeModal={() => setShowAddEditModal(false)} />}
      {showDeleteModal && <DeleteModal closeModal={() => setShowDeleteModal(false)}  deleteTask={() => deleteTask(getDeleteTaskId())}/>}
    </>
  );
};


