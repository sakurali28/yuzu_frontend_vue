<template>
  <div class="show">
    <h2>{{ recipe.name }}</h2>
    <img v-bind:src="recipe.image">

    <h3>Cooktime: </h3>
    <p>{{ recipe.cooktime_conversion }}</p>
    
    <p v-if="recipe.servings">{{ recipe.servings }} servings</p>

    <h3>Ingredients: </h3>
    <ul v-for="ingredient in ingredients">
      <li>{{ ingredient }}</li>
    </ul>

    <h3>Directions: </h3>
    <ul v-for="direction in directions">
      <input type="checkbox">
      <label class="strikethrough">{{ direction }}</label>
    </ul>

    <p v-if="recipe.notes">notes: {{ recipe.notes }}</p>

    <!-- <div class="tag">
      <h3>Tags: </h3>
      <div v-for="tag in tags">
        <router-link v-bind:to="`/tags/${tag.id}`">
          <p>{{ tag.name }}</p>
        </router-link>
      </div>

      <form v-on:submit="createRecipeTag()">
        
      </form>
    </div> -->

    <router-link v-bind:to="`/recipes/${recipe.id}/edit`">
      <button>edit</button>
    </router-link>
  </div>
</template>

<style>
  img {
    height: 300px;
  }

  input[type=checkbox]:checked + label.strikethrough {
    text-decoration: line-through;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      recipe: {},
      ingredients: [],
      directions: [],
      tags: [],
    };
  },

  created: function() {
    axios
      .get("/api/recipes/" + this.$route.params.id)
      .then(response => {
        this.recipe = response.data;
        this.ingredients = response.data.ingredients.split(", ");
        this.directions = response.data.directions.split(", ");
        this.tags = response.data.tag;
        console.log("show recipe", this.recipe);
        console.log("show ingredients", this.ingredients);
        console.log("show directions", this.directions);
        console.log("show tags", this.tags);
      });
  },

  methods: {
    createTag: function() {
      var params = {
        tag_name: tag,
        recipe_id: this.recipe.id,
      };
      axios
        .post("/api/recipe_tags", params)
        .then(response => {
          this.recipe = response.data,
          console.log("recipe_tag created", response.data)
        });
    }
  }
};
</script>