<template>
  <form id="submiturl">
  <div class="form-group">
    <label for="Email">Email address</label>
    <input type="email" class="input is small"placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="URL">Youtube URL</label>
    <textarea class="input is-normal" placeholder="Enter URL"></textarea>
  </div>
  <button type="submit" class="button is-dark">Submit</button>
</form>
</template>

<script>
export default {
  name: 'Submit',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#submiturl {
  max-width: 800px;
  margin:0 auto;
}

</style>
