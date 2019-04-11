<template>
  <v-toolbar
    color="light-green"
    dark
  >
    <v-toolbar-title>
      {{ fullName | uppercase }} -
      <span class="font-weight-light">{{ title | uppercase }}</span>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        v-for="item in social"
        :key="item.value"
        icon
        target="_blank"
        :href="item.url"
      >
        <span
          v-if="item.url !=''"
          class="header-icons social"
        >
          <i :class="item.icon" />
        </span>
      </v-btn>
      <v-btn
        v-if="cvUrl !=''"
        icon
        target="_blank"
        :href="cvUrl"
      >
        <span class="header-icons pdf">
          <i class="far fa-file-pdf" />
        </span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'My Cool Job Title'
    },
    fullName: {
      type: String,
      default: 'John Doe'
    },
    cvUrl: {
      type: String,
      default: '#'
    },
    social: {
      type: Array,
      default: () => { return [] }
    }
  }
}
</script>

<style>
.header-icons {
    font-size: 2em;
}
.header-icons i {
    padding: 0px 15px 0px 15px;
}
@media only screen and (max-width: 600px) {
    .v-toolbar__content,
    .v-toolbar__extension {
        padding: 0 16px;
        height: 85px !important;
    }
    .v-toolbar__title {
        white-space: normal;
        font-size: 12pt;
    }
}
</style>
