<template>
  <div class="recipes">
    <h2>Recipes</h2>
    <div>
      Search: <input v-model="titleFilter">
    </div>

    <router-link v-bind:to="`/recipes/new`">
      <button>+ New Recipe</button>
    </router-link>

    <div class="card-deck">
      <div class="card" v-for="recipe in filterBy(recipes, titleFilter, 'name', 'ingredients', 'tag')">
        <router-link v-bind:to="`/recipes/${recipe.id}`">
          <img v-bind:src="`${recipe.image}`" class="card-img-top" v-bind:alt="recipe.name" />
          <div class="card-body">
            <h5 class="card-title">{{ recipe.name }}</h5>
          </div>
        </router-link>
      </div>
    </div>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </div>
</template>

<style>
  .recipes {
    padding: 25px;
  }
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      recipes: [],
      titleFilter: "",
      errors: [],
    };
  },

  created: function() {
    this.indexRecipes();
  },

  methods: {
    indexRecipes: function () {
      axios
        .get("/api/recipes")
        .then(response => {
          this.recipes = response.data;
          console.log("All Recipes", this.recipes);
        });
    },
  },
};
</script>