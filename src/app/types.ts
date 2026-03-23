export enum Prioroty {
  LOW = 'low', // Низкий
  MEDIUM = 'medium', // Средний
  HIGH = 'high', // Высокий
}

export enum Status {
  TODO = 'todo', // Сделать
  PROGRESS = 'progress', // В прогрессе
  DONE = 'done', // Сделано
}

export function translatePriority(priority: Prioroty) {
  switch(priority) {
    case('low'):
      return 'Низкий'
    case('medium'):
      return 'Средний'
    case('high'):
      return 'Высокий'
  }
}

export function translateStatus(status: Status) {
  switch(status) {
    case('todo'):
      return 'Сделать'
    case('progress'):
      return 'В процессе'
    case('done'):
      return 'Сделано'
  }
}