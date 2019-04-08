<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import appFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    appFooter
  }
}
</script>
