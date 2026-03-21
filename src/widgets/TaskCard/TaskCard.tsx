import classNames from 'classnames';
import DeleteIcon from './../../shared/icons/delete.svg?react';
import EditIcon from './../../shared/icons/edit.svg?react';
import { CircularProgressBar } from './../../shared/CircularProgressBar/CircularProgressBar';
import style from './style.module.scss';
import { translatePriority } from './../../app/types';

export const TaskCard = ({
  task: { id, title, priority, status, progress },
}) => {
  console.log(`status--${status}`)
  console.log(!!style[`status--${status}`])
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
          {status}
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
        <EditIcon className="mr-20 cp" onClick={() => {}} />
        <DeleteIcon className="cp" onClick={() => {}} />
      </div>
    </div>
  );
};
