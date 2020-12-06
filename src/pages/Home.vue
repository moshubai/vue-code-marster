<template>
  <div class="home">
    <p>counet:{{ count }}</p>
    <p>getterFn:{{ getterFn }}</p>
    <el-button @click="add">点击</el-button>
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
      this.$store.dispatch("admin/try/addFn")
    },
  },
};
</script>
