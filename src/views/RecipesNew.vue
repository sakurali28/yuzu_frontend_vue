<template>
  <div class="new">
    <form v-on:submit.prevent="submit()">
      <h1>Create a New Recipe</h1>
      <h2>Ooh Exiting!</h2>

      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>

      <div class="form-group">
        <label>Title: </label> 
        <input type="text" class="form-control" v-model="title">
      </div>

      <div class="form-group">
        <label>Image: </label>
        <input type="text" class="form-control" v-model="image">
      </div>

      <div class="form-group">
        <label>Cooktime: </label>
        <input type="text" class="form-control" v-model="cooktime">
      </div>

      <div class="form-group">
        <label>Ingredient </label>
        <input type="text" class="form-control" v-model="ingredient">
      </div>

      <div class="form-group">
        <label>Direction: </label>
        <input type="text" class="form-control" v-model="direction">
      </div>

      <input type="submit" class="btn btn-primary" value="Submit">

    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      image: "",
      cooktime: "",
      ingredient: "",
      direction: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {  
        title: this.title,
        image: this.image,
        cooktime: this.cooktime,
        ingredient: this.ingredient,
        direction: this.direction,
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