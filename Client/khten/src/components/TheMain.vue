<template>
<div class="mainWrapper">
  <div class="mainKHTen">
    <h1>TEN</h1>
    <h2>Крестьянское хозяйство</h2>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheMain'
}
</script>

<style scoped>
.mainWrapper{
  background-image: url("/src/assets/images/mainBg.png");
  background-position: center;
  background-size: contain;
  width: 100%;
  min-width: 1536px;
  height: 715px;
  min-height: 715px;
  box-sizing: border-box;
  padding: 70px 100px;
}
.mainKHTen{
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  width: 466px;
}
.mainKHTen h1{
  font-size: 128px;
  font-family: "Montserrat Thin",serif;
  font-weight: 100;
  align-self: center;
  margin-bottom: -30px;
  margin-top: 0;
}
.mainKHTen h2{
  font-size: 36px;
  font-family: "Montserrat Light",serif;
  font-weight: 300;
  align-self: center;
  margin-bottom: 0;
}
</style>
