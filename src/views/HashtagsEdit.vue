<template>
  <div>
    <div>
      <h2>Edit Page</h2>
      <div>
        Tag: <input type="text" v-model="hashtag.tag"><br>
      </div>
      <button v-on:click="updateHashtag(hashtag)">update</button>
      <button v-on:click="destroyHashtag(hashtag)">delete</button>
    </div>
    <router-link v-bind:to="`/hashtags/${hashtag.id}`">
      <button>cancel</button>
    </router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      hashtag: {},
      tag: "",
    };
  },

  created: function() {
    axios
      .get("/api/hashtags/" + this.$route.params.id)
      .then(response => {
        this.hashtag = response.data;
        console.log("show hashtag", this.hashtag);
      });
  },

  methods: {
    updateHashtag: function(hashtag) {
      var params = {
        tag: this.hashtag.tag,
      };
      axios
        .patch("/api/hashtags/" + this.hashtag.id, params)
        .then(response => {
          console.log("updated!", response.data);
          this.$router.push(`/hashtags/${hashtag.id}`);
        });
    },

    destroyHashtag: function(hashtag) {
      axios
        .delete("/api/hashtags/" + this.$route.params.id)
        .then(response => {
          console.log("deleted!", response.data);
          var index = this.hashtags.indexOf(hashtag);
          this.hashtags.splice(index, 1);
        });
          this.$router.push("/hashtags");
    },
  }
};
</script>