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
import { Component, Vue } from "vue-property-decorator";
import Label from "../component/Label.vue";

@Component({
  components: {
    Label: Label,
  },
})
export default class ResetButton extends Vue {
  private label = "reset";
  private clicked = false;

  mousedown(): void {
    this.clicked = true;
    this.$emit("mousedown");
  }

  mouseup(): void {
    this.clicked = false;
    this.$emit("mouseup");
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
  background: #fcfcfc;
  color: #666666;
  border-bottom: 5px solid #444444;
}

.pushed {
  background: #fcfcfc;
  color: #f0f0f0;
  border-bottom: 2px solid #444444;
}
</style>
