<template>
<div class="footerWrapper">
  <div class="footerBlock footerBlock1">
    <h2>TEN</h2>
    <h3>Крестьянское хозяйство</h3>
    Наши овощи — результат честной и прозрачной работы, мы гордимся предоставлять вам только лучшее.
      Дружелюбное обслуживание — наш залог доверия и приятных взаимоотношений с клиентами.
  </div>
  <div class="footerBlock footerBlock2"></div>
  <div class="footerBlock footerBlock3"></div>
  <div class="footerBlock footerBlock4"></div>
</div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
.footerWrapper{
  background-color: #000000;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 326px;
  box-sizing: border-box;
  padding: 30px 100px;
}
.footerBlock{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
}
.footerBlock1{
  border: 1px solid green;
  width: 300px;
  height: 217px;
  text-align: center;
  color: rgba(255, 255, 255, 0.80);
  font-size: 15px;
  font-weight: 300;
}
.footerBlock1 h2{
  font-family: Montserrat,sans-serif;
  font-size: 48px;
  font-weight: 250;
  align-self: center;
  margin-bottom: -20px;
  margin-top: 0;
  color: #FFFFFF;
}
.footerBlock1 h3{
  font-family: Montserrat,sans-serif;
  font-size: 18px;
  font-weight: 300;
  align-self: center;
  color: #FFFFFF;
  margin-bottom: 34px;
}
</style>
