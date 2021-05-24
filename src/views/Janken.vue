<template>
    <v-card>
      <v-card-title>
        <h1>Janken</h1>
      </v-card-title>
      <v-card-actions>
      <v-form>
        <v-btn text>ぐー</v-btn>
        <v-btn text>ちょき</v-btn>
        <v-btn text>ぱー</v-btn>
      </v-form>
      </v-card-actions>
    </v-card>
</template>


<script>
export default {
    data() {
        return {
            items: [],
        }
    },
};
</script>