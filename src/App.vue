
<template>
<v-app>
    <v-app-bar app color="indigo" dark>
        <router-link to="/" tag="div">
          <v-btn text color="white">Mneu</v-btn>
        </router-link>
    </v-app-bar>  
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
