<!-- Option API -->

<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'pending',
      tasks: ['Task One', 'Task Two', 'Task Three'],
      link: 'https://google.com',
    }
  },
  methods: {
    toggleStatus() {
      this.status = this.status === 'active' ? 'pending'
        : this.status === 'pending' ? 'inactive'
          : 'active';
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <!-- directive v-if (conditional directives) -->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive</p>


  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in this.tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="this.link">Click for Google</a> -->
  <a :href="this.link">Click for Google</a>
  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>

</template>
