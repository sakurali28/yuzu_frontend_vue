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
      <header id="header" class="header" v-if="isLoggedIn()">
        <div id="header-wrap">
          <div class="container">
            <div class="header-row">

              <!-- Logo============================================= -->
              <div id="logo">
                <!-- <a href="index.html" class="standard-logo" data-dark-logo="images/logo-dark.png"><img src="images/logo.png" alt="YUZU"></a> -->
                <a href="/recipes" class="retina-logo" data-dark-logo="/images/logo-dark@2x.png"><img src="/images/logo@2x.png" alt="YUZU"></a>
              </div>

              <div id="primary-menu-trigger">
                <svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
              </div>

              <!-- Primary Navigation
              ============================================= -->
              <nav class="primary-menu">
                <ul class="menu-container" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">

                  <li class="menu-item">
                    <a class="menu-link" href="/recipes">
                      <div>Recipes</div>
                    </a>
                  </li>

                  <li class="menu-item">
                    <div class="menu-link">Tags <i class="icon-line-chevron-down"></i></div>
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
                        <h1>create a new tag</h1>
                        <input type="text" class="required sm-form-control border-form-control" placeholder="enter tag name" v-model="name">
                        <br>
                        <button v-on:click="createTag()" class="button button-circle button-border">create</button>
                        <button class="button button-circle button-border">close</button>
                      </form>
                    </dialog>
                  </li>

                  <li class="menu-item"><a class="menu-link" href="/bookmarks"><div><i class="icon-bookmark-empty"></i></div></a></li>
                  
                  <li class="menu-item"><a class="menu-link" href="/users"><div><i class="icon-line-head"></i></div></a></li>

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
		<footer id="footer" v-if="isLoggedIn()">
			<div class="container">

				<!-- Footer Widgets
				============================================= -->
				<div class="footer-widgets-wrap row col-mb-50">

					<!-- Footer Widget 3
					============================================= -->
					<div class="col-lg-2 col-sm-6">
						<div class="widget widget_links">
							<h4 class="mb-3 mb-sm-4 nott ls0">Management</h4>
							<ul>
								<li><a href="https://codex.wordpress.org/">About Us</a></li>
								<li><a href="https://wordpress.org/support/forum/requests-and-feedback">Careers</a></li>
								<li><a href="https://wordpress.org/extend/plugins/">Customers</a></li>
								<li><a href="https://wordpress.org/support/">Forums</a></li>
								<li><a href="https://wordpress.org/extend/themes/">Partners</a></li>
								<li><a href="https://wordpress.org/news/">Themes</a></li>
								<li><a href="https://planet.wordpress.org/">Pricing</a></li>
								<li><a href="https://planet.wordpress.org/">Reviews</a></li>
							</ul>
						</div>
					</div>

					<!-- Footer Widget 3
					============================================= -->
					<div class="col-lg-2 col-sm-6">
						<div class="widget widget_links">
							<h4 class="mb-3 mb-sm-4 nott ls0">Our Products</h4>
							<ul>
								<li><a href="https://codex.wordpress.org/">Real Estate</a></li>
								<li><a href="https://wordpress.org/support/forum/requests-and-feedback">Movers</a></li>
								<li><a href="https://wordpress.org/extend/plugins/">Stores</a></li>
								<li><a href="https://wordpress.org/support/">Landing</a></li>
								<li><a href="https://wordpress.org/extend/themes/">Seo</a></li>
								<li><a href="https://wordpress.org/news/">CoWorking</a></li>
							</ul>
						</div>
					</div>

					<!-- Footer Widget 3
					============================================= -->
					<div class="col-lg-2 col-sm-6">
						<div class="widget widget_links">
							<h4 class="mb-3 mb-sm-4 nott ls0">Support</h4>
							<ul>
								<li><a href="https://codex.wordpress.org/">Privacy</a></li>
								<li><a href="https://wordpress.org/support/forum/requests-and-feedback">Help Center</a></li>
								<li><a href="https://wordpress.org/extend/plugins/">Chat</a></li>
								<li><a href="https://wordpress.org/support/">Email Us</a></li>
							</ul>
							<div class="mt-3">
								<a href="https://facebook.com/semicolonweb" class="social-icon si-small si-dark si-facebook" title="Facebook" target="_blank">
									<i class="icon-facebook"></i>
									<i class="icon-facebook"></i>
								</a>

								<a href="https://instagram.com/semicolonweb" class="social-icon si-small si-dark si-instagram" title="instagram" target="_blank">
									<i class="icon-instagram"></i>
									<i class="icon-instagram"></i>
								</a>

								<a href="https://twitter.com/__semicolon" class="social-icon si-small si-dark si-twitter" title="twitter" target="_blank">
									<i class="icon-twitter"></i>
									<i class="icon-twitter"></i>
								</a>

								<a href="#" class="social-icon si-small si-dark si-wikipedia" title="Apple Pay">
									<i class="icon-apple-pay"></i>
									<i class="icon-apple-pay"></i>
								</a>
							</div>
						</div>
					</div>

					<!-- Footer Widget 2
						============================================= -->
					<div class="col-lg-3 col-sm-6">
						<div class="widget widget_links">
							<h4 class="mb-3 mb-sm-4 nott ls0">Tag Cloud</h4>
							<div class="tagcloud">
								<a href="#">general</a>
								<a href="#">videos</a>
								<a href="#">music</a>
								<a href="#">media</a>
								<a href="#">photography</a>
								<a href="#">parallax</a>
								<a href="#">ecommerce</a>
								<a href="#">terms</a>
								<a href="#">coupons</a>
								<a href="#">modern</a>
								<a href="#">magazine</a>
								<a href="#">bootstrap</a>
								<a href="#">news</a>
								<a href="#">blog</a>
								<a href="#">wordpress</a>
							</div>
						</div>
					</div>

					<!-- Footer Widget 4
					============================================= -->
					<div class="col-lg-3 col-sm-6">
						<div class="widget widget_links">
							<h4 class="mb-3 mb-sm-4 nott ls0">Download in Mobile</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae esse iure est, quam libero!</p>
							<a href="#" class="button button-dark  text-light btn-block text-center bg-dark nott ls0 button-rounded button-xlarge noleftmargin"><i class="icon-apple"></i>App Store</a>
							<a href="#" class="button button-dark  text-light btn-block text-center bg-dark nott ls0 button-rounded button-xlarge noleftmargin"><i class="icon-googleplay"></i>Google Play</a>
						</div>
					</div>

				</div>
			</div>

			<!-- Copyrights
			============================================= -->
			<div id="copyrights">
				<div class="container">

					<div class="row align-items-center justify-content-between col-mb-30">
						<div class="col-lg-auto text-center text-lg-left">
							Copyrights &copy; 2018 All Rights Reserved by Canvas Inc.<br>
							<div class="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>
						</div>

						<div class="col-lg-auto text-center text-lg-left">
							<div class="copyrights-menu copyright-links m-0">
								<a href="#">Home</a>/<a href="#">About</a>/<a href="#">Features</a>/<a href="#">Portfolio</a>/<a href="#">FAQs</a>/<a href="#">Contact</a>
							</div>
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