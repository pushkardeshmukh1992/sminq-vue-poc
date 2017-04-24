<template>
  <div>
    <bs-title :title="title"></bs-title>
    <h2>Bar view!!</h2>
    <div class="image-container" v-for="item in items">
      <img v-lazy="imgObj" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarComponent',
  data () {
    return {
      title: 'This is title for Bar View',
      sources: [],
      items: [
        '1', '1', '1', '1', '1',
        '1', '1', '1', '1', '1',
        '1', '1', '1', '1', '1',
        '1', '1', '1', '1', '1',
        '1', '1', '1', '1', '1'
      ],
      imgObj: {
        src: 'http://lorempizza.com/380/240/pie',
        error: 'http://placehold.it/380x240',
        loading: 'http://placehold.it/380x240'
      }
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
