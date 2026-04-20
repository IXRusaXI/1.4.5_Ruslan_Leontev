import style from './style.module.scss';
import Add from './../../shared/icons/add.svg';
import { AddEditTaskModal } from './../../features/AddEditTaskModal/AddEditTaskModal';
import { Button } from './../../shared/Button/Button';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
import { useTypedDispatch, useTypedSelector } from './../../hooks/redux';
import { modalActions } from './../../store/modalSlice';
import { todoActions } from './../../store/todoListSlice';
import { nanoid } from 'nanoid';
import { Priority, Status } from '../../app/types';

export const TodoList = () => {
  const dispatch = useTypedDispatch();

  const isAddModalOpen = useTypedSelector((state) => state.modal.isAddModalOpen);
  const isEditModalOpen = useTypedSelector((state) => state.modal.isEditModalOpen);
  const isDeleteModalOpen = useTypedSelector((state) => state.modal.isDeleteModalOpen);

  const list = useTypedSelector((state) => state.todo.taskList);
  const actualTask = useTypedSelector((state) => state.todo.actualTask);



  function addNewTask() {
    dispatch(todoActions.setActualTask({
      id: nanoid(),
      title: '',
      priority: Priority.LOW,
      status: Status.TODO,
      progress: 0

    }))

    dispatch(modalActions.toggleAddModal())
  }

  return (
    <>
      <div className={style["page-wrapper"]}>
        <div className={style["top-title"]}>
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<img src={Add} />} onClick={() => addNewTask()} />
        </div>
        <div className={style["task-container"]}>
          {list.map((task) => (
            <TaskCard key={task.id} task={task} 
              showDeleteTaskModal={() => dispatch(modalActions.toggleDeleteModal())} 
              showEditTaskModal={() => dispatch(modalActions.toggleEditModal())}
              setActualTask={() => dispatch(todoActions.setActualTask(task))}
              deleteTask={() => dispatch(todoActions.deleteTodo(task))}
            />
          ))}
        </div>
      </div>

      {isAddModalOpen && <AddEditTaskModal 
        closeModal={() => dispatch(modalActions.toggleAddModal())} 
      />}

      {isEditModalOpen && <AddEditTaskModal 
        closeModal={() => dispatch(modalActions.toggleEditModal())} 
      />}
      
      {isDeleteModalOpen && <DeleteModal
        closeModal={() => dispatch(modalActions.toggleDeleteModal())}  
        deleteTask={() => dispatch(todoActions.deleteTodo(actualTask))}
      />}
    </>
  );
};


