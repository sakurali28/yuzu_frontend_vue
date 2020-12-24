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
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/tags/new">+ Tag</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/recipes/new">+ Recipe</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/users">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="/recipes">Recipes</a>
            <a class="nav-link" href="/tags">Tags</a>
            <a class="nav-link" href="/recipes/new">Create a New Recipe (+)</a>
            <a class="nav-link" href="/tags/new">Create a New Tag (+)</a>
            <a class="nav-link" href="/users">Users</a>
            <a class="nav-link" href="/logout">Logout</a>
          </div>
        </div>
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