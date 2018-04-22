<template>
  <div>
  <div class="hello">
    <img id="teamleader" src="@/assets/teamleader.jpg">
  </div>
  {{msg}}
</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Oh...HAY'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#teamleader {
  max-width: 800px;
  margin:0 auto;
}
</style>
