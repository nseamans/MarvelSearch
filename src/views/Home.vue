<template>
  <div class="home">
    <Intro />
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Search from '@/components/Search.vue'
import Intro from '@/components/Intro.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Search,
    Intro
  },


}
</script>
