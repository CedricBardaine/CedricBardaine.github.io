<template>
  <v-app>
    <v-row no-gutters>
      <MenuDrawer v-if="!isSoSmall" />
      <MenuFooter v-else style="position: fixed ; height: 48px ; z-index: 99"/>
      <!-- <v-app-bar></v-app-bar> -->
    <v-col :style="isSoSmall ? 'padding-top: 48px' : ''">
      <v-main>
        <router-view/>
      </v-main>
    </v-col>
  </v-row>
  </v-app>
</template>

<script>
import MenuDrawer from '@/components/MenuDrawer.vue';
import MenuFooter from '@/components/MenuFooter.vue';

export default {
  components: {
    MenuDrawer,
    MenuFooter,
  },
  computed: {
    isSoSmall() {return this.$vuetify.breakpoint.width < 400 }
  },
};
</script>
