<template>
  <div>
    <b-container class="w-50">
      <b-form @submit="onSubmit">
        <b-container class="p-2">
          <label class="w-100 text-start" for="title">Title</label>
          <b-form-input required v-model="task.title" placeholder="Title here"></b-form-input>
        </b-container>
        <b-container class="p-2">
          <label class="w-100 text-start" for="description">Description</label>
          <b-form-textarea
            id="description"
            v-model="task.description"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
            required
          ></b-form-textarea>
        </b-container>
        <b-container class="p-2">
          <label class="w-100 text-start" for="due_date">Due date</label>
          <b-form-datepicker required id="due_date" v-model="task.due_date" class="mb-2"></b-form-datepicker>
        </b-container>
        <b-container class="p-2">
          <b-form-checkbox
            class="text-start"
            id="checkbox-1"
            name="checkbox-1"
            :value="true"
            v-model="task.status"
            :unchecked-value="false"
          >
            <label class="mx-2"> Task Done</label>
          </b-form-checkbox>
        </b-container>
        <b-container class="p-2 d-flex align-items-center justify-content-end">
          <b-button type="submit" class="text-end" variant="primary"
            >Submit</b-button
          >
        </b-container>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { TaskCreateMixin } from "../utils/index.js";
export default {
  name: "TaskCreatePage",
  mixins: [TaskCreateMixin()],
};
</script>
