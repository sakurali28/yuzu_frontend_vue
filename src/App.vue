<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">YUZU</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="/recipes">Recipes</a>
            <a class="nav-link" href="/tags">Tags</a>
            <a class="nav-link" href="/recipes/new">Create a New Recipe (+)</a>
            <a class="nav-link" href="/tags/new">Create a New Tag (+)</a>
            <a class="nav-link" href="/logout">Logout</a>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
