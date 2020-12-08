<template>
  <div class="home">
    <p>counet:{{ $store.state.count }}</p>
    <p>测试getters：{{$store.getters.doubleCount}}</p>
    <!-- <p>getterFn:{{ $store.getterFn }}</p> -->
    <el-button @click="add">数字增加</el-button>
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </p>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    // ...mapState("admin/try", ["count"]),
    // ...mapGetters("admin/try", ["getterFn"]),
  },
  methods: {
    add() {
      console.log(this.$store);
      this.$store.commit("add"); // 同步
      // this.$store.dispatch("addFn"); // 异步
    },
  },
};
</script>
