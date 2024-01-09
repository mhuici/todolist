<template>
    <div>

        <div class="input-wrap bg-gray-100 p-4 rounded-md shadow-md flex align-center" :class="{ 'input-err': task.invalid }">
            <input type="text" v-model="task.task_name" placeholder="Enter todo..."  data-testid="new-task-input"
                class="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-teal-500" />
            <button @click="addtask" data-testid="add-task-button"
                class=" mx-4  bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Add task
            </button>
        </div>
        <p class="err-msg text-red-500 mt-2" v-if="task.invalid">{{ task.errMsg }}</p>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';

const task = reactive({
    task_name: "",
    invalid: false,
    errMsg: "",
});

const addtask = () => {
    task.invalid = false;
    if (task.task_name !== "") {
        emit("create-task", task.task_name);
        task.task_name = "";
        return;
    }
    task.invalid = true;
    task.errMsg = "Please try to write something first!";
};
const emit = defineEmits(["create-task"]);
</script>