import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AddTodo from '@/components/todolist/AddTodo.vue'

describe('AddTodo', () => {
  it('renders an error when the input is empty and the button is clicked', async () => {
    const wrapper = mount(AddTodo)
    await wrapper.find('[data-testid="add-task-button"]').trigger('click')
    expect(wrapper.text()).toContain('Please try to write something first!')
  })

  it('emits "create-task" event with the input value when the input is not empty and the button is clicked', async () => {
    const wrapper = mount(AddTodo)
    await wrapper.find('[data-testid="new-task-input"]').setValue('New task')
    await wrapper.find('[data-testid="add-task-button"]').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('create-task')
    expect(wrapper.emitted()['create-task'][0]).toEqual(['New task'])
  })
})
