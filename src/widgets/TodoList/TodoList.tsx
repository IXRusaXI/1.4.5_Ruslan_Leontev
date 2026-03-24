import style from './style.module.scss';
import Add from './../../shared/icons/add.svg?react';
import { AddEditTaskModal } from './../../features/AddEditTaskModal/AddEditTaskModal';
import { Button } from './../../shared/Button/Button';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
import { taskList } from './../../entities/serverData/taskList';
import { useState } from 'react';
import { Prioroty, Status } from './../../app/types';


export const TodoList = () => {
  const [list, setList] = useState(taskList)
  const [lastId, setLastId] = useState(5)
  const [taskName, setTaskName] = useState('')
  const [priority, setPriority] = useState('high')
  const [actualTask, setActualTask] = useState({})

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState('')

  function generateId() {
    let newId = lastId + 1
    setLastId(newId)

    if (newId < 10) {
      newId = '0' + newId
    } else {
      newId = '' + newId
    }

    return newId
  }

  function createTask() {
    const newTask: Task = {
      id: generateId(),
      title: taskName,
      priority: priority,
      status: Status.TODO,
      progress: 0,
    }

    let newList = [...list];
    newList.push(newTask);
    setList(newList);
    closeCreateModal()
  }

  function editTask() {
    // console.log(actualTask)
    const newTask: Task = {
      id: actualTask.id,
      title: taskName,
      priority: priority,
      status: Status.TODO,
      progress: 0,
    }

    let newList = list.map(task => {
      if (task.id !== actualTask.id) return task

      return newTask
    })

    setList(newList);
    closeEditModal()
  }

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

  function closeCreateModal() {
    setShowAddModal(false)
    setPriority('high')
    setTaskName('')
  }

  function closeEditModal() {
    setShowEditModal(false)
    setPriority('high')
    setTaskName('')
  }
  return (
    <>
      <div className={style["page-wrapper"]}>
        <div className={style["top-title"]}>
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => setShowAddModal(true)} />
        </div>
        <div className={style["task-container"]}>
          {list.map((task) => (
            <TaskCard key={task.id} id={task.id} task={task} 
              showDeleteTaskModal={() => setShowDeleteModal(true)} 
              showEditTaskModal={() => setShowEditModal(true)}
              setActualTask={setActualTask}
              deleteTaskId={() => setTaskId(task.id)}
            />
          ))}
        </div>
      </div>
      {showAddModal && <AddEditTaskModal 
        closeModal={() => closeCreateModal()} 
        apply={() => createTask()}
        setName={setTaskName}
        name={taskName}
        setPriority={setPriority}
        selectedPriority={priority}
      />}

      {showEditModal && <AddEditTaskModal 
        task={actualTask}
        closeModal={() => closeEditModal()} 
        apply={() => editTask()}
        setName={setTaskName}
        name={taskName}
        setPriority={setPriority}
        selectedPriority={priority}
      />}
      {showDeleteModal && <DeleteModal closeModal={() => setShowDeleteModal(false)}  deleteTask={() => deleteTask(getDeleteTaskId())}/>}
    </>
  );
};


