<template>
<div>
  <Test v-if="user" />
  <HomePage v-else />
</div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
import Test from '@/components/Test.vue'
import axios from 'axios';
export default {
  name: 'home',
  components: {
    HomePage,
    Test
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
}
</script>
