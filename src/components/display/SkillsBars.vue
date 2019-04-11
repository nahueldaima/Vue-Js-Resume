<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <slot />
      </h2>
    </v-card-title>
    <v-container>
      <v-layout
        v-for="item in skills"
        :key="item.name"
      >
        <v-flex xs3>
          {{ item.name }}
        </v-flex>
        <v-flex xs9>
          <v-progress-linear
            v-model="item.value"
            :color="item.color"
          />
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
      default: () => { return [] }
    }
  }
}
</script>

<style>
</style>
