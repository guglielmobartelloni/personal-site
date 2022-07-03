<template>
<div class="container">
 <audio-player
      ref="audioPlayer"
      :audio-list="audioList.map(elm => elm.url)"
      :before-play="handleBeforePlay"
      theme-color="#fffff"
    />
</div>
</template>

<script>
export default {
  data() {
    return {
      currentAudioName: '',
      audioList: [
        {
          name: 'Beat 1',
          path: '~/static/assets/mp3/beat1.mp3'
        },
        {
          name: 'audio2',
          url: 'https://file-examples.com/storage/fef6f7a01562c1c319b2d6a/2017/11/file_example_MP3_700KB.mp3'
        }
      ]
    }
  },

  methods: {
    // Something to do before playing
    handleBeforePlay(next) {
      // There are a few things you can do here...
      this.currentAudioName = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name

      next() // Start playing
    }
  }
}
</script>