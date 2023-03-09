<template>
  <ul class="task-list">
    <li
      v-for="task in tasks"
      :key="task.id"
      :class="{ completed: task.completed, failed: task.failed }"
    >
      <div class="task-info">
        <span>{{ task.text }}</span>
      </div>
      <div class="task-actions">
        <button
          class="btn btn-complete"
          v-if="!task.completed && !task.failed"
          @click="completeTask(task)"
        >
          Done
        </button>
        <button
          class="btn btn-fail"
          v-if="!task.failed && !task.completed"
          @click="failTask(task)"
        >
          Fail
        </button>
        <button class="btn btn-delete" @click="deleteTask(task.id)">
          Delete
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Task } from "@/models/interfaces";

const props = defineProps({
  tasks: {
    type: Array as () => Task[],
    required: true,
  },
});

const emit = defineEmits(["deleteTask"]);

const deleteTask = (id: number) => {
  emit("deleteTask", id);
};

const completeTask = (task: Task) => {
  task.completed = true;
  task.failed = false;
};

const failTask = (task: Task) => {
  task.failed = true;
  task.completed = false;
};
</script>

<style lang="scss">
.task-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;

    &.completed {
      background-color: #d9f7be;
      color: #000;
      text-decoration: line-through;
    }

    &.failed {
      background-color: #ffcccc;
      color: #000;
    }

    .task-info {
      display: flex;
      align-items: center;

      input[type="checkbox"] {
        margin-right: 10px;
      }
    }

    .task-actions {
      gap: 10px;
      .btn {
        padding: 5px 10px;
        font-size: 14px;
        margin-left: 10px;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        &-delete {
          background-color: #f32013;

          &:hover {
            background-color: #ca0b00;
          }
        }
        &-fail {
          background-color: #ffc302;

          &:hover {
            background-color: #ff8f00;
          }
        }
        &-complete {
          background-color: #4a934a;

          &:hover {
            background-color: #408140;
          }
        }
      }
    }
  }
}
</style>