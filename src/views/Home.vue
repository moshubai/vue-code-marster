<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ messAge }}{{ ojb }}</p>
    <p v-for="item in list" :key="item">{{ item }}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <input v-model.lazy="msgtext" />
    <p>{{ msgtext }}</p>
    <button @click="btn()">按钮</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  // messAge = '12345';
  message = 'Hello!';
  @Provide() messAge = '12345';
  @Provide() list = [1, 2, 3, 5];
  @Provide() ojb = {};
  @Provide() toggle = 'yes';
  @Provide() msgtext = '';
  @Provide() flag = true;
  btn (): void {
    this.onClik([5555555555, 2])
  }

  mounted (): void {
    console.log('5')
  }

  onClik (val: Array<number>): void {
    console.log('点击事件', val, this.toggle)

    // ================
    // for (let i = 0; i < 10; i++) {
    //   setTimeout(function () { console.log(i) }, 100 * i)
    // }
    // =======================
    // function printLabel (labelledObj: { label: string }) {
    //   console.log(labelledObj.label)
    // }

    // const myObj = { size: 10, label: 'Size 10 Object' }
    // printLabel(myObj)

    // =================

    // interface SquareConfig {
    //   color?: string;
    //   width?: number;
    // }

    // function createSquare (
    //   config: SquareConfig
    // ): { color: string; area: number } {
    //   const newSquare = { color: 'white', area: 100 }
    //   if (config.color) {
    //     newSquare.color = config.color
    //   }
    //   if (config.width) {
    //     newSquare.area = config.width * config.width
    //   }
    //   return newSquare
    // }

    // const mySquare = createSquare({})
    // console.log(mySquare)

    // =====

    // interface ClockConstructor {
    //   new (hour: number, minute: number): ClockInterface;
    // }
    // interface ClockInterface {
    //   tick();
    // }

    // function createClock (
    //   ctor: ClockConstructor,
    //   hour: number,
    //   minute: number
    // ): ClockInterface {
    //   return new ctor(hour, minute)
    // }

    // class DigitalClock implements ClockInterface {
    //   constructor (h: number, m: number) {}

    //   tick () {
    //     console.log('beep beep')
    //   }
    // }

    // class AnalogClock implements ClockInterface {
    //   constructor (h: number, m: number) {}

    //   tick () {
    //     console.log('tick tock')
    //   }
    // }

    // const digital = createClock(DigitalClock, 12, 17)
    // const analog = createClock(AnalogClock, 7, 32)
    // console.log(digital, 'digital')
    // console.log(analog, 'analog')

    // ======

    // interface Counter {
    //   (start: number): string;
    //   interval: number;
    //   reset(): void;
    // }

    // function getCounter(): Counter {
    //   let counter = <Counter>function(start: number) {};
    //   counter.interval = 123;
    //   counter.reset = function() {};
    //   return counter;
    // };

    // let c = getCounter();
    // c(10);
    // c.reset();
    // c.interval = 5.0;
    // console.log(c(10));

    // ====
  }

  // @Watch('$route', { immediate: true })
  // private onRouteChange (route: Route) {
  //   console.log(route)
  //   // const query = route.query as Dictionary<string>
  //   // if (query) {
  //   //   this.redirect = query.redirect
  //   //   this.otherQuery = this.getOtherQuery(query)
  //   // }
  // }
}
</script>
