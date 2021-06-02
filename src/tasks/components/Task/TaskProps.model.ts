import Task from '../../../shared/models/Task.model'
import TaskCompletionHandler from '../../../shared/models/TaskCompletionHandler.model'

interface TaskProps {
  task: Task
  toggleComplete: TaskCompletionHandler
}

export default TaskProps
