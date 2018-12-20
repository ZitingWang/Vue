<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-globe" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <googlemap></googlemap>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'

export default {
  name: 'Map',
  data () {
    return {
      posts: [],
      messagetitle: ' Forum Map '
    }
  },
  components: {
    'googlemap': GoogleMap
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .vue-footer {
    text-align: center;
    font-size: 17px;
    margin-top: 30px;
    margin-left: 80px;
  }
</style>
