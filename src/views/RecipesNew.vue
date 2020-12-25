<template>
  <div class="new-recipe">
    <form v-on:submit.prevent="submit()">
      <h1>Create a New Recipe</h1>
      <h2>Ooh Exiting!</h2>

      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>

      <div class="form-group">
        <label>Name: </label> 
        <input type="text" class="form-control" v-model="name">
      </div>

      <div class="form-group">
        <label>Image: </label>
        <input type="text" class="form-control" v-model="image">
      </div>

      <div class="form-group">
        <label>Servings: </label>
        <input type="text" class="form-control" v-model="servings">
      </div>

      <div class="form-group">
        <label>Cooktime(minutes): </label>
        <input type="text" class="form-control" v-model="cooktime">
      </div>

      <div class="form-group">
        <label>Ingredients: </label>
        <input type="text" class="form-control" v-model="ingredients">
      </div>

      <div class="form-group">
        <label>Directions: </label>
        <input type="text" class="form-control" v-model="directions">
      </div>

      <input type="submit" class="btn btn-primary" value="submit">

    </form>
    <router-link v-bind:to="'/recipes'">
      <button>back</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      image: "",
      servings: "",
      cooktime: "",
      ingredients: "",
      directions: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {  
        name: this.name,
        image: this.image,
        servings: this.servings,
        cooktime: this.cooktime,
        ingredients: this.ingredients,
        directions: this.directions,
      };
      axios
        .post("/api/recipes", params)
        .then(response => {
          this.$router.push("/recipes");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>