<template>
  <div class="add-task">
    <input
      type="text"
      placeholder="Add new task"
      v-model="newTaskText"
      @keydown.enter="addTask"
    />
    <button @click="addTask">Add</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Task } from "@/models/interfaces";

const newTaskText = ref("");

const emit = defineEmits(["addTask"]);

const addTask = () => {
  if (newTaskText.value.trim() !== "") {
    const newTask = {
      id: Date.now(),
      text: newTaskText.value,
      completed: false,
      failed: false,
    };
    emit("addTask", newTask);
    newTaskText.value = "";
  }
};
</script>

<style lang="scss">
.add-task {
  display: flex;
  margin-bottom: 20px;

  input[type="text"] {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;

    &:focus {
      outline: none;
      border-color: #0077ff;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #0077ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0066cc;
    }
  }
}
</style>