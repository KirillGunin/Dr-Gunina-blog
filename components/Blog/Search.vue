<template>
  <div class="wrapper__search">

    <!-- Search -->
    
    <div class="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>    
    <!-- Search input -->
    <input type="text" :placeholder="placeholder" v-model="search">

  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Поиск'
    }
  },
  data () {
    return { search: this.value }
  },
  watch: {
    search (val) {
      // console.log(val)
      this.$emit('search', val);
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  color: #e4e4e4;
}
/* Search */
.wrapper__search {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}
// .search {
//   top: 0px;
//   bottom: 0px;
//   left: 0px;
//   position: absolute;
// }
.search-icon {
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 23px;
  align-items: center;
  display: flex;
}
input {
  margin-top: 10px;
  padding: 16px 16px 16px 20px !important;
  margin-bottom: 0px;
  border-radius: 30px;
  color: #909399;
  font-size: 16px;
  width: 60%;
  height: auto;
}

@media (max-width: 479px) {
  .wrapper__search {
    margin-top: 15px;
  }
  .search-icon {
    height: auto;
    margin-top: 0;
  }
  
  input {
    height: 35px;
    margin-top: 0px;
  }
}

</style>


