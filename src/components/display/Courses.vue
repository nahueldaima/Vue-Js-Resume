<template>
  <v-content>
    <v-flex
      v-for="course in courses"
      :key="course.order"
    >
      <v-card flat>
        <v-card-title>
          <v-flex
            xs12
            sm4
            md3
            align-self-start
          >
            <v-avatar size="60px">
              <img
                :src="course.imageUrl"
                :alt="course.name"
              >
            </v-avatar>
          </v-flex>
          <v-flex
            xs12
            sm8
            md9
            text-sm-left
            text-xs-center
            align-self-end
          >
            <h3>{{ course.name }}</h3>
            <span class="courseInstitution">{{ course.institution }}</span>
            <v-btn
              v-if="course.certificationUrl != '#'"
              color="primary"
              small
              flat
              :class="{center: columnBreak, right: !columnBreak}"
              :href="course.certificationUrl"
              target="_blank"
            >
              Ver Certificado
            </v-btn>
          </v-flex>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-content>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      default: () => { return [] }
    }
  },
  computed: {
    columnBreak () {
      return !!this.$vuetify.breakpoint.xs
    }
  }
}
</script>

<style>
.courseInstitution{
    color:grey;
    font-weight: 400;
}
p {
    margin-bottom: 5px!important;
}
.v-btn {
    font-size: 12px;
}
</style>
