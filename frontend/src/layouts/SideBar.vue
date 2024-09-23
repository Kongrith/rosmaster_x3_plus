<script setup>
import { ref, toRef } from "vue";

const props = defineProps(["drawer", "appVersion"]);
const status = toRef(props, "drawer"); // Pass Incomming Prop to Ref.
const logoutDialog = ref(false);

// Main menu
const menu = ref([
  {
    id: 1,
    icon: "mdi-home",
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    icon: "mdi-controller",
    title: "Sensor & Control",
    link: "/control",
  },
//   {
//     id: 4,
//     icon: "mdi-trending-up",
//     title: "Price Forecasting",
//     link: "/priceforecasting",
//   },
//   {
//     id: 5,
//     icon: "mdi-robot",
//     title: "Recommendation",
//     link: "/recommendation",
//   },
//   {
//     id: 6,
//     icon: "mdi-cctv",
//     title: "AI camera",
//     link: "/aicam",
//   },
]);

const Settings = ref([
  ["IoT Devices", "mdi-tablet-cellphone", "/settings/iot"],
  ["Plants", "mdi-sprout", "/settings/plants"],
  ["User Management", "mdi-family-tree", "/settings/users"],
]);

const logout = () => {
  console.log("logout");
  window.localStorage.clear(); //try this to clear all local storage
  logoutDialog.value = false;
  window.location.href = "/login";
};
</script>

<template>
  <v-navigation-drawer
    :modelValue="status"
    color="green-darken-3"
    :width="220"
    app
  >
    <v-list-item dense>
      <v-list-item-content>
        <v-list-item-title class="white--text text-h6 font-weight-regular">
          <v-toolbar-title>Autonomous Robot</v-toolbar-title>
        </v-list-item-title>
        <v-list-item-subtitle class="white--text font-weight-thin">
          Version: {{ appVersion }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <!-- Main Menu -->
        <v-list-item v-for="item in menu" :key="item.id" :to="item.link"
          ><v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title></v-list-item
        >

        <!-- Settings -->
        <!-- <v-list-group value="Settings">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props"
              ><v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon
              ><v-list-item-title>Settings</v-list-item-title></v-list-item
            >
          </template>
          <v-list-item
            v-for="([title, icon, link], i) in Settings"
            :key="i"
            :value="title"
            :to="link"
            ><v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item>
        </v-list-group> -->

        <!-- LOG OUT -->
        <!-- <v-list-item @click.stop="logoutDialog = true">
          <v-dialog v-model="logoutDialog" width="600" hide-overlay>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon><v-icon>mdi-logout</v-icon> </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </template>
            <v-card>
              <v-card-title class="text-h5"> Confirm logout </v-card-title>
              <v-card-text> Do you want to logout ? </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="green" @click="logout()"> Logout </v-btn>
                <v-btn text color="red" @click="logoutDialog = false">
                  Cancle
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item> -->
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideBar",
};
</script>
