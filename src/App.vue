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
              <button class="dropdown-item" v-on:click="tagModal()">+ tag</button>
            </div>

            <dialog id="tag-create">
              <form method="dialog">
                <h1>Create a New Tag</h1>
                <label>Name: </label> 
                <input type="text" class="form-control" v-model="name">
                <button v-on:click="createTag()">create</button>
                <button>close</button>
              </form>
            </dialog>

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
      name: "",
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
    tagModal: function() {
      document.querySelector("#tag-create").showModal();
    },

    createTag: function() {
      var params = {  
        name: this.name,
      };
      axios
        .post("/api/tags", params)
        .then(response => {
          console.log("tag created", response.data);
        });
    },

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