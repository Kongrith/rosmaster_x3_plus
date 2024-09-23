<script setup>
import { reactive } from "vue";
import AppBar from "./AppBar.vue"
import SideBar from "./SideBar.vue"

const state = reactive({ showSidebar: false });
</script>

<template>
	<SideBar :drawer="state.showSidebar" appVersion="1.0" />
  	<AppBar v-model="state.showSidebar" />
	<v-main>
		<v-container fluid>
			<router-view />
		</v-container>
	</v-main>
</template>

<script>
export default {
	name: "LayoutView",
};
</script>
