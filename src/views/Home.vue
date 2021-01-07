<template>
  <!-- <div class="recipes">
    <h1>YUZU</h1>
    <h2>Let's get started, shall we?</h2>
    <div class="buttons">
      <router-link v-bind:to="`/signup`">
        <button type="button" class="btn btn-outline-dark btn-lg btn-block" >Signup</button>
      </router-link>
      <br>
      <router-link v-bind:to="`/login`">
        <button type="button" class="btn btn-outline-dark btn-lg btn-block">Login</button>
      </router-link>
    </div>

  </div> -->

  <!-- Document Wrapper
	============================================= -->
	<div id="wrapper" class="clearfix">

		<!-- Slider
		============================================= -->
		<section id="slider" class="slider-element min-vh-100 include-header" style="height: 950px">

			<div class="w-100 h-100 position-absolute" style="background: url('one-page/images/page/parallax/parallax-1.png') center center no-repeat; background-size: cover;" data-0-top="top: 0px" data-900="top: 300px"></div>

			<div class="w-100 h-100 position-absolute" style="background: url('one-page/images/page/parallax/parallax-2.png') center center no-repeat; background-size: cover; z-index: 8" data-0="top:0px" data-900="top: 140px"></div>

			<div class="w-100 h-100 position-absolute" style="background: url('one-page/images/page/parallax/parallax-3.png') center bottom no-repeat; background-size: cover; z-index: 9"></div>

			<div class="container">
				<div class="vertical-middle">
					<h2 class="slider-text text-uppercase text-right font-weight-bolder" data-0="margin-top: -300px; opacity: 1" data-450="margin-top: 0px; opacity: .4">YUZU</h2>
				</div>
			</div>

		</section><!-- #slider end -->

		<!-- Content
		============================================= -->
		<section id="content">
			<div class="content-wrap py-0">
				<div id="section-about" class="center page-section pt-0 secondary-color">
					<div class="container clearfix">
            <div class="buttons">
              <router-link v-bind:to="`/signup`">
                <button type="button" class="btn btn-outline-light btn-lg btn-block">Signup</button>
              </router-link>
              <br>
              <router-link v-bind:to="`/login`">
                <button type="button" class="btn btn-outline-light btn-lg btn-block">Login</button>
              </router-link>
            </div>
					</div>
				</div>

        <div class="section parallax m-0 secondary-color">
        </div>

			</div>
		</section><!-- #content end -->

	</div><!-- #wrapper end -->

</template>

<style>
  .slider-text {
    font-size: 6rem;
    font-family: 'Nunito', sans-serif;
    line-height: 1;
  }

  @media (max-width: 991.98px) {
    .slider-text {
      font-size: 7vw;
    }
  }

  .secondary-color { background: rgb(7, 7, 7) !important; }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      
    };
  },

  created: function() {
  },

  methods: {
    
  },
};
</script>