<template>
  <div>
    <bs-title :title="title"></bs-title>
    <h2>Foo view!!</h2>
  </div>
</template>

<script>
export default {
  name: 'FooComponent',
  data () {
    return {
      title: 'This is title for foo View'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
