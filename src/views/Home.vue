<template>
  <div class="recipes">
    <h1>YUZU</h1>
    <h2>Let's get started, shall we?</h2>
    <div class="buttons">
      <router-link v-bind:to="`/signup`">
        <button type="button" class="btn btn-outline-dark btn-lg btn-block" >Signup</button>
      </router-link>
      <br>
      <router-link v-bind:to="`/login`">
        <button type="button" class="btn btn-outline-dark btn-lg btn-block">Login</button>
      </router-link>
    </div>

  </div>
</template>

<style>
  body, html {
    background: url("../assets/home.jpeg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1 {
    font-size: 100px;
  }

  h1, h2 {
    color: white;
    padding-top: 25px;
    text-align: center;
  }
  .buttons {
    padding: 25px;
    text-align: center;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      
    };
  },

  created: function() {
  },

  methods: {
    
  },
};
</script>