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
    <section id="content" class="bg-light">
      <div class="content-wrap">

				<div class="section mt-2 bg-transparent">
					<div class="container">
						<div class="row">
							<div class="col-md-8 offset-md-2 center">
                <br>
								<h2 class="text-title-light text-dark mb-5 ls1 text-uppercase">Welcome Back, Chef</h2>
                <br>
								<p style="font-size: 17px; color: #777">Become an active participant in who you are. Gain a voice in choosing positive actions that will guide you towards the highest level of wellness for yourself. Rather than momentary changes, but a small and consistent habit building for the longevity of your health and happiness.<br><br>so,<br>what's on the menu today?</p>
							</div>
						</div>
					</div>
          <br><br>
          <div class="mx-auto center">
            <router-link v-bind:to="`/recipes/new`">
              <button class="button button-circle button-border">+ New Recipe</button>
            </router-link>
          </div>
          <br><br><br>
				</div>
        
        <!-- current -->
        <div class="container">
          <div class="mx-auto center">
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
					<!-- Hero Area
					============================================= -->
					<div class="row border-between">
						<div class="col-lg-10 mb-5 mb-lg-0">
              <!-- Portfolio Items============================================= -->
              <div id="portfolio" class="portfolio row grid-container gutter-30">
                <article class="portfolio-item col-md-4 col-sm-6 col-12 pf-media pf-icons" v-for="recipe in filterBy(recipes, titleFilter, 'name', 'ingredients', 'tag')">

                  <div class="grid-inner">
                    <div v-if="recipe.image" class="portfolio-image">
                      <img v-bind:src="`${recipe.image}`">
                    </div>

                    <div class="portfolio-desc">
                      <span><i class="icon-line-clock"></i> {{ recipe.cooktime_conversion }}</span>
                      <h3><a v-bind:href="`/recipes/${recipe.id}`" class="color-underline stretched-link">{{ recipe.name }}</a></h3>
                    </div>
                    
                  </div>
                </article>
              </div><!-- #portfolio end -->
						</div>

						<div class="col-lg-2">
              <!-- <br> -->
							<div class="row posts-md col-mb-30">
								<article class="entry col-12">
									<div class="grid-inner row gutter-20">
										<div class="col-md-8">
											<div class="widget widget_links title-xs">
                        <h4>Tags</h4>
                        <ul v-for="tag in tags">
                          <li>
                            <a v-bind:href="`/tags/${tag.id}`">{{ tag.name }}</a>
                          </li>
                        </ul>
											</div>
										</div>
									</div>
								</article>
							</div>

						</div>
					</div> <!-- Hero Area End -->
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
      tags: [],
    };
  },

  created: function() {
    this.indexRecipes();

    axios
      .get("/api/tags")
      .then(response => {
        console.log("tag index", response);
        this.tags = response.data;
      });
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