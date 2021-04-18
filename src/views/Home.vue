<template>
  <v-container fluid>
    <div class="home">
      <v-row justify="center" class="text-center">
        <v-col cols="12">
          <CounterLabel :label="counter" />
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12" xs="10," sm="6" md="6" lg="6" xl="6">
          <CountButton @click="countup" />
        </v-col>
        <v-col cols="12" xs="10," sm="6" md="6" lg="6" xl="6">
          <ResetButton @click="reset" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CountButton from "../components/composition/CountButton.vue";
import ResetButton from "../components/composition/ResetButton.vue";
import CounterLabel from "../components/composition/CounterLabel.vue";

// @ is an alias to /src
@Component({
  components: {
    CountButton: CountButton,
    ResetButton: ResetButton,
    CounterLabel: CounterLabel,
  },
})
export default class Home extends Vue {
  private counter = 0;

  countup(): void {
    this.counter++;
  }

  reset(): void {
    this.counter = 0;
  }
}
</script>

<style scoped>
div.button-area {
  margin-top: 5px;
}
</style>
