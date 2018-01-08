<template>
  <div id="app" class="ui container fluid">
<!--     <div class="ui floating dropdown labeled search icon button teal select-language right">
      <i class="world icon"></i>
      <span class="text">{{ $t("common.select_language") }}</span>
      <div class="ui menu blue">
        <div class="item" v-for="lang in optionLangs" :value="lang.value" @click.prevent="callSetLangActions">{{ lang.text }}</div>
      </div>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  const inBrowser = typeof window !== 'undefined'
  if (inBrowser) {
    var semantic = require('semantic-ui-css/semantic.js')
  }

  export default {
    data: () => ({
      optionLangs: [
        {
          text: 'Vietnamese',
          value: 'vn'
        },
        {
          text: 'English',
          value: 'en'
        }
      ]
    }),
    methods: {
      callSetLangActions (event) {
        this.setLang(event.target.getAttribute('value'))
      },

      ...mapActions('moduleI18n', [
        'setLang',
      ])
    },
    mounted () {
      $('.ui.dropdown').dropdown();
    }
  }
</script>

<style>
  body {
    background-color: #DADADA;
    margin-left: calc(100vw - 100%);
  }
  .ui.select-language {
    margin-top: calc(10vh);
    margin-left: calc(60%);
  }
</style>
