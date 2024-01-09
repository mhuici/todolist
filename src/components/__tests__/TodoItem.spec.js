import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoItem from '@/components/todolist/TodoItem.vue'

describe('TodoItem', () => {
  const task = {
    id: 1,
    task_name: 'Test task',
    completed: false,
    isEditing: false
  }

  it('emits "toggle-complete" event when the checkbox is clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: { task }
    })
    wrapper.find('[data-testid="toggle-complete-checkbox"]').setValue(true);

    await wrapper.find('[data-testid="toggle-complete-checkbox"]').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('toggle-complete')
    expect(wrapper.emitted()['toggle-complete'][0]).toEqual([task.id])
  })

  it('emits "edit-task" event with the edited task name when the save button is clicked', async () => {
    task.isEditing = true
    const wrapper = mount(TodoItem, {
      props: { task }
    })
    await wrapper.find('[data-testid="edit-task-input"]').setValue('Edited task')
    await wrapper.find('[data-testid="save-edit-button"]').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('edit-task')
    expect(wrapper.emitted()['edit-task'][0]).toEqual([task.id, 'Edited task'])
  })

  it('emits "delete-task" event when the delete button is clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: { task }
    })
    await wrapper.find('[data-testid="delete-task-button"]').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('delete-task')
    expect(wrapper.emitted()['delete-task'][0]).toEqual([task.id])
  })
})