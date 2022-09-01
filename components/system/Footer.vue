<template>
  <footer>
    <div class="footer">
      <div class="footer-container">
        
        <div class="footer-item">
          <h2 style="font-weight: 600">Запись на очный приём:</h2>
          <div class="footer-link">
            <a href="https://www.medicom-plus.ru/sveden/common/g-gatchina-ul-khokhlova-d-8-pom-7n-mts-orlova-roshcha/">Медиком</a>
            <a href="https://everyday.clinic/">Everyday Clinic</a>
          </div>
        </div>

        <div>
          <a  href="https://dr-gunina.ru/"><img class="svg-custom" src="@/assets/book-svgrepo-com.svg"></a>
          <a href="https://vk.com/drgunina"><img class="svg" src="@/assets/icons8-vk.svg"></a>

        </div>

      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  position: absolute;
  bottom: 1;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 10px 0;
  background-color: #ffffff;
  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
  height: 66px;
}

.footer-container {
  display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px 0 50px;
}

.footer-item {
  display: flex;
  align-items: flex-start;
}

.footer-link {
  display: flex;
  flex-wrap: wrap;
  width: 150px;
  margin-left: 20px;
  color: #909399;
  a {
    color: #909399;;
    cursor: pointer;
    font-weight: 600;
  }
}

.svg {
  cursor: pointer;
  height: 45px;
  width: 45px;
}

.svg-custom {
  cursor: pointer;
  border: solid 1px rgb(47, 47, 47);
  border-radius: 60%;
  height: 33px;
  width: 33px;
}
</style>
