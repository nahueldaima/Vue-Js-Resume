<template>
  <v-footer
    height="auto"
    dark
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        light-green
        darken-4
        py-3
        text-xs-center
        white--text
        xs12
      >
        <p class="text-xs-center footerText">
          This page was made as a Sample Project on Vue Js. Watch the full repository on
          <a
            href="https://github.com/nahueldaima"
            title="Nahuel Daima Github Repository"
            target="_blank"
            class="footerLink"
          >GitHub</a>.
          <small>©2019 - Nahuel Daima</small>
        </p>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<style>

.footerLink {
    color: white !important;
    font-weight: 600 !important;
    text-decoration: none;
}

.footerLink:hover {
    color: white !important;
    text-decoration: underline;
}

.footerText {
    margin: 0px 20px 0px 20px;
}
</style>
