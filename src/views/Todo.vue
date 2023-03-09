<template>
  <div class="container">
    <h1>Todo List</h1>
    <AddTask @addTask="addTask" />
    <TaskList :tasks="tasks" @deleteTask="deleteTask" />
  </div>
</template>

<script lang="ts">
import type { Task } from "@/models/interfaces";
import { ref, defineComponent, watchEffect } from "vue";
import AddTask from "@/components/Task-1/AddTask.vue";
import TaskList from "@/components/Task-1/TaskList.vue";

export default defineComponent({
  components: {
    AddTask,
    TaskList,
  },

  setup() {
    const tasks = ref<Task[]>(
      JSON.parse(localStorage.getItem("tasks") || "[]")
    );

    const addTask = (newTask: Task) => {
      tasks.value.push(newTask);
    };

    const saveTasks = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks.value));
    };

    const deleteTask = (id: number) => {
      tasks.value = tasks.value.filter((task) => task.id !== id);
    };

    watchEffect(() => {
      saveTasks();
    });

    return {
      tasks,
      addTask,
      deleteTask,
    };
  },
});
</script>

<style lang="scss">
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;

  h1 {
    text-align: center;
  }
}
</style>