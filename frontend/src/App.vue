<script setup>
// import { ref, onMounted } from "vue";

// let greeting = ref('Hello, Vue!');
// let flaskGreeting = ref('');

// onMounted(async () => {
// 	await fetchData();
// })

// const fetchData = async () => {
// 	const gResponse = await fetch("http://localhost:5000/");
// 	const gObject = await gResponse.json();
// 	flaskGreeting.value = gObject.greeting;
// };

</script>

<template>
	<v-app>
		<router-view />
	</v-app>
</template>

<!-- <template>
	<div id="app">
		<h1> test </h1>
		<p>{{ greeting }}</p>
		<p>{{ flaskGreeting }}</p>
	</div>
</template> -->

<script>
export default {
	name: "LayoutView",
};
</script>
