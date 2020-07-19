<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        v-model='files'
        multiple outlined chips
        label='Selecione as legendas'
        prepend-icon='mdi-message-text'
        append-outer-icon='mdi-send'
        @click:append-outer='processSubtitles'
      />
    </v-form>
    <div class='pills'>
      <Pill v-for='word in groupedWords' :key='word.name' :name='word.name' :amount='word.amount' />
    </div>
  </v-container>
</template>

<script>
const {ipcRenderer} = window.require('electron')
import Pill from './Pill'

export default {
  components: { Pill },
  data: function() {
    return {
      files: [],
      groupedWords: []
    }
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map(file => file.path)

      ipcRenderer.send('process-subtitles', paths)

      ipcRenderer.on('process-subtitles', (event, words) => {
        this.groupedWords = words
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .pills
    display: flex
    flex-wrap: wrap
    justify-content: center
</style>