<template>
  <v-card>
    <v-layout v-bind="columnBreak">
      <v-flex
        xs12
        sm4
        md3
        xl3
        class="fullCover"
      >
        <v-img
          :aspect-ratio="4/4"
          :src="imageUrl"
          height="100%"
        />
      </v-flex>
      <v-flex
        xs12
        sm8
        md9
        xl9
        d-flex
      >
        <v-card flat>
          <v-card-title primary-title>
            <h2>ABOUT ME</h2>
          </v-card-title>
          <v-card-text>
            <p class="text-sm-left">
              {{ bio }}
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    bio: {
      type: String,
      default: 'Example of Bio'
    },
    imageUrl: {
      type: String,
      default: 'https://vuejs.org/images/logo.png'
    }
  },
  computed: {
    columnBreak () {
      const binding = {}
      if (this.$vuetify.breakpoint.xs) binding.column = true
      return binding
    }
  }
}
</script>

<style>

@media (min-width: 600px) {
    .fullCover{
        padding: 0px 0px 0px 8px!important;
    }
}

@media (max-width: 599px) {
    .fullCover{
        padding-top:0px!important;
    }
}

.container.grid-list-lg *:not(:only-child) .layout:first-child {
    margin-top: 0px;
    margin-bottom: 0px!important;
}
</style>
