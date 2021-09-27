<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import {
  NumberGetterTypes,
  NumberMutationTypes
} from "../store/modules/numbersModule";

export default defineComponent({
  props: {
    msg: {
      type: String
    }
  },
  setup() {
    // Getting the store
    // Getting the state
    // Computed() will make sure the data is reactive.
    const store = useStore();
    const count = computed(() => store.state.numbersModule);
    const isZero = computed(() => store.getters[NumberGetterTypes.IS_ZERO]);

    // Mutation functions
    const increaseNumber = () => {
      store.commit(NumberMutationTypes.INCREASE_NUMBER);
    };

    const decreaseNumber = () => {
      store.commit(NumberMutationTypes.DECREASE_NUMBER);
    };

    const setNumber = (number: number) => {
      store.commit(NumberMutationTypes.SET_NUMBER, number);
    };

    return { count, increaseNumber, decreaseNumber, setNumber, isZero };
  }
});
</script>

<template>
  <div class="min-h-screen bg-green-300 p-8">
    <h1 class="font-bold text-4xl mb-12">Vue3 Typescript Boilerplate</h1>

    <h1 class="font-bold text-4xl">Vuex example</h1>

    <h1 class="font-medium text-4xl mb-4">count: {{ count.count }}</h1>
    <div class="flex space-x-4">
      <button
        class="bg-white px-2 py-1 rounded-md shadow-sm"
        @click="increaseNumber"
      >
        Increase
      </button>
      <button
        class="bg-white px-2 py-1 rounded-md shadow-sm"
        @click="decreaseNumber"
      >
        Decrease
      </button>
      <button
        class="bg-white px-2 py-1 rounded-md shadow-sm"
        @click="setNumber(10)"
      >
        Set to 10
      </button>
    </div>
    <div class="flex space-x-4 mt-8">
      <h2 class="font-medium">IsZero?</h2>

      <!-- Change the color if a method/state is true/false -->
      <span
        class="py-1 px-3 rounded-md bg-opacity-40"
        :class="{ 'bg-red-500': !isZero, 'bg-blue-500': isZero }"
        >{{ isZero }}</span
      >
    </div>
  </div>
</template>
