<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <slot />
      </h2>
    </v-card-title>
    <v-container>
      <v-flex
        v-for="item in skills"
        :key="item.name"
        class="starsContainer"
      >
        <v-flex xs3>
          <span class="skillText">{{ item.name }}</span>
        </v-flex>
        <v-flex xs9>
          <v-rating
            v-model="item.value"
            color="yellow"
            readonly
            half-increments
          />
        </v-flex>
      </v-flex>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'SkillsStars',
  props: {
    skills: {
      type: Array,
      default () { return [] }
    }
  }
}
</script>

<style>
.skillText {
    font-size: 1.17em;
}

.starsContainer {
    height: 75px;
    display: flex;
    align-items: center;
}
</style>
