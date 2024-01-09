<template>
  <div class="container mx-auto" data-testid="container">
    <h2 class="text-2xl font-bold mb-4 text-center mt-8">My Todo-list</h2>
    <AddTodo @create-task="createTask" data-testid="add-todo" />
    <ul class="list-disc list-inside" data-testid="task-list">
      <TodoItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete-task="deleteTask"
        @toggle-complete="toggleComplete"
        @toggle-edit="toggleEdit"
        @edit-task="editTask"
        data-testid="task-item"
      />
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AddTodo from './AddTodo.vue'
import TodoItem from './TodoItem.vue'
import { getTasks, postTask, editTaskFromAPI, deleteTaskFromAPI } from '@/services/todoList.js'

const tasks = ref([])

const createTask = async (task_name) => {
  const newTask = {
    task_name: task_name,
    completed: false,
    isEditing: null
  }
  tasks.value.push(newTask)

  try {
    const response = await postTask(newTask)
    newTask.id = response.id
  } catch (error) {
    tasks.value.pop()
    alert('Error creating task. Please try again.')
    console.error('Error creating task:', error)
  }
}

const toggleComplete = async (id) => {
  const taskToUpdate = tasks.value.find((task) => task.id === id)
  if (taskToUpdate) {
    taskToUpdate.completed = !taskToUpdate.completed
    try {
      await editTaskFromAPI(id, taskToUpdate)
    } catch (error) {
      taskToUpdate.completed = !taskToUpdate.completed
      alert('Error editing task. Please try again.')
      console.error('Error toggling complete state:', error)
    }
  }
}

const toggleEdit = (id) => {
  const taskToUpdate = tasks.value.find((task) => task.id === id)
  if (taskToUpdate) {
    taskToUpdate.isEditing = !taskToUpdate.isEditing
  }
}

const deleteTask = async (deletedTaskId) => {
  const taskIndex = tasks.value.findIndex((task) => task.id === deletedTaskId)

  if (taskIndex !== -1) {
    const taskToDelete = tasks.value[taskIndex]
    tasks.value.splice(taskIndex, 1)
    try {
      await deleteTaskFromAPI(deletedTaskId)
    } catch (error) {
      tasks.value.splice(taskIndex, 0, taskToDelete)
      alert('Error deleting task. Please try again.')
      console.error('Error deleting task:', error)
    }
  }
}

const editTask = async (id, editedTaskName) => {
  const taskToUpdate = tasks.value.find((task) => task.id === id)

  if (taskToUpdate) {
    const previousName = taskToUpdate.task_name
    taskToUpdate.task_name = editedTaskName
    taskToUpdate.isEditing = false
    try {
      await editTaskFromAPI(id, taskToUpdate)
    } catch (error) {
      taskToUpdate.task_name = previousName
      console.error('Error editing task:', error)
    }
  }
}

onMounted(async () => {
  try {
    const tasksResponse = await getTasks()
    tasks.value = tasksResponse
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
})
</script>

<style></style>
