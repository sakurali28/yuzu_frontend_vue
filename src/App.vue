<template>
  <div id="app">
    <div id="nav" v-if="isLoggedIn()">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/recipes">YUZU</a>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/recipes">Recipes</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tags</a>
            <div class="dropdown-menu">
              <div class="dropdown-item" v-for="tag in tags">
                <router-link v-bind:to="`/tags/${tag.id}`">
                  <p>{{ tag.name }}</p>
                </router-link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/users">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tags: [],
    };
  },

  created: function() {
    axios
      .get("/api/tags")
      .then(response => {
        console.log("tag index", response);
        this.tags = response.data;
      });
  },

  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>