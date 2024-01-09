<template>
  <li class="flex items-center py-2 px-4 border-b border-gray-200">
    <input
      type="checkbox"
      data-testid="toggle-complete-checkbox"
      :checked="task.completed"
      @change="$emit('toggle-complete', task.id)"
      class="mr-4 h-4 w-4 border rounded cursor-pointer"
    />
    <div :class="{ 'line-through': task.completed }" class="flex-1">
      <input
        v-if="task.isEditing"
        type="text"
        data-testid="edit-task-input"
        v-model="editedTaskName"
        class="w-full p-2 rounded border"
      />
      <span v-else>{{ task.task_name }}</span>
    </div>
    <div class="flex items-center space-x-2">
      <template v-if="task.isEditing">
        <CustomIcons
          iconName="check-circle"
          class="w-6 h-6 text-green-500 cursor-pointer"
          data-testid="save-edit-button"
          @click="$emit('edit-task', task.id, editedTaskName)"
        />
        <CustomIcons
          iconName="close"
          class="w-6 h-6 text-gray-500 cursor-pointer"
          @click="$emit('toggle-edit', task.id)"
          data-testid="cancel-edit-task"
        />
      </template>
      <template v-else>
        <CustomIcons
          data-testid="toggle-edit-button"
          iconName="edit"
          class="w-6 h-6 text-blue-500 cursor-pointer"
          @click="$emit('toggle-edit', task.id)"
        />
      </template>
      <CustomIcons
        iconName="trash"
        data-testid="delete-task-button"
        class="w-6 h-6 text-red-500 cursor-pointer"
        @click="$emit('delete-task', task.id)"
      />
    </div>
  </li>
</template>

<script setup>
import CustomIcons from '@/assets/icons/customIcons.vue'
import { ref } from 'vue'

const props = defineProps({
  task: {
    type: Object,
    default: () => {},
    required: true
  }
})

const editedTaskName = ref(props.task.task_name)

defineEmits(['toggle-edit', 'edit-task', 'toggle-complete', 'delete-task'])
</script>
