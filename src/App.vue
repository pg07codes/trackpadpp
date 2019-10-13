<template>

  <div id="touchpad">
    <TouchPad/>
  </div>

</template>

<script>
import TouchPad from './components/TouchPad.vue'

export default {
  name: 'app',
  components: {
      TouchPad
  }
}
</script>

<style scoped>

  #touchpad{
    width:100%;
    height: 100%;
    margin:0;
    padding:0;
  }

</style>
