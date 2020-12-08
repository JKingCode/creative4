<template>
<div id="app">
  <div class="header">
    <div class="brand">
      <h1>Becoming More Christlike</h1>
      <nav>
        <li class="left">
        <router-link to="/home"><p>Home</p></router-link>
        </li>
        <li class="left">
        <router-link to="/improve"><p>Improve</p></router-link>
        </li>
        <li>
          <div v-if="user">
            <div @click="logout" class="out">Logout</div>   
          </div>
          <div v-else>
            <router-link to="/home"><p>Login</p></router-link>
          </div>
        </li>
      </nav>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <footer>
    <a>link</a>
    <h1>None of the content on this website is original content. It has all been taken from churchofjesuschrist.org</h1>
  </footer>
</div>
</template>

<script>
import axios from 'axios';
export default {
  
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style>
/* green yellow red orange */
/* 96ceb4 ffeead d9534f ffad60 */
body {
  margin: 0px;
  background: #F7F5F7;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.brand {
  display: flex;
  background:#9932CC;
  width:100%
}

.brand h1 {
  display: inline-block;
  background: #008080;
  padding: 10px;
  border-radius: 30px;
  font-size: 14px;
}

.brand h2 {
  font-size: 12px;
  padding: 10px;
  margin-top: 12px;
}

.main {
  padding: 20px 100px;
}

.pure-button {
  font-size: 10px;
}

h1 {
  font-size: 16px;
}

h2 {
  font-size: 12px;
}

.space-right {
  margin-right: 10px;
}

a {
  color: #008080;
}

.pure-button-primary {
  background-color: #008080;
  color: #333;
  border-radius: 30px;
}

footer{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 75px;
  width: 100%;
  text-align: center;
  background: #9932CC;
}

footer h1{
  /* display: inline-block; */
  padding: 10px;
  border-radius: 30px;
  font-size: 14px;
}

nav{
  display: flex;
  list-style-type: none;
  overflow: hidden;
}

.left{

}

.out{
  position: absolute;
  right:10px;
  top: 20px;
}

nav p{
  display: block;
  color: black;
  text-align: center;
  padding: 0px 10px;
  margin: 20px 10px;
  text-decoration: none;
}

.content{
  margin-bottom: 75px;
}


</style>
