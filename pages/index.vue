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
      <div>
        <div class="flex flex-row place-content-center  my-2">
          <button
            class="mx-2"
            :class="skillsType == 'frameworks' ? 'btn' : 'btn-deactivated'"
            @click="skillsType = 'frameworks' ; loadBubblesChart()"
          >
            Frameworks
          </button>
          <button
            class="mx-2"
            :class="skillsType == 'languages' ? 'btn' : 'btn-deactivated'"
            @click="skillsType = 'languages' ; loadBubblesChart()"
          >
            Langages
          </button>
        </div>

        <div class="flex flex-row place-content-center my-2 ">
          <div class="w-48">
            <input
              id="inline-full-name"
              v-model="skillsFilter"
              class="bg-gray-200 appearance-none
            border-2 border-gray-200 rounded
            w-full py-2 px-4 text-gray-700 leading-tight
            focus:outline-none focus:bg-white focus:border-green-600"
              type="text"
              placeholder="Rechercher..."
            >
          </div>
        </div>

        <div id="chart-bubbles" class="px-5 lg:px-40 my-2" style="height: 40vh" />
      </div>
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

      mouseOver_bubblesChartDiv: false,

      skillsType: 'frameworks', // || languages
      skillsFilter: null,
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

  computed: {
    skillsDisplayed () {
      /*
        Niveaux de maitrise :
        1 : trop faible ou trop loin dans le temps pour encore parler de maitrise
        2 : minimale
        3 : bonnes connaissances théoriques et/ou petites mise(s) en pratique
        4 : bonnes connaissances et une ou plusieurs bonnes mise(s) en pratique
        5 : maitrise
        */

      switch (this.skillsType) {
        case 'frameworks':
          return [

            ['VueJS',
              new Date(),
              5, 'pro',
              this.weeksBetween2Dates(new Date(), new Date(2020, 7))
            ],

            ['Ajax',
              new Date(2018, 0),
              2, 'etudes',
              4 * 1
            ],
            ['Android Studio',
              new Date(2019, 4),
              4, 'etudes',
              4 * 6
            ],
            ['Angular',
              new Date(2020, 4),
              4, 'etudes',
              4 * 6
            ],
            ['AngularJS',
              new Date(2019, 4),
              3, 'etudes',
              4 * 2
            ],
            ['Cordova',
              new Date(2019, 4),
              2, 'etudes',
              4 * 1
            ],
            ['Ant',
              new Date(2019, 0),
              1, 'etudes',
              4 * 1
            ],
            ['Bootstrap',
              new Date(2019, 10),
              3, 'etudes',
              2 + 1 + 1 + 1
            ],
            ['ChartJS',
              new Date(2019, 5),
              2 + 0.1, 'perso',
              3
            ],
            ['C3js',
              new Date(new Date().getFullYear(), new Date().getMonth() - 3),
              5, 'pro',
              1 + 2 + 1 + 1 + 1
            ],
            ['Docker',
              new Date(new Date().getFullYear(), new Date().getMonth() - 1),
              3, 'pro',
              0
            ],
            ['Firebase',
              new Date(),
              4, 'etudes',
              this.weeksBetween2Dates(new Date(), new Date(2020, 1))
            ],
            ['Git',
              new Date(),
              5, 'pro',
              0
            ],
            // GitHub GitLab
            ['Gradle',
              new Date(2019, 4),
              1, 'etudes',
              0
            ],
            ['JavaServer Pages',
              new Date(2019, 11),
              3 - 0.1, 'etudes',
              4 * 1
            ],
            ['JUnit',
              new Date(2020, 2),
              3, 'etudes',
              4 * 1 + 4 * 1 + 2
            ],
            ['Jupyter Notebook',
              new Date(2019, 1),
              3, 'etudes',
              4 * 1
            ],
            ['Kubernetes',
              new Date(2021, 9),
              3, 'etudes',
              2
            ],
            ['MongoDB',
              new Date(2022, 3),
              3, 'etudes',
              4 * 1 + 2
            ],
            ['NodeJS',
              new Date(2020, 4),
              5, 'etudes',
              4 * 6 + 4 * 1
            ],
            ['PlantUML',
              new Date(2020, 0),
              3 + 0.1, 'perso',
              4 * 2
            ],
            ['Mermaid.js',
              new Date(2022, 0),
              3 + 0.1, 'perso',
              3
            ],
            ['React',
              new Date(2019, 10),
              3 + 0.2, 'perso',
              4 * 2
            ],
            ['SonarQube',
              new Date(2020, 9),
              1, 'etudes',
              2
            ],
            ['Symfony',
              new Date(2019, 5),
              3 - 0.1, 'etudes',
              4 * 1 + 2
            ],
            ['TensorFlow',
              new Date(2019, 1),
              3 - 0.2, 'etudes',
              4 * 1
            ],
            ['WordPress',
              new Date(2017, 9),
              4, 'etudes',
              4 * 2
            ],
          ]
        case 'languages':
          return [

            ['Javascript',
              new Date(),
              5, 'pro',
              this.weeksBetween2Dates(new Date(), new Date(2017, 0, 0))
            ],
            ['Python',
              new Date(),
              5, 'pro',
              4 * 6 + this.weeksBetween2Dates(new Date(), new Date(2020, 9))
            ],
            ['Postgresql',
              new Date(new Date().getFullYear(), new Date().getMonth() - 1),
              5, 'pro',
              this.weeksBetween2Dates(new Date(), new Date(2020, 9))
            ],
            ['Bash',
              new Date(),
              4, 'pro',
              this.weeksBetween2Dates(new Date(), new Date(2017, 0, 0))
            ],
            ['CSS',
              new Date(),
              4, 'pro',
              this.weeksBetween2Dates(new Date(), new Date(2017, 0, 0))
            ],

            ['HTML',
              new Date(new Date().getFullYear, -1, 1),
              4, 'etudes',
              (new Date().getFullYear, -2, 1)
            ],

            ['Java',
              new Date(2017 + 3, 9 - 1, 1),
              4, 'etudes',
              4 * 12 * 3
            ],
            ['PHP',
              new Date(2018, 9 - 1, 1),
              3, 'pro',
              4 * 12
            ],
            ['Typescript',
              new Date(2020, 1 - 1, 1),
              4, 'etudes',
              4 * 6
            ],
            ['C++',
              new Date(2019, 5),
              4, 'etudes',
              3 * 3
            ],
            ['XML',
              new Date(2022, 0),
              4, 'etudes',
              0
            ],
            ['Assembleur',
              new Date(2018, 10),
              1, 'etudes',
              2],
            ['Dart',
              new Date(2022, 2),
              4, 'etudes',
              4 * 12 + 4 * 2],

          ]

        default: return []
      }
    },
    skillsDisplayed_filtered () {
      let ret
      if (!this.skillsFilter) {
        ret = this.skillsDisplayed
      } else {
        ret = this.skillsDisplayed.filter(
          aSkill => aSkill[0].toLowerCase().includes(this.skillsFilter.toLowerCase()))
      }
      // [[]] is somehow valid for the bubbles chart and it won't reload.
      return ret.length > 0 ? ret : [[]]
    }
  },
  watch: {
    skillsFilter () {
      this.loadBubblesChart()
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

    this.loadBubblesChart()

    this.addScrollEventHandlers()

    // Resize chart(s) on window resize, like this, it only resize when width grows.
    // window.addEventListener('resize', () => {
    //   this.$nextTick(() => {
    //     this.loadBubblesChart()
    //   })
    // })
  },

  //

  //

  methods: {
    weeksBetween2Dates (dateTo, dateFrom) {
      return Math.ceil(
        ((dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24) / 7))
    },
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

    loadBubblesChart (skillsData = this.skillsDisplayed_filtered) {
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

        const ticksDate = []
        for (let ind = 2017; ind <= new Date().getFullYear() + 1; ind++) {
          ticksDate.push(new Date(ind, 0))
        }

        const options = {
          // title: '',
          hAxis: {
            title: 'Dernière utilisation en date',
            format: 'yyyy',
            ticks: ticksDate,

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
            zoomDelta: 1.5,
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
