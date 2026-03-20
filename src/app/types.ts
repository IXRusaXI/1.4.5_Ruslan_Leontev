export enum Prioroty {
  LOW = 'low', // Низкий
  MEDIUM = 'medium', // Средний
  HIGH = 'high', // Высокий
}

export enum Status {
  TODO = 'Сделать', // Сделать
  PROGRESS = 'В прогрессе', // В прогрессе
  DONE = 'Сделано', // Сделано
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