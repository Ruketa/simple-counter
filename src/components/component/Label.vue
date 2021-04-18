<template>
  <a
    v-on:mousedown="$emit('mousedown')"
    v-on:mouseup="$emit('mouseup')"
    v-on:click="$emit('click')"
    >{{ label }}</a
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Label extends Vue {
  @Prop() public label!: string;
}
</script>
