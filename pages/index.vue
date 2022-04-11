<template>
  <div id="app" class="">
    <div
      id="section-me"
      class="h-screen grid content-center bgMe"
    >
      <div class="justify-self-center">
        <div class="text-4xl text-gray-900 lg:text-9xl text-center bg-gray-50 bg-opacity-25 hover:bg-opacity-50 ease-linear duration-100 px-8 py-4">
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
            class="talk-frame"
          >
            Salut ! Moi c'est Cédric,
            je suis développeur Fullstack au sein d'une start-up
            dont l'expertise est le traitement et la mise en valeur des données satellite ! <span class="text-xl">🚀</span>
          </div>
        </div>

        <br>
      </div>

      <div>
        <div class="justify-self-center">
          <div class="grid place-items-center">
            <div
              class="
              text-2xl text-center
              justify-self-center
              text-blue-600
              "
            >
              Mon parcours
            </div>

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
        </div>

        <div class="flex flex-row place-content-center">
          <div id="chart-timeline" class="my-2 w-full lg:w-2/5" style="" />
        </div>
      </div>

      <div id="centered-skills-text" class="">
        <div class="grid justify-items-center">
          <div
            class="talk-frame"
          >
            J'ai un profil de développeur web fullstack, à l'aise sur la plupart des technos de la toile <span class="text-xl">😎</span>
            <br>
            Mais j'ai aussi des compétences en mobile notamment avec Flutter, ou en natif (Android)
            <br>
            ainsi qu'en POO <span class="text-xl">🤘</span>
          </div>
        </div>
      </div>
    </div>

    <!--  -->

    <!-- <div
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
          text-white

          rounded-full bg-green-500
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
          text-white

          rounded-full bg-green-500
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
              <svg
                class="h-6 w-6 text-white"
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
          text-white

          rounded-full bg-green-500
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
              <svg
                class="h-6 w-6 text-white"
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
    </div> -->

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
        <br>
        <br>
        <div
          class=" talk-frame justify-self-center"
        >
          Mon parcours s'est accompagné d'études, de projets et d'expériences
          <br>
          qui m'ont ammenées à maitriser certaines technologies,
          <br>
          représentées avec ce graphique à bulles 👇️
        </div>
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
              autocomplete="off"
              class="search-field"
              type="text"
              placeholder="Rechercher..."
            >
          </div>
        </div>

        <div class="flex flex-row place-content-center">
          <div id="chart-bubbles" class="my-2 w-full lg:w-3/4" style="height: 30vh" />
        </div>
      </div>

      <!-- lg:max-w-3/4 -->

      <div>
        <div class=" grid grid-cols-3 place-content-around my-2">
          <div class="col-span-1 text-center self-center talk-frame">
            Mais aussi quelques autres connaissances
            <br>
            liées au digital 👉️
            <br>
            <br>
            <div class="flex justify-center">
              <div class="w-48">
                <input
                  id="inline-full-name"
                  v-model="knowledgeFilter"
                  autocomplete="off"
                  class="search-field"
                  type="text"
                  placeholder="Rechercher..."
                >
              </div>
            </div>
          </div>
          <div class="flex flex-wrap col-span-2 justify-center content-center">
            <div
              v-for="(aKnowledge, ind) in knowledgesFilteredShuffled"
              :key="ind"
              class="little-chip h-fit"
              :class="
                aKnowledge.type == 'ITKnowledge' ? 'blue' :
                aKnowledge.type == 'devSoftwareOrIDE' ? 'green' :
                aKnowledge.type == 'language' ? 'yellow' :
                aKnowledge.type == 'other' ? 'purple' : ''
              "
            >
              {{ aKnowledge.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->

    <div
      id="section-my-passions"
      class="h-screen grid content-evenly bg-blue-600"
    >
      <div class="w-full h-screen flex flex-row place-content-around absolute">
        <div
          class="flex items-center"
        >
          <div
            class="
            text-lg
            text-center
          bg-white
            bg-opacity-50
            p-4
            mx-2
            z-10
          "
          >
            La musique, les concerts, les sorties, les amis
          </div>
        </div>
        <div
          class="flex items-center"
        >
          <div
            class="
            text-lg
            text-center
          bg-white
            bg-opacity-50
            p-4
            mx-2
            z-10
          "
          >
            La moto, les roadtrips, les expériences partagées
          </div>
        </div>
      </div>

      <div class="flex col-span-2 justify-around content-center absolute w-full">
        <div class=" w-full h-screen md:bg-black md:bg-opacity-50 hover:bg-opacity-0 transition duration-300 ease-in-out ">
          <br>
        </div>
        <div class=" w-full h-screen md:bg-black md:bg-opacity-50 hover:bg-opacity-0 transition duration-300 ease-in-out ">
          <br>
        </div>
      </div>
      <div class="flex col-span-2 justify-around content-center">
        <div class=" w-full h-screen bg-music-1">
          <div />
        </div>
        <div class=" w-full h-screen bg-byke-1 ">
          <div />
        </div>
      </div>

      <div
        class="
        text-4xl text-center
        justify-self-center
        text-blue-600
        p-4
        mt-12
        rounded-xl bg-white
        absolute
        "
      >
        Ce que j'aime ?
      </div>
    </div>

    <!--  -->

    <div
      id="section-my-links"
      class="h-screen grid content-evenly bg-green-600"
    >
      <div class="grid justify-items-center">
        <div
          class="
          text-4xl text-center
          justify-self-center
          text-white
          p-4
          mt-12
        "
        >
          Besoin de me contacter ?
        </div>
        <div class="flex flex-wrap justify-center">
          <a class="m-4 cursor-pointer" href="https://www.linkedin.com/in/c%C3%A9dric-bardaine-671ba014a/" target="_blank">
            <svg
              class="
              h-12 w-12 text-white
              transform transition duration-500 hover:scale-125
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a class="m-4 cursor-pointer" href="https://github.com/CedricBardaine" target="_blank">
            <svg
              class="
              h-12 w-12 text-white
              transform transition duration-500 hover:scale-125
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
          <a class="m-4 cursor-pointer" href="mailto:cedricbardaine@gmail.com" target="_blank">
            <svg
              class="
              h-12 w-12 text-white
              transform transition duration-500 hover:scale-125
              "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
          </a>
          <a class="m-4 cursor-pointer" href="https://www.instagram.com/cedbdb/" target="_blank">
            <svg
              class="
              h-12 w-12 text-white
              transform transition duration-500 hover:scale-125
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >  <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              ry="5"
            />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
        </div>
        <br><br>
        <p class="text-white">
          Site réalisé avec
          <a href="https://nuxtjs.org/" target="_blank" class="text-lg">NuxtJS</a>,
          <a href="https://tailwindcss.com/" target="_blank" class="text-lg">Tailwind</a> et
          <a href="https://developers.google.com/chart" target="_blank" class="text-lg">Google Charts</a> pour les graphiques.
        </p>

        <!-- <div class="text-center flex flex-col place-content-end ">
          <p class="text-white mb-1 text-sm">
            Copyright © 2022. Tous droits réservés : Cédric BARDAINE (rappel, cette mention n'a aucune valeur juridique ;)
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>

import { GoogleCharts } from 'google-charts'

/*
Notes :
 * Icons generated with : https://www.tailwindtoolbox.com/icons
*/

export default {
  name: 'IndexPage',

  data () {
    return {
      lastKnownScrollYPosition: 0,
      currentDiv: 0,

      mouseOver_bubblesChartDiv: false,

      skillsType: 'frameworks', // || languages
      skillsFilter: null,
      knowledgeFilter: null,

      knowledges: [
        { name: 'Bases de données', type: 'ITKnowledge' },
        { name: 'UML', type: 'ITKnowledge' },
        { name: 'Meurise', type: 'ITKnowledge' },
        { name: 'Linux', type: 'ITKnowledge' },
        { name: 'Administration système', type: 'ITKnowledge' },
        { name: 'Deep learning', type: 'ITKnowledge' },
        { name: 'Agile Scrum', type: 'ITKnowledge' },
        { name: 'Agile Kanban', type: 'ITKnowledge' },
        { name: 'Droit du numérique', type: 'ITKnowledge' },
        { name: 'Gestion de projet', type: 'ITKnowledge' },
        { name: 'Ergonomie', type: 'ITKnowledge' },
        { name: 'Communication', type: 'ITKnowledge' },
        { name: 'UX UI', type: 'ITKnowledge' },
        { name: 'Droit des sociétés', type: 'ITKnowledge' },
        { name: 'Spécifications fonctionnelles et détaillées', type: 'ITKnowledge' },

        { name: 'Atom', type: 'devSoftwareOrIDE' },
        { name: 'Eclipse', type: 'devSoftwareOrIDE' },
        { name: 'MySQL Workbench', type: 'devSoftwareOrIDE' },
        { name: 'Notepad++', type: 'devSoftwareOrIDE' },
        { name: 'PHPMyAdmin', type: 'devSoftwareOrIDE' },
        { name: 'SourceTree', type: 'devSoftwareOrIDE' },
        { name: 'Visual Studio', type: 'devSoftwareOrIDE' },
        { name: 'Visual Studio Code', type: 'devSoftwareOrIDE' },

        { name: 'Français', type: 'language' },
        { name: 'Anglais', type: 'language' },
        // { name: 'Allemand', type: 'language' },

        { name: 'Adobe Photoshop', type: 'other' },
        { name: 'Adobe Premiere Pro', type: 'other' },
        { name: 'Adobe After Effect', type: 'other' },
        { name: 'Adobe Illustrator', type: 'other' },
        { name: 'G Sheets / Docs / Slides ', type: 'other' },

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
    },

    knowledgesFiltered () {
      if (!this.knowledgeFilter) {
        return this.knowledges
      } else {
        return this.knowledges.filter(
          aKnown => aKnown.name.toLowerCase().includes(this.knowledgeFilter.toLowerCase()))
      }
    },
    knowledgesFilteredShuffled () {
      return this.shuffleArray(this.knowledgesFiltered)
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
          if (evt.deltaY > 0) { this.scrollToDiv('section-myself') } else if (evt.deltaY < 0) { this.scrollToDiv('section-me') }
        })

      document.getElementById('section-myself')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (evt.deltaY > 0) { this.scrollToDiv('section-my-skills') } else if (evt.deltaY < 0) { this.scrollToDiv('section-me') }
        })

      // document.getElementById('section-my-projects')
      //   .addEventListener('wheel', (evt) => {
      //     evt.preventDefault()
      //     if (evt.deltaY > 0) { this.scrollToDiv('section-my-skills') } else if (evt.deltaY < 0) { this.scrollToDiv('section-myself') }
      //   })

      document.getElementById('section-my-skills')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (!this.mouseOver_bubblesChartDiv) { if (evt.deltaY > 0) { this.scrollToDiv('section-my-passions') } else if (evt.deltaY < 0) { this.scrollToDiv('section-myself') } }
        })

      document.getElementById('section-my-passions')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (evt.deltaY > 0) { this.scrollToDiv('section-my-links') } else if (evt.deltaY < 0) { this.scrollToDiv('section-my-skills') }
        })

      document.getElementById('section-my-links')
        .addEventListener('wheel', (evt) => {
          evt.preventDefault()
          if (evt.deltaY > 0) { this.scrollToDiv('section-my-links') } else if (evt.deltaY < 0) { this.scrollToDiv('section-my-passions') }
        })
    },

    /** @see https://stackoverflow.com/a/2450976/13880103 Durstenfeld shuffle algorithm */
    shuffleArray (array) {
      let currentIndex = array.length; let randomIndex

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]]
      }

      return array
    }

  }

}

</script>
