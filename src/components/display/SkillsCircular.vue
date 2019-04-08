<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <slot />
      </h2>
    </v-card-title>
    <v-container>
      <v-layout
        align-center
        justify-center
        wrap
      >
        <v-flex
          v-for="(item, index) in skills"
          :key="item.name"
        >
          <v-flex>
            <v-progress-circular
              :rotate="-90"
              :size="100"
              :width="15"
              :value="item.value"
              :color="circleColors[index]"
            >
              {{ item.value }}
            </v-progress-circular>
          </v-flex>
          <v-flex>{{ item.name }}</v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skills: {
      type: Array,
      required: true,
      default: () => { return [] }
    }
  },
  data () {
    return {
      circleColors: [
        '#03A9F4',
        '#CDDC39',
        '#FF9800',
        '#F44336',
        '#E91E63',
        '#00BCD4',
        '#009688'
      ]
    }
  }
}
</script>
