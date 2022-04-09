<template>
  <div id="app" class="">
    <div
      id="section-me"
      class="h-screen grid content-center bgMe"
    >
      <div class="justify-self-center">
        <div class="text-4xl lg:text-9xl text-center bg-gray-50 bg-opacity-50 hover:bg-opacity-75 ease-linear duration-100 px-8 py-4">
          Cédric
          <br>
          BARDAINE
        </div>
      </div>
    </div>

    <!--  -->

    <div
      id="section-myself"
      class="h-screen  grid content-evenly "
    >
      <div id="centered-presentation-text" class="">
        <div class="grid justify-items-center">
          <div
            class="
            text-lg text-center
            justify-self-center
            bg-gradient-to-r from-blue-600 to-green-400 rounded-md
            text-white
            p-4
            mx-6
          "
          >
            Salut ! Moi c'est Cédric,
            je suis développeur Fullstack au sein d'une start-up
            <br>
            dont l'expertise est le traitement et la mise en valeur des données satellite ! 🚀
          </div>
        </div>

        <br>
      </div>

      <div>
        <div class="justify-self-center">
          <div class="grid place-items-center">
            Résumé de mon parcours post-bac

            <br>
            <br>

            <div class="text-left justify-self-center w-auto border-t-4 border-b-4 pl-2 border-green-400 py-1">
              <span class="text-blue-600 font-extrabold text-xl">5</span> années d'études
              <br>
              <span class="text-blue-600 font-extrabold text-xl">4</span>  diplômes et
              <br>
              <span class="text-blue-600 font-extrabold text-xl">4</span>  années d'alternance au sein de <span class="text-blue-600 font-extrabold text-xl">3</span>  entreprises différentes.
            </div>
          </div>

          <br>
          <br>
        </div>

        <div id="chart-timeline" class="px-5 lg:px-40" style="" />
      </div>

      <div id="centered-skills-text" class="">
        <div class="grid justify-items-center">
          <div
            class="
            text-lg text-center
            justify-self-center
            bg-gradient-to-r from-blue-600 to-green-400 rounded-md
            text-white
            p-4
            mx-6
          "
          >
            J'ai donc un profil de développeur web fullstack, à l'aise sur la plupart des technos de la toile 😎
            <br>
            Mais j'ai aussi des compétences en mobile avec notamment le framework de développement hybride Flutter
            <br>
            ainsi qu'en POO 🤘
            <br>
            (Vous vous demandez quels langages ou frameworks je maitrise ? la réponse plus bas...)
          </div>
        </div>

        <br>
      </div>
    </div>

    <!--  -->

    <div
      id="section-my-projects"
      class="h-screen grid content-evenly bg-blue-600"
    >
      <div id="" class="text-center text-lg px-10" />

      <div
        class="
        text-4xl text-center
        justify-self-center
        text-white
        p-4
        mx-6
      "
      >
        Quelques projets notables
      </div>

      <div class="flex flex-row place-content-around flex-wrap">
        <button
          class="
          basis-1/3

          text-2xl
          text-center
          text-green-600

          rounded-full bg-white
          w-48 h-48
          p-4
          mx-6

          transform transition duration-500 hover:scale-125

          flex
          items-center
          justify-center
          "
        >
          <div class="hover:rotate-125">
            Explor'ea
          </div>
        </button>
        <button
          class="
          basis-1/3

          text-2xl
          text-center
          text-green-600

          rounded-full bg-white
          w-48 h-48
          p-4
          mx-6

          transform transition duration-500 hover:scale-125

          flex
          items-center
          justify-center
          "
        >
          <div class="hover:rotate-125">
            Ad Astra
          </div>
        </button>
        <button
          class="
          basis-1/3

          text-2xl
          text-center
          text-green-600

          rounded-full bg-white
          w-48 h-48
          p-4
          mx-6

          transform transition duration-500 hover:scale-125

          flex
          items-center
          justify-center
          "
        >
          <div class="hover:rotate-125">
            Online Progress Bars
          </div>
        </button>
      </div>
    </div>

    <!--  -->

    <div
      id="section-my-skills"
      class="h-screen grid content-evenly"
    >
      <div class="" />
    </div>

    <!--  -->

    <div
      id="section-my-passions"
      class="h-screen grid content-evenly bg-blue-600"
    >
      <div class="" />
    </div>

    <!--  -->

    <div
      id="section-my-links"
      class="h-screen grid content-evenly bg-green-400"
    >
      <div class="" />
    </div>
  </div>
</template>

<script>

import { GoogleCharts } from 'google-charts'

