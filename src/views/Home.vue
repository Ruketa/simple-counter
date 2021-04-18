<template>
  <v-container fluid>
    <div class="home">
      <v-row justify="center" class="text-center">
        <v-col cols="12">
          <div>
            <a class="counter-label">{{ counter }}</a>
          </div>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12" xs="10," sm="6" md="6" lg="6" xl="6">
          <CountButton 
            @click="countup"
          />
        </v-col>
        <v-col cols="12" xs="10," sm="6" md="6" lg="6" xl="6">
          <a
            class="reset"
            v-bind:class="{
              'base rb-released': !r_clicked,
              'base rb-pushed': r_clicked,
            }"
            v-on:mousedown="mousedown('reset')"
            v-on:mouseup="mouseup('reset')"
            v-on:click="reset"
            >reset</a
          >
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CountButton from "../components/composition/CountButton.vue"

// @ is an alias to /src
@Component({
  components:{
  'CountButton' : CountButton 
  }
})
export default class Home extends Vue {
  private counter = 0;
  private clicked = false;
  private r_clicked = false;

  check():void{
    console.log("check")
  }

  mousedown(target: string): void {
    if (target === "countup") this.clicked = true;
    else this.r_clicked = true;
  }

  mouseup(target: string): void {
    if (target === "countup") this.clicked = false;
    else this.r_clicked = false;
  }

  countup(): void {
    this.counter++;
  }

  reset(): void {
    this.counter = 0;
  }
}
</script>

<style scoped>
a.base {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  border-radius: 100vh;
}

a.rb-released {
  background: #fcfcfc;
  color: #666666;
  border-bottom: 5px solid #444444;
}

a.rb-pushed {
  background: #fcfcfc;
  color: #f0f0f0;
  border-bottom: 2px solid #444444;
}

a.counter-label {
  color: #42b983;
  font-size: 10rem;
}

div.button-area {
  margin-top: 5px;
}
</style>
