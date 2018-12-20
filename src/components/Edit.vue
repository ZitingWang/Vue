<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
          <post-form :post="post" postBtnTitle="Update Post"
                         @post-is-created-updated="updatePost"></post-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import PostService from '@/services/postservice'
import PostForm from '@/components/PostForm'

export default {
  data () {
    return {
      post: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Post '
    }
  },
  components: {
    'post-form': PostForm
  },
  created () {
    this.getPost()
  },
  methods: {
    getPost: function () {
      PostService.fetchPost(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.post = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Post in Edit: ' + JSON.stringify(this.post, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updatePost: function (post) {
      console.log('Before PUT ' + JSON.stringify(post, null, 5))
      PostService.putPost(this.$router.params, post)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(post, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
