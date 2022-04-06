<template>
  <div class="app">
    <div
      id="section-me"
      class="h-screen grid content-center bgMe"
    >
      <div class="justify-self-center">
        <div class="text-9xl text-center bg-gray-50 bg-opacity-50 hover:bg-opacity-75 ease-linear duration-100 px-8 py-4">
          Cédric
          <br>
          BARDAINE
        </div>
      </div>
    </div>
    <div
      id="section-myself"
      class="h-screen grid content-center"
    >
      <div class="justify-self-center">
        Salut ! Moi c'est Cédric,
        je suis développeur Fullstack au sein d'une start-up dont l'expertise est le traitement et la mise en valeur des données sattelitte.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  head () {
    return {
      script: [
        {
          src: 'https://www.gstatic.com/charts/loader.js'
        }
      ]
      // title: this.title,
      // meta: [
      //   // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: 'My custom description'
      //   }

      // ]
    }
  },

  mounted () {}
}

</script>

<style>
.bgMe {
  background: url("~/assets/moi.jpg");
  background-position: center;
  background-size: cover;
}
</style>