export default {
  name: 'IndexPage',

  data () {
    return {
      lastKnownScrollYPosition: 0,
      currentDiv: 0,
      scrollDivsName: [
        'section-me',
        'section-myself',
        'section-my-projects',
        'section-my-skills',
        'section-my-passions',
        'section-my-links'
      ]
    }
  },

  //

  //

  head () {
    return {
      // script: [
      //   {
      //     src: 'https://www.gstatic.com/charts/loader.js'
      //   }
      // ],
      title: 'Cédric BARDAINE'
      // meta: [
      //   // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      //   // {
      //   //   hid: 'description',
      //   //   name: 'description',
      //   //   content: 'My custom description'
      //   // },
      //   {
      //     hid: 'description',
      //     name: 'viewport',
      //     content: 'width=device-width, initial-scale=1.0'
      //   }

      // ]
    }
  },

  //

  //

  mounted () {
    this.loadTimelineChart()

    this.addScrollEventHandlers()
  },

  //

  //

  methods: {
    loadPieExampleChart () {
      // Load the charts library with a callback
      GoogleCharts.load(drawChart)

      function drawChart () {
      // Standard google charts functionality is available as GoogleCharts.api after load
        const data = GoogleCharts.api.visualization.arrayToDataTable([
          ['Chart thing', 'Chart amount'],
          ['Lorem ipsum', 60],
          ['Dolor sit', 22],
          ['Sit amet', 18]
        ])
        const charttest = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'))
        charttest.draw(data)
      }
    },

    //

    loadTimelineChart () {
      GoogleCharts.load(drawChart, { packages: ['timeline'] })
      // GoogleCharts.api.charts.setOnLoadCallback(drawChart)
      function drawChart () {
        const container = document.getElementById('chart-timeline')
        const chart = new GoogleCharts.api.visualization.Timeline(container)
        const dataTable = new GoogleCharts.api.visualization.DataTable()

        dataTable.addColumn({ type: 'string', id: 'School' })
        dataTable.addColumn({ type: 'string', id: 'Name' })
        dataTable.addColumn({ type: 'date', id: 'Start' })
        dataTable.addColumn({ type: 'date', id: 'End' })

        dataTable.addRows([
          ['Entreprise', 'Quadisweb', new Date(2018, 8), new Date(2019, 7)],
          ['Entreprise', 'Cegid', new Date(2019, 8), new Date(2020, 5)],
          ['Entreprise', 'KERMAP', new Date(2020, 7), new Date(2022, 7)],

          ['Diplôme', 'Bac S', new Date(2016, 8), new Date(2017, 5)],
          ['Diplôme', 'DUT', new Date(2017, 8), new Date(2019, 5)],
          ['Diplôme', 'Bachelor développeur web  +  Titre professionnel Concepteur Développeur d\'Application', new Date(2019, 8), new Date(2020, 5)],
          ['Diplôme', 'Master développeur fullstack', new Date(2020, 8), new Date(2022, 5)]
        ])

        chart.draw(dataTable, {
          colors: ['#2563eb', '#34d399'],
          timeline: { colorByRowLabel: true }
        })
      }
    },

    //

    scrollToDiv (divNameId) {
      const topOffset = document.getElementById(divNameId).getBoundingClientRect().top

      window.scrollBy({
        top: topOffset,
        left: 0,
        behavior: 'smooth'
      })
    },

    //

    addScrollEventHandlers () {
      document.getElementById('section-me')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (evt.deltaY > 0) { this.scrollToDiv(this.scrollDivsName[1]) } else if (evt.deltaY < 0) { this.scrollToDiv(this.scrollDivsName[0]) }
        })

      document.getElementById('section-myself')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (evt.deltaY > 0) { this.scrollToDiv(this.scrollDivsName[2]) } else if (evt.deltaY < 0) { this.scrollToDiv(this.scrollDivsName[0]) }
        })

      document.getElementById('section-my-projects')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (evt.deltaY > 0) { this.scrollToDiv(this.scrollDivsName[3]) } else if (evt.deltaY < 0) { this.scrollToDiv(this.scrollDivsName[1]) }
        })

      document.getElementById('section-my-skills')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (evt.deltaY > 0) { this.scrollToDiv(this.scrollDivsName[4]) } else if (evt.deltaY < 0) { this.scrollToDiv(this.scrollDivsName[2]) }
        })

      document.getElementById('section-my-passions')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (evt.deltaY > 0) { this.scrollToDiv(this.scrollDivsName[5]) } else if (evt.deltaY < 0) { this.scrollToDiv(this.scrollDivsName[3]) }
        })

      document.getElementById('section-my-links')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (evt.deltaY > 0) { this.scrollToDiv(this.scrollDivsName[5]) } else if (evt.deltaY < 0) { this.scrollToDiv(this.scrollDivsName[4]) }
        })
    }

  }
}

</script>
