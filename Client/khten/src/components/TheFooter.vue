<template>
<div class="footerWrapper">
  <div class="footerBlock footerBlock1">
    <h2>TEN</h2>
    <h3>Крестьянское хозяйство</h3>
    Наши овощи — результат честной и прозрачной работы, мы гордимся предоставлять вам только лучшее.
      Дружелюбное обслуживание — наш залог доверия и приятных взаимоотношений с клиентами.
  </div>
  <div class="footerBlock footerBlock2">
    <h2>Контакты</h2>
    <p><b>E-mail:</b> segamegapro123@gmail.com</p>
    <p><b>Телефон:</b> +7 (123)-123-12-23</p>
    <p><b>Адрес:</b> г. Уральск, ул. Пушкина, д. Колотушкина 123</p>
  </div>
  <div class="footerBlock footerBlock3">
    <h2>Галерея</h2>
    <div class="galleryWrapper">
    <img src="@/assets/images/gallery/Gallery1.png" alt="">
    <img src="@/assets/images/gallery/Gallery2.png" alt="">
    <img src="@/assets/images/gallery/Gallery3.png" alt="">
    <img src="@/assets/images/gallery/Gallery4.png" alt="">
    <img src="@/assets/images/gallery/Gallery5.png" alt="">
    <img src="@/assets/images/gallery/Gallery6.png" alt="">
    <img src="@/assets/images/gallery/Gallery7.png" alt="">
    <img src="@/assets/images/gallery/Gallery8.png" alt="">
    <img src="@/assets/images/gallery/Gallery9.png" alt="">
    </div>
  </div>
  <div class="footerBlock footerBlock4">
    <h2>Заявка</h2>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
.footerWrapper{
  font-family: Montserrat,sans-serif;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 326px;
  box-sizing: border-box;
  padding: 30px 100px;
}
.footerBlock h2{
  width: 100%;
  font-size: 36px;
  font-weight: 300;
  margin-top: 0;
}
.footerBlock{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFFFFF;
}
.footerBlock1{
  width: 300px;
  text-align: center;
  color: rgba(255, 255, 255, 0.80);
  font-size: 15px;
  font-weight: 300;
}
.footerBlock1 h2{
  font-size: 48px;
  font-weight: 250;
  margin-bottom: -20px;
  margin-top: 0;
  color: #FFFFFF;
}
.footerBlock1 h3{
  font-size: 18px;
  font-weight: 300;
  color: #FFFFFF;
  margin-bottom: 34px;
}
.footerBlock2{
  align-items: flex-start;
  width: 310px;
}
.footerBlock2 h2{
  margin-bottom: 19px;
}
.footerBlock2 p{
  margin-bottom: 32px;
}
.footerBlock3{
  width: 175px;
}
.footerBlock3 h2{
  margin-bottom: 25px;
  text-align: center;
  width: 100%;
}
.galleryWrapper{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-self: center;
}
</style>
