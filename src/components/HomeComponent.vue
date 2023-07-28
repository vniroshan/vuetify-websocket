<template>
    <v-container>
        <v-text-field v-model="message" label="Notification Message"></v-text-field>
    <v-btn @click="sendMessage()" color="primary">Send Notification</v-btn>
  </v-container>
  </template>
  
  <script>
  export default {
    components: {
      //
    },
    props: [
      //
    ],
    data: () => ({
      connection: null,
      time:'',
      message:'',
    }),
    created() {
      
    },
    mounted() {
        console.log("Starting connection to WebSocket Server");
      this.connection = new WebSocket("ws://127.0.0.1:3000/ws");
  
      this.connection.onmessage = function (event) {
        console.log(event);
        alert(event.data)
      };
  
      this.connection.onopen = function (event) {
        console.log(event);
        console.log("Successfully connected to the echo websocket server...");
      };
    },
    methods: {
      sendMessage: function() {
        console.log(this.connection);
        this.connection.send(this.message);
        this.message = ''
      }
    },
  };
  </script>
  