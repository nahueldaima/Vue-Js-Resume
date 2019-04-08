<template>
  <v-container>
    <v-timeline dense>
      <v-timeline-item
        v-for="item in items"
        :key="item.order"
        color="pink"
        small
      >
        <v-layout pt-3>
          <v-flex xs3>
            <strong>{{ item.dateFrom }} - {{ item.dateTo }}</strong>
          </v-flex>
          <v-flex>
            <strong>{{ item.title }}</strong>
            <div class="caption">
              {{ item.institution }}
            </div>
          </v-flex>
        </v-layout>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => { return [] }
    }
  }
}
</script>
