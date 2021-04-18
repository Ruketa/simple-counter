<template>
  <div>
    <Label
      v-bind:class="{
        'base released': !clicked,
        'base pushed': clicked,
      }"
      @mousedown="mousedown"
      @mouseup="mouseup"
      @click="$emit('click')"
      :label="label"
    ></Label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Label from "../component/Label.vue";

@Component({
  components:{
    'Label' : Label
  }
})
export default class CountButton extends Vue {
  private label = "count";
  private clicked = false;

  mousedown(): void {
    this.clicked = true;
    this.$emit("mousedown")
  }

  mouseup(): void {
    this.clicked = false;
    this.$emit("mousedown")
  }
}
</script>

<style scoped>

.base {
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

.released {
  background: #42b983;
  color: #fcfcfc;
  border-bottom: 5px solid #32a973;
}

.pushed {
  background: #42b983;
  color: #666666;
  border-bottom: 2px solid #32a973;
}

</style>