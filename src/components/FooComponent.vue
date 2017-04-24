<template>
  <div>
    <bs-title :title="title"></bs-title>
    <h2>List of clinics</h2>

      <div class="media" v-for="clinic in clinics">
        <div class="media-body">
          <h4 class="media-heading"><a v-bind:href="clinic.url" target="_blank">{{clinic.businessName}}</a></h4>
          <p>{{clinic.address}}</p>
        </div>
        <hr/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FooComponent',
  data () {
    return {
      title: 'This is title for foo View',
      clinics: []
    }
  },
  created: function () {
    this.$http.get('http://staging.api.sminq.com:8080/v1/user/business/autocomplete?categoryId=1&cityId=1&searchText=asd', {headers: { Authorization: 'Basic YWRtaW46YWRtaW4=' }})
      .then(response => {
        this.clinics = response.data.status
      })
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
