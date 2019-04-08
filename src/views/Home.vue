<template>
  <div>
    <app-header
      :title="owner.title"
      :full-name="owner.full_name"
      :cv-url="owner.cvUrl"
      :social="social"
    />
    <v-container
      grid-list-lg
      text-xs-center
      d-flex
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          md8
          xs12
        >
          <v-flex xs12>
            <app-bio
              :image-url="owner.profilePicture"
              :bio="owner.bio"
            />
          </v-flex>
          <v-flex xs12>
            <v-card>
              <v-card-title primary-title>
                <h2>WORK EXPERIENCE</h2>
              </v-card-title>

              <app-timeline :history="workExperience" />
            </v-card>
          </v-flex>
          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              md6
            >
              <v-card>
                <v-card-title primary-title>
                  <h2>COURSES</h2>
                </v-card-title>
                <app-courses :courses="courses" />
              </v-card>
            </v-flex>
            <v-flex
              xs12
              md6
              d-flex
            >
              <v-card>
                <v-card-title primary-title>
                  <h2>FORMAL EDUCATION</h2>
                </v-card-title>
                <app-formal-education :items="formalEducation" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-flex xs12>
            <app-skills-bars :skills="hardSkills">
              DEV SKILLS
            </app-skills-bars>
          </v-flex>
          <v-flex xs12>
            <app-skills-circle :skills="softSkills">
              PERSONAL SKILLS
            </app-skills-circle>
          </v-flex>
          <v-flex xs12>
            <app-skills-stars :skills="languages">
              LANGUAGES
            </app-skills-stars>
          </v-flex>
          <v-flex xs12>
            <app-demographics
              :email="owner.email"
              :phone="owner.main_phone"
              :address="owner.address"
            >
              CONTACT
            </app-demographics>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import appHeader from '../components/Header'
import appBio from '../components/display/Bio'
import appTimeLine from '../components/display/WorkExperienceTimeline'
import appSkillsBars from '../components/display/SkillsBars'
import appSkillsCircular from '../components/display/SkillsCircular'
import appSkillsStars from '../components/display/SkillsStars'
import appCourses from '../components/display/Courses'
import appFormalEducation from '../components/display/FormalEducation'
import appDemographics from '../components/display/Demographics'

export default {
  components: {
    'app-header': appHeader,
    'app-bio': appBio,
    'app-timeline': appTimeLine,
    'app-skills-bars': appSkillsBars,
    'app-skills-circle': appSkillsCircular,
    'app-skills-stars': appSkillsStars,
    'app-courses': appCourses,
    'app-formal-education': appFormalEducation,
    'app-demographics': appDemographics
  },
  computed: {
    workExperience () {
      return this.$store.getters.GET_CV_WORK_EXPERIENCE
    },
    hardSkills () {
      return this.$store.getters.GET_CV_HARD_SKILLS
    },
    softSkills () {
      return this.$store.getters.GET_CV_SOFT_SKILLS
    },
    languages () {
      return this.$store.getters.GET_CV_LANGUAGE
    },
    courses () {
      return this.$store.getters.GET_CV_COURSES
    },
    formalEducation () {
      return this.$store.getters.GET_CV_FORMAL_EDUCATION
    },
    social () {
      return this.$store.getters.GET_CV_SOCIAL
    },
    owner () {
      if (Object.keys(this.$store.getters.GET_CV_OWNER_PROFILE).length === 0) return {}
      return this.$store.getters.GET_CV_OWNER_PROFILE
    }
  },
  created () {
    this.$store.dispatch('POPULATE_DATA')
  }
}
</script>

<style>
    .container {
        max-width: 100%;
    }
    .container.grid-list-lg .layout:not(:only-child) {
        margin: 0px;
    }
</style>
