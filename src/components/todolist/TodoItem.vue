<template>
    <li class="flex items-center py-2 px-4 border-b border-gray-200">
        <input type="checkbox" :checked="task.completed" @change="$emit('toggle-complete', task.id)"
            class="mr-4 h-4 w-4 border rounded cursor-pointer" />
        <div :class="{ 'line-through': task.completed }" class="flex-1">
            <input v-if="task.isEditing" type="text" v-model="editedTaskName" class="w-full p-2 rounded border" />
            <span v-else>{{ task.task_name }}</span>
        </div>
        <div class="flex items-center space-x-2">
            <template v-if="task.isEditing">
                <Icons iconName="check-circle" class="w-6 h-6 text-green-500"
                    @click="$emit('edit-task', task.id, editedTaskName)" />
                <Icons iconName="close" class="w-6 h-6 text-gray-500" @click="$emit('toggle-edit', task.id)" />
            </template>
            <template v-else>
                <Icons iconName="edit" class="w-6 h-6 text-blue-500" @click="$emit('toggle-edit', task.id)" />
            </template>
            <Icons iconName="trash" class="w-6 h-6 text-red-500" @click="$emit('delete-task', task.id)" />
        </div>
    </li>
</template>
  
<script setup>
import Icons from '@/assets/icons/icons.vue';
import { ref } from 'vue';

const props = defineProps({
    task: {
        type: Object,
        default: () => { },
        required: true,
    },
});

const editedTaskName = ref(props.task.task_name);



defineEmits(["toggle-edit", "edit-task", "toggle-complete", "delete-task"]);

</script>