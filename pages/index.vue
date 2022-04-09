<template>
  <div id="app" class="">
    <div
      id="section-me"
      class="h-screen grid content-center bgMe"
    >
      <div class="justify-self-center">
        <div class="text-4xl lg:text-9xl text-center bg-gray-50 bg-opacity-25 hover:bg-opacity-50 ease-linear duration-100 px-8 py-4">
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
        <div
          class="
          basis-1/3

          text-2xl
          text-center
          text-gray-500

          rounded-full bg-white
          w-48 h-48
          p-4
          mx-6

          flex
          items-center
          justify-center
          "
        >
          <div class="hover:rotate-125">
            Explor'ea
          </div>
        </div>
        <a
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

          href="https://ad-astra.netlify.app"
          target="_blank"
        >
          <div class="hover:rotate-125">
            Ad Astra
            <br>
            <div
              class="
              flex
              items-center
              justify-center"
            >
              <!-- Generated with : https://www.tailwindtoolbox.com/icons -->
              <svg
                class="h-6 w-6 text-green-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />  <line x1="10" y1="14" x2="20" y2="4" />  <polyline points="15 4 20 4 20 9" /></svg>
            </div>
          </div>
        </a>
        <a
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

          href="https://cedricbardaine.github.io/online_progress_bars"
          target="_blank"
        >
          <div class="hover:rotate-125">
            Online Progress Bars
            <br>
            <div
              class="
              flex
              items-center
              justify-center"
            >
              <!-- Generated with : https://www.tailwindtoolbox.com/icons -->
              <svg
                class="h-6 w-6 text-green-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />  <line x1="10" y1="14" x2="20" y2="4" />  <polyline points="15 4 20 4 20 9" /></svg>
            </div>
          </div></a>
      </div>
    </div>

    <!--  -->

    <div
      id="section-my-skills"
      class="h-screen grid content-evenly"
    >
      <div
        class="
        text-4xl text-center
        justify-self-center
        text-blue-600
        p-4
        mx-6
      "
      >
        Mes skills
      </div>

      <div id="chart-bubbles" class="px-5 lg:px-40" style="" />
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
      ],

      mouseOver_bubblesChartDiv: false
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
    // Prevent smooth scroll if user overs the chart div.
    const bubblesChartDiv = document.getElementById('chart-bubbles')
    bubblesChartDiv.onmouseover = () => {
      this.mouseOver_bubblesChartDiv = true
    }
    bubblesChartDiv.onmouseout = () => {
      this.mouseOver_bubblesChartDiv = false
    }

    this.loadTimelineChart()

    this.loadBubblesChart([
      ['Assembleur',
        new Date((new Date(2018, 0, 15).getTime() + new Date(2020, 0, 15).getTime()) / 2),
        1,
        'etudes',
        2
      ],
      ['VueJS',
        new Date(2019, 9, 15),
        5,
        'pro',
        4 * 12 * 2
      ],
      ['React',
        new Date(2019, 2, 1),
        2,
        'perso',
        1
      ]])

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

    loadBubblesChart (skillsData = [[]]) {
      GoogleCharts.load(drawChart, {
        packages: ['corechart']
      })

      // un champs qui filtre quel techno, un combobox avec en items un [].map(des noms) et en fonctoin de la valeur du combobox on [].filter(== au nom) l' [] qui est affichées

      function drawChart () {
        const data = GoogleCharts.api.visualization.arrayToDataTable(
          [
            ['ID', 'Date', 'Maitrise', 'Context', 'Nombre de semaines passées dessus'],
            ...skillsData
          ])

        /*
        Niveaux de maitrise :
        1 : trop faible ou trop loin dans le temps pour encore parler de maitrise
        2 : minimale
        3 : bonnes connaissances thériques
        4 : bonnes connaissances et une ou plusieurs mise en pratique
        5 : maitrise
        */

        const options = {
          // title: 'Skills',
          hAxis: {
            title: '',
            format: 'MMM yyyy',
            ticks: [
              new Date(2017, 0),
              new Date(2018, 0),
              new Date(2019, 0),
              new Date(2020, 0)
            ],

            minorGridlines: {
              count: -1
            }

          },

          /* ,

          chartArea : {
          top : 0
          } */

          vAxis: {
            title: 'Maitrise',

            maxValue: 7,
            minValue: 0,
            minorGridlines: {
              count: 0
            },
            ticks: [
              1, 2, 3, 4, 5
            ]
          },
          bubble: {
            textStyle: {
              fontSize: 11
            }
          },

          explorer: {
            action: [' dragToZoom'],
            zoomDelta: 1.1,
            axis: 'horizontal',
            keepInBounds: true
          }

        }

        const chart = new GoogleCharts.api.visualization.BubbleChart(document.getElementById('chart-bubbles'))
        chart.draw(data, options)
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
          if (!this.mouseOver_bubblesChartDiv) { if (evt.deltaY > 0) { this.scrollToDiv(this.scrollDivsName[4]) } else if (evt.deltaY < 0) { this.scrollToDiv(this.scrollDivsName[2]) } }
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
