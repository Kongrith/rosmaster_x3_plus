<script setup>
import { ref } from "vue";

let arm1 = ref(0);
let arm2 = ref(0);
let arm3 = ref(0);
let arm4 = ref(0);
let arm5 = ref(0);
let arm6 = ref(0);
</script>

<template>
	<v-container>
		<h2><span style="color:#5C5C5C;">Arm</span><span style="color:#139442">Controller</span></h2>

		<!-- arm1 -->
		<v-row>
			<span class="text-h6 font-weight-light" v-text="arm1"></span>
			<v-slider v-model="arm1" :max="1" :min="0" :step="0.01" thumb-label></v-slider>
		</v-row>

		<!-- arm2 -->
		<v-row>
			<span class="text-h6 font-weight-light" v-text="arm2"></span>
			<v-slider v-model="arm2" :max="1" :min="0" :step="0.01" thumb-label></v-slider>
		</v-row>

		<!-- arm3 -->
		<v-row>
			<span class="text-h6 font-weight-light" v-text="arm3"></span>
			<v-slider v-model="arm3" :max="1" :min="0" :step="0.01" thumb-label></v-slider>
		</v-row>

		<!-- arm4 -->
		<v-row>
			<span class="text-h6 font-weight-light" v-text="arm4"></span>
			<v-slider v-model="arm4" :max="1" :min="0" :step="0.01" thumb-label></v-slider>
		</v-row>

		<!-- arm5 -->
		<v-row>
			<span class="text-h6 font-weight-light" v-text="arm5"></span>
			<v-slider v-model="arm5" :max="1" :min="0" :step="0.01" thumb-label></v-slider>
		</v-row>

		<!-- arm6 -->
		<v-row>
			<span class="text-h6 font-weight-light" v-text="arm6"></span>
			<v-slider v-model="arm6" :max="1" :min="0" :step="0.01" thumb-label></v-slider>
		</v-row>
	</v-container>
</template>


<script>
export default {
	name: "ArmController",
};
</script>

<style scoped>

</style>
