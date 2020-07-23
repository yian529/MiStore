<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name:"App",
  mounted(){
    // storage.setItem('yian',1);
    // storage.setItem("mi",{yian:2},'user');
    // storage.clearItem('yian');
    storage.clearItem('mi','user');
  }
}
</script>

<style>

</style>
