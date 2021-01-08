<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
// import Vue from 'vue'
// export default Vue.extend({

// })
import { Vue, Component, Emit } from 'vue-property-decorator'
@Component
export default class MyComponent extends Vue {
  count = 0;
  @Emit()
  addToCount (n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount () {
    this.count = 0
  }

  @Emit()
  returnValue () {
    return 10
  }

  @Emit()
  onInputChange (e) {
    return e.target.value
  }

  @Emit()
  promise () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
}
</script>
