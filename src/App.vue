<!-- App.vue -->

<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Push Notification App</h1>
        <HomeComponent />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue';

export default {
  components: {
    HomeComponent
  }
};
</script>
