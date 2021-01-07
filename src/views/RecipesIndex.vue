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
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="mx-auto center" style="max-width: 800px">
            <h3 class="nott font-weight-bold mb-5 display-4">Recipes</h3>
          </div>
          <!-- search bar -->
          <div class="widget widget-search">
            <form class="input-group">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="titleFilter">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary icon-line-search" type="button"></button>
              </div>
            </form>
          </div>

          <!-- Portfolio Items============================================= -->
          <div id="portfolio" class="portfolio row grid-container gutter-30">
            <article class="portfolio-item col-md-4 col-sm-6 col-12 pf-media pf-icons" v-for="recipe in filterBy(recipes, titleFilter, 'name', 'ingredients', 'tag')">

            <!-- <article class="portfolio-item col-sm-6 col-12 pf-media pf-icons" v-for="recipe in filterBy(recipes, titleFilter, 'name', 'ingredients', 'tag')"> -->
              <div class="grid-inner">
                <div class="portfolio-image">
                  <img v-bind:src="`${recipe.image}`" alt="Open Imagination">
                </div>
                <div class="portfolio-desc">
                  <span><i class="icon-line-clock"></i> {{ recipe.cooktime_conversion }}</span>
                  <h3><a v-bind:href="`/recipes/${recipe.id}`" class="color-underline stretched-link">{{ recipe.name }}</a></h3>
                </div>
              </div>
            </article>
          </div><!-- #portfolio end -->
        </div>
      </div>
    </section>

  </div>
</template>

<style>
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