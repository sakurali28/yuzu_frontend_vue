<template>
  <div id="wrapper" class="clearfix">

    <section id="content" class="bg-light">
      <div class="content-wrap">
        <div class="container clearfix">
          <router-link v-bind:to="`/bookmarks/new`">
            <button class="button button-circle button-border">+ New Bookmark</button>
          </router-link>
          <div class="mx-auto center" style="max-width: 800px">
            <h3 class="nott font-weight-bold mb-5 display-4">Bookmarks</h3>
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
            <article class="portfolio-item col-md-4 col-sm-6 col-12 pf-media pf-icons" v-for="bookmark in filterBy(bookmarks, titleFilter, 'name')">

              <div class="grid-inner">
                <div class="portfolio-desc">
                  <h3><a v-bind:href="`${bookmark.url}`" class="color-underline">{{ bookmark.name }}</a></h3>

									<button v-on:click="editBookmark(bookmark)" class="button button-circle button-border button-small">edit</button>
									<dialog id="bookmark-details" class="mx-auto center">
										<form method="dialog">
											<h1>edit bookmark</h1>
											<input type="text" v-model="bookmark.name" class="required sm-form-control border-form-control" placeholder="name">
											<input type="text" v-model="bookmark.url" class="required sm-form-control border-form-control" placeholder="url">
											<br>
											<button v-on:click="updateBookmark(bookmark)" class="button button-circle button-border button-small">update</button>
											<button v-on:click="destroyBookmark(bookmark)" class="button button-circle button-border button-small">delete</button>
											<br>
											<button class="button button-circle button-border button-small">close</button>
										</form>
									</dialog>

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
      bookmarks: [],
      name: "",
      url: "",
      titleFilter: "",
      errors: [],
    };
  },

  created: function() {
    axios
      .get("/api/bookmarks")
      .then(response => {
        this.bookmarks = response.data;
        console.log("All Bookmarks", this.bookmarks);
      });
  },

  methods: {
    editBookmark: function(bookmark) {
      console.log(bookmark);
      this.bookmark = bookmark;
      document.querySelector("#bookmark-details").showModal();
    },

    updateBookmark: function(bookmark) {
      var params = {
        name: this.bookmark.name,
        url: this.bookmark.url,
      };
      axios
        .patch("/api/bookmarks/" + this.bookmark.id, params)
        .then(response => {
          console.log("updated!", response.data);
        });
    },

    destroyBookmark: function(bookmark) {
      axios
        .delete("/api/bookmarks/" + this.$route.params.id)
        .then(response => {
          console.log("deleted!", response.data);
          this.$router.push("/recipes");
        });
    },
  },
};
</script>