<template>
  <div id="sound">
      <a @click="previous"class="previous"><img class="newsound" src="@/assets/previous.png"></a>
      <a @click="next" class="next"><img class="newsound" src="@/assets/next.png"></a>
      <div class="video-container sound">
        <iframe :src="vids[currentVid]" allowfullscreen></iframe>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
  return {
    currentVid: 1,
    vids:  ['https://www.youtube.com/embed/xC2I7Xc3znQ', 'https://www.youtube.com/embed/ZcPfwIDEcQo', 'https://www.youtube.com/embed/8I88xIoT3qM','https://www.youtube.com/embed/EJooAyL5dZo','https://www.youtube.com/embed/_Q-g-HiVEGU','https://www.youtube.com/embed/3tFYegxsL50'],
  }
},
methods: {
  next() {
      if (this.currentVid+1 < this.vids.length) {
          this.currentVid++;
      }
  },
  previous() {
      if (this.currentVid+1 > 1) {
          this.currentVid--;
      }
  },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sound {
  max-width: 800px;
  margin:0 auto;
}

/* style for next buttons */
.newsound {
  max-width: 20px;
}

.previous {
    color:#FFFFFF;
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
}

.next {
    color:#FFFFFF;
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
}


/* responsive vid container */

.video-container {
  position: relative;
  padding-bottom: 56.25%; /*16:9*/
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
