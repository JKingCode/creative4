<template>
<div class="hero">
  <div class="heroBox">
    <h1>Learn what you can do today to be more like Christ</h1>
    <div class="center">
      <div class="textbox">
        <p>Be ye therefore perfect, even as your Father which is in heaven is perfect. </p>
        <p>Matthew 5:48</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'landingPage',

}
</script>

<style>

.hero::after {
  content: "";
  background-image: url("/carpenters_son.jpeg");
    /* Full height */
  height: auto;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  top: 5%;
  left: 0;
  bottom: 10%;
  right: 0;
  position: absolute;
  z-index: -1;
}

/* .center{
  width: 50%;
} */

.textbox{
    text-align: center;
    align-content: center;
    border-radius: 25px;
    width:33%;
    padding: 25px;
    background-color: rgb(150, 148, 148);
    opacity: 0.75; 
    position: absolute;
    left: 33%;
    bottom: 12%;
}

.heroBox h1{
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  border-radius: 25px;
  opacity: 0.75; 
  padding: 15px;
  background-color: rgb(150, 148, 148);
}

</style>