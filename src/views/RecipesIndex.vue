<template>
  <!-- <div class="recipes">
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
  </div> -->

  <div id="wrapper" class="clearfix">
    <section id="content">
      <div class="content-wrap pt-5" style="overflow: visible;">
        <div class="container">
          <h3 class="mb-0">Recipes</h3>

          <!-- search bar -->
          <div class="widget widget-search">
            <form class="input-group">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="titleFilter">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary icon-line-search" type="button"></button>
              </div>
            </form>
          </div>


          <div class="row posts-md">
            <div class="col-lg-3 col-sm-6" v-for="recipe in filterBy(recipes, titleFilter, 'name', 'ingredients', 'tag')">
              <article class="entry">

                <div class="entry-image">
                  <a><img v-bind:src="`${recipe.image}`" alt="Image 3"></a>
                </div>

                <div class="entry-title title-sm text-left">
                  <div class="entry-meta"><i class="icon-line-clock"></i> {{ recipe.cooktime_conversion }}</div>
                  <h3><a v-bind:href="`/recipes/${recipe.id}`" class="color-underline stretched-link">{{ recipe.name }}</a></h3>
                </div>

              </article>
            </div>
            
          </div>
        </div>
      </div>
    </section>
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