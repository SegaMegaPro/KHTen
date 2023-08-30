<template>
  <router-view name="theMain"></router-view>
  <div class="mainContentWrapper">
    <router-view name="theProduct"></router-view>
    <router-view name="theReason"></router-view>
    <router-view name="theContacts"></router-view>
  </div>
  <router-view name="theFooter"></router-view>
</template>

<script lang="ts">

export default ({
  name: 'App'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap');
body{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
.mainContentWrapper{
  background-size: contain;
  background: url("@/assets/images/contentBg.png");
  background-position: top;
  background-repeat: no-repeat;
}
</style>
