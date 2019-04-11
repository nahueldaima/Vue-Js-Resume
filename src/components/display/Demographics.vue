<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        <slot />
      </h2>
    </v-card-title>
    <v-container>
      <v-layout
        align-start
        justify-start
        row
        column
      >
        <v-flex
          xs12
          class="demogContainer"
        >
          <v-icon large>
            smartphone
          </v-icon>
          <a
            :href="'tel:' + phone"
            class="demographicsText"
          >{{ phone }}</a>
        </v-flex>
        <v-flex
          xs12
          class="demogContainer"
        >
          <v-icon large>
            email
          </v-icon>
          <a
            :href="'mailto:' + email"
            class="demographicsText"
          >{{ email }}</a>
        </v-flex>
        <v-flex
          xs12
          class="demogContainer"
        >
          <v-icon large>
            place
          </v-icon>
          <span class="demographicsText">{{ address }}</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    phone: {
      type: String,
      default: '+10110321332'
    },
    email: {
      type: String,
      default: 'test@test.com'
    },
    address: {
      type: String,
      default: 'Sunnyroad St 209, Michigan, USA'
    }
  }
}
</script>

<style>
.demogContainer {
height: 75px;
display: flex;
align-items: center;
}

.demogContainer a{
text-decoration: none;
color: inherit;
}

.demographicsText {
margin-left: 30px;
font-size: 1.17em;
font-weight: bold;
text-align: left;
}
</style>
