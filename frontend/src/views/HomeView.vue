<script setup>
import { ref, onMounted } from "vue";
import TeleController from "../components/TeleController.vue";
import ArmController from "../components/ArmController.vue"

let greeting = ref('Hello, Vue!');
let flaskGreeting = ref('');
let streamingPath = ref(`http://localhost:5000/streaming_camera`);

onMounted(async () => {
	await fetchData();
});

const fetchData = async () => {
	const gResponse = await fetch("http://localhost:5000/");
	const gObject = await gResponse.json();
	flaskGreeting.value = gObject.greeting;
};
</script>

<template>
	<v-container fluid>
		<!-- <v-row>
			<p>{{ greeting }}</p>
			<p>{{ flaskGreeting }}</p>
		</v-row> -->
		<!-- <v-divider></v-divider> -->
		<v-row>
			<v-col cols="2">
				<TeleController  />
				<ArmController class="mt-2" />
			</v-col>
			<v-col cols="10">
				<img :src="streamingPath" width="1280" height="720" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "HomeView",
};
</script>

<style scoped>

/* .small_frame {
	width: 1280;
	height: 720
} */
</style>
