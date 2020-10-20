<template>
  <v-footer
  color="primary"
  dark
  width="100%"
  style="place-content: center;"
  >
    <v-card
    flat
    tile
    class="primary text-center"
    >
      <v-btn
      v-for="item in items"
      :key="item.title"
      @click="
      $router.history.current.name != item.goto ?
      $router.push({name: item.goto}) : 
      ''
      "
      class="mx-1"
      icon
      >
        <v-icon size="24px">
          {{ item.icon }}
        </v-icon>
      </v-btn>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data() {
      return {
        items: [
        // { title: '...',
        // icon: 'mdi-cat',
        // goto: 'Cat'
        // },
        {
          title: '',
          icon: 'mdi-home',
          goto: 'Home',
        },
        {
          title: 'Contactez moi',
          icon: 'mdi-account-box',
          goto: 'Contact',
        },
        {
          title: 'Diplômes',
          icon: 'mdi-certificate',
          goto: 'Diplomas',
        },
        {
          title: 'Compétences',
          icon: 'mdi-head-snowflake ',
          goto: 'SkillsList',
        },
        {
          title: 'Mon GitHub',
          icon: 'mdi-github',
          goto: 'MyGitHub',
        },
        ],
      };
    },
  };
</script>