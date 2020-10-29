<template>

      <v-navigation-drawer
        v-model="drawer"
        color="primary"
        permanent
        :mini-variant="$vuetify.breakpoint.xs"
        dark
      >
      <!-- style="width: unset;" to make the width at the minimmum (default width is set by Vuetify)-->
        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="
              $router.history.current.name != item.goto ?
              $router.push({name: item.goto}) : 
              ''
            "
          >
            <v-list-item-icon>
              <v-icon >{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        // { title: '...',
        // icon: 'mdi-cat',
        // goto: 'Cat'
        // },
        {title: 'Accueil',
          icon: 'mdi-home',
          goto: 'Home',
        },
        {title: 'Contactez moi',
          icon: 'mdi-account-box',
          goto: 'Contact',
        },
        {title: 'Diplômes',
          icon: 'mdi-certificate',
          goto: 'Diplomas',
        },
        {title: 'Compétences',
          icon: 'mdi-head-snowflake ',
          goto: 'SkillsList',
        },
        {title: 'Mon GitHub',
          icon: 'mdi-github',
          goto: 'MyGitHub',
        },
      ],
    };
  },
};
</script>
