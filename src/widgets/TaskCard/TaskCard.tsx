import classNames from 'classnames';
import DeleteIcon from './../../shared/icons/delete.svg';
import EditIcon from './../../shared/icons/edit.svg';
import { CircularProgressBar } from './../../shared/CircularProgressBar/CircularProgressBar';
import style from './style.module.scss';
import { translatePriority, translateStatus } from './../../app/types';
import { Task } from '../../entities/serverData/taskList';

type TaskCardProps = {
  task: Task,
  deleteTask: () => void,
  showDeleteTaskModal: () => void,
  showEditTaskModal: () => void,
  setActualTask: () => void
}

export const TaskCard = ({task: { title, priority, status, progress }, 
  showDeleteTaskModal, 
  showEditTaskModal,
  setActualTask
}: TaskCardProps
) => {
  function deleteAction() {
    setActualTask()
    showDeleteTaskModal()
  }

  function edit() {
    setActualTask()
    showEditTaskModal()
  }

  return (
    <div className={style["task-card"]}>
      <div className="flex w-100">
        <span className={style["task-title"]}>Задача</span>
        <span className={style["task"]}>{title}</span>
      </div>
      <div className="flex">
        <span className={style["priority-title"]}>Приоритет</span>
        <span className={classNames(style[`priority--${priority}`], style.priority)}>
        {translatePriority(priority)}
        </span>
      </div>
      <div className={style["task-status-wrapper"]}>
        <button className={classNames(style[`status--${status}`], style.status)}>
        {translateStatus(status)}
        </button>
      </div>
      <div className={style['progress']}>
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className={style['actions']}>
        <img src={EditIcon} className="mr-20 cp" onClick={() => edit() } />
        <img src={DeleteIcon} className="cp" onClick={() => deleteAction()} />
      </div>
    </div>
  );
};
