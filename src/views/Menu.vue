<template>
<v-card
    class="mx-auto"
    max-width="500"
    tile
  >
    <v-list flat>
      <v-subheader>MENU</v-subheader>
      <v-list-item-group
        v-model="item"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to=item.link
        >
          <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            item:1,
            items: [ { text:"Janken", link:"/janken"}],
        }
    },
};
</script>
