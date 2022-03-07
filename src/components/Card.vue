<script>
export default {
  props : {
    imgUrl : String,
    name : String,
    birth : String,
  },
  computed : {
    compareBirth() {
      console.log("ComparedBirth invoked in computed")
      if(Date.parse(this.birth) < Date.parse('1970-01-01')) {
        this.color = 'green'
        return 'older'
      }else {
        this.color = 'red'
        return 'younger'
      }
    }
  },
  // methods : {
  //   compareBirth() {
  //     console.log("ComparedBirth invoked in method")
  //     if(Date.parse(this.birth) < Date.parse('1970-01-01')) {
  //       return 'older'
  //     }else {
  //       return 'younger'
  //     }
  //   }
  // }
}
</script>

<template>
<div class="card">
  <img :src="imgUrl" alt="profile image" class="card__img">
  <h2 class="card__name">{{ name }}</h2>
  <h2 class="card__birth">{{ birth }}</h2>
  <h2>{{ compareBirth }}</h2>
</div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap : 10px;
  width : 200px;
  height : 250px;
  background-color: aquamarine;
  box-shadow: 1px 1px 10px grey;
}
.card__img {
  width : 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100%;
  border : solid 2px;
  padding : 5px;
  background-color: white;
}
.card__name{
  font-weight: 700;
}
.card__birth{
  font-weight: 300;
  color : v-bind(color);
}
</style>