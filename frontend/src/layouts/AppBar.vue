<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

// output
defineEmits(["update:modelValue"]);
</script>


<template>
  <v-app-bar dense light elevation="1" app>
    <v-app-bar-nav-icon color="green-darken-4" @click.stop="(e) => $emit('update:modelValue', !props.modelValue)">
    </v-app-bar-nav-icon>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
