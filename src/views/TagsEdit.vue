<template>
  <div>
    <div>
      <h2>Edit Page</h2>
      <div>
        Tag: <input type="text" v-model="tag.name"><br>
      </div>
      <button v-on:click="updateTag(tag)">update</button>
      <button v-on:click="destroyTag(tag)">delete</button>
    </div>
    <router-link v-bind:to="`/tags/${tag.id}`">
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
      tag: {},
      name: "",
    };
  },

  created: function() {
    axios
      .get("/api/tags/" + this.$route.params.id)
      .then(response => {
        this.tag = response.data;
        console.log("show tag", this.tag);
      });
  },

  methods: {
    updateTag: function(tag) {
      var params = {
        name: this.tag.name,
      };
      axios
        .patch("/api/tags/" + this.tag.id, params)
        .then(response => {
          console.log("updated!", response.data);
          this.$router.push(`/tags/${tag.id}`);
        });
    },

    destroyTag: function(tag) {
      axios
        .delete("/api/tags/" + this.$route.params.id)
        .then(response => {
          console.log("deleted!", response.data);
          var index = this.tags.indexOf(tag);
          this.tags.splice(index, 1);
        });
          this.$router.push("/tags");
    },
  }
};
</script>