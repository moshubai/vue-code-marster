<template>
  <div class="home">
    <p>counet:{{ count }}</p>
    <p>getterFn:{{ getterFn }}</p>
    <el-button @click="add">数字增加</el-button>
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState("admin/try", ["count"]),
    ...mapGetters("admin/try", ["getterFn"]),
  },
  methods: {
    add() {
      // this.$store.commit("admin/try/add");
      this.$store.dispatch("admin/try/addFn");
    },
  },
};
</script>
