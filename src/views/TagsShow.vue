<template>
  <div class="tag-show">
    <h2>{{ tag.name }}</h2>
    
    <div v-for="recipe in tag.recipes">
      <router-link v-bind:to="`/recipes/${recipe.id}`">
        <h3>{{ recipe.name }}</h3>
      </router-link>
    </div>

    <button v-on:click="editTag(tag)">edit tag</button>

    <dialog id="tag-details">
      <form method="dialog">
        <h1>Edit Tag</h1>
        <p>Name: <input type="text" v-model="tag.name"></p>
        <button v-on:click="updateTag(tag)">update</button>
        <button v-on:click="destroyTag(tag)">delete</button>
        <button>close</button>
      </form>
    </dialog>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tag: {},
      name: "",
      recipe: {},
      recipes: [],
    };
  },

  created: function() {
    axios
      .get("/api/tags/" + this.$route.params.id)
      .then(response => {
        this.tag = response.data;
        console.log("show tag", this.tag);
      });
  },

  methods: {
    editTag: function(tag) {
      console.log(tag);
      this.tag = tag;
      document.querySelector("#tag-details").showModal();
    },

    updateTag: function(tag) {
      var params = {
        name: this.tag.name,
      };
      axios
        .patch("/api/tags/" + this.tag.id, params)
        .then(response => {
          console.log("updated!", response.data);
        });
    },

    destroyTag: function(tag) {
      axios
        .delete("/api/tags/" + this.$route.params.id)
        .then(response => {
          console.log("deleted!", response.data);
          this.$router.push("/recipes");
        });
    },
  }
};
</script>