<template>
  <div id="app">
    <!-- <div id="nav" v-if="isLoggedIn()">
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
    </div> -->

    <!-- Document Wrapper============================================= -->
    <div id="wrapper" class="clearfix">

      <!-- Header============================================= -->
      <header id="header" class="transparent-header" v-if="isLoggedIn()">
        <div id="header-wrap">
          <div class="container">
            <div class="header-row">

              <!-- Logo============================================= -->
              <div id="logo">
                <a href="index.html" class="standard-logo" data-dark-logo="images/logo-dark.png"><img src="images/logo.png" alt="Canvas Logo"></a>
                <a href="index.html" class="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="YUZU"></a>
              </div><!-- #logo end -->

              <div id="primary-menu-trigger">
                <svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
              </div>

              <!-- Primary Navigation
              ============================================= -->
              <nav class="primary-menu">
                <ul class="menu-container">

                  <li class="menu-item">
                    <a class="menu-link" href="/recipes">
                      <div>Recipes</div>
                    </a>
                  </li>

                  <li class="menu-item">
                    <div>Tags <i class="icon-angle-down1 d-none d-lg-inline-block"></i></div>
                    <ul class="sub-menu-container rounded-bottom">
                      <li class="menu-item" v-for="tag in tags">
                        <router-link class="menu-link" v-bind:to="`/tags/${tag.id}`">
                          <div>{{ tag.name }}</div>
                        </router-link>
                      </li>
                      <div class="dropdown-divider my-0"></div>
                      <li class="menu-item"><a class="menu-link" v-on:click="tagModal()"><div>+ tag</div></a></li>
                    </ul>
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

                  <li class="menu-item"><a class="menu-link" href="/users"><div>Profile</div></a></li>

                  <li class="menu-item"><a class="menu-link" href="/logout"><div>Logout</div></a></li>
                </ul>
              </nav><!-- #primary-menu end -->
            </div>
          </div>
        </div>
        <div class="header-wrap-clone"></div>
      </header><!-- #header end -->

    </div><!-- #wrapper end -->
    <router-view/>

    <!-- Footer============================================= -->
		<footer id="footer" class="bg-white border-0" v-if="isLoggedIn()">

			<div class="container">

				<!-- Footer Widgets
				============================================= -->
				<div class="footer-widgets-wrap">

					<div class="row">

						<div class="col-lg-2 col-md-2 col-6">
							<div class="widget">

								<h4 class="ls0 nott">Support</h4>

								<ul class="list-unstyled ml-0">
									<li class="mb-2"><a href="#" class="text-black-50">Home</a></li>
									<li class="mb-2"><a href="#" class="text-black-50">About</a></li>
									<li class="mb-2"><a href="#" class="text-black-50">FAQs</a></li>
									<li class="mb-2"><a href="#" class="text-black-50">Support</a></li>
								</ul>

							</div>
						</div>
						<div class="col-lg-2 col-md-2 col-6 mt-4 mt-md-0">
							<div class="widget">

								<h4 class="ls0 nott">Trending</h4>

								<ul class="list-unstyled ml-0">
									<li class="mb-2"><a href="#" class="text-black-50">Shop</a></li>
									<li class="mb-2"><a href="#" class="text-black-50">Portfolio</a></li>
									<li class="mb-2"><a href="#" class="text-black-50">Blog</a></li>
								</ul>

							</div>
						</div>
						<div class="col-lg-2 col-md-2 col-6 mt-4 mt-md-0">
							<div class="widget">

								<h4 class="ls0 nott">Features</h4>

								<ul class="list-unstyled ml-0">
									<li class="mb-2"><a href="#" class="text-black-50">Help Center</a></li>
									<li class="mb-2"><a href="#" class="text-black-50">Paid with Moblie</a></li>
									<li class="mb-2"><a href="#" class="text-black-50">Status</a></li>
									<li class="mb-2"><a href="#" class="text-black-50">Contact Support</a></li>
								</ul>

							</div>
						</div>

						<div class="col-lg-4 col-md-4">
							<div id="instagram" class="widget">

								<h4 class="ls0 nott">Instagram Photos</h4>
								<div id="instagram-photos" class="instagram-photos masonry-thumbs grid-4" data-user="blog.canvastemplate" data-count="8"></div>

							</div>
						</div>
					</div>

				</div>

			</div>

			<!-- Copyrights
			============================================= -->
			<div id="copyrights" class="bg-light">

				<div class="container">
					<div class="row justify-content-between align-items-center">
						<div class="col-sm-4 d-flex justify-content-sm-start mb-3 mb-sm-0 text-black-50">
							Copyrights &copy; 2020 All Rights Reserved by Canvas Inc.
						</div>
						<div class="col-sm-4 d-flex justify-content-sm-center mb-3 mb-sm-0">
							<a href="https://facebook.com/semicolonweb" target="_blank" class="social-icon si-small si-colored si-facebook" title="Facebook">
								<i class="icon-facebook"></i>
								<i class="icon-facebook"></i>
							</a>
							<a href="https://twitter.com/__semicolon" target="_blank" class="social-icon si-small si-colored si-twitter" title="Twitter">
								<i class="icon-twitter"></i>
								<i class="icon-twitter"></i>
							</a>
							<a href="https://www.youtube.com/semicolonweb" target="_blank" class="social-icon si-small si-colored si-youtube" title="youtube">
								<i class="icon-youtube"></i>
								<i class="icon-youtube"></i>
							</a>
							<a href="https://www.instagram.com/semicolonweb" target="_blank" class="social-icon si-small si-colored si-instagram" title="instagram">
								<i class="icon-instagram"></i>
								<i class="icon-instagram"></i>
							</a>
						</div>
						<div class="col-sm-4 d-flex justify-content-sm-end">
							<div class="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>
						</div>
					</div>
				</div>

			</div><!-- #copyrights end -->

		</footer><!-- #footer end -->
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