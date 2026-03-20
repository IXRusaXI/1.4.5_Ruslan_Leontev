import classNames from 'classnames';
import DeleteIcon from './../../shared/icons/delete.svg?react';
import EditIcon from './../../shared/icons/edit.svg?react';
import { CircularProgressBar } from './../../shared/CircularProgressBar/CircularProgressBar';
import './style.scss';
import { translatePriority } from './../../app/types';

export const TaskCard = ({
  task: { id, title, priority, status, progress },
}) => {
  return (
    <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Задача</span>
        <span className="task">{title}</span>
      </div>
      <div className="flex">
        <span className="priority-title">Приоритет</span>
        <span className={classNames(`priority--${priority}`, 'priority')}>
        {translatePriority(priority)}
        </span>
      </div>
      <div className="task-status-wrapper">
        <button className={classNames(`status--${status}`, 'status')}>
          {status}
        </button>
      </div>
      <div className="progress">
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className="actions">
        <EditIcon className="mr-20 cp" onClick={() => {}} />
        <DeleteIcon className="cp" onClick={() => {}} />
      </div>
    </div>
  );
};
