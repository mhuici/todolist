import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoList from '@/components/todolist/TodoList.vue' 


describe('TodoList', () => {
    it('renders the todo list container when the component is mounted', () => {
      const wrapper = mount(TodoList)
      expect(wrapper.find('[data-testid="container"]').exists()).toBe(true)
    })

    it('renders the add todo component', () => {
      const wrapper = mount(TodoList)
      expect(wrapper.find('[data-testid="add-todo"]').exists()).toBe(true)
    })

    it('renders the task list', () => {
      const wrapper = mount(TodoList)
      expect(wrapper.find('[data-testid="task-list"]').exists()).toBe(true)
    })

    it('creates a new task when createTask is called', async () => {
      const wrapper = mount(TodoList)
      await wrapper.vm.createTask('new task')
      expect(wrapper.vm.tasks).toContainEqual(expect.objectContaining({ task_name: 'new task' }))
    })


})