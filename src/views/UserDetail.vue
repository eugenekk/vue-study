<template>
<h1>UserDetail</h1>
<h2>주소의 params로 받은 id : {{ $route.params.id }}</h2>
<div>props로 받은 id : {{ id }}</div>
</template>

<script>
export default {
  props : {
    id : String
  }
}
</script>