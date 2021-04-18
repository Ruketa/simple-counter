<template>
  <div>
    <Label class="counter-label" :label="label"></Label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Label from "../component/Label.vue";

@Component({
  components: {
    Label: Label,
  },
})
export default class CounterLabel extends Vue {
  @Prop() label!: number;
}
</script>

<style scoped>
.counter-label {
  color: #42b983;
  font-size: 10rem;
}
</style>
