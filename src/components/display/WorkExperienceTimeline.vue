<template>
  <v-container>
    <v-timeline :dense="mobileChange">
      <v-timeline-item
        v-for="item in history"
        :key="item.order"
        color="purple"
        small
      >
        <template v-slot:opposite>
          <span>{{ item.dateFrom | uppercase }} - {{ item.dateTo | uppercase }}</span>
        </template>
        <div class="py-3">
          <h2 class="headline font-weight-light mb-3">
            {{ item.companyName | uppercase }} - {{ item.role | uppercase }}
          </h2>
          <p v-if="mobileChange">
            {{ item.dateFrom | uppercase }} - {{ item.dateTo | uppercase }}
          </p>
          <div>{{ item.description }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: 'TimeLine',
  props: {
    history: {
      type: Array,
      default: () => { return [] }
    }
  },
  computed: {
    mobileChange () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm': {
          return true
        }
        default: return false
      }
    }
  }
}
</script>
