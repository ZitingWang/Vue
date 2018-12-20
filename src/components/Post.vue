<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <post-form :post="post" postBtnTitle="Make Post" @post-is-created-updated="submitPost"></post-form>
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
      post: {writer: '', content: ''},
      messagetitle: ' Make Post '
    }
  },
  components: {
    'post-form': PostForm
  },
  methods: {
    submitPost: function (post) {
      PostService.postPost(post)
        .then(response => {
          console.log('submitPost!')
          console.log('Submitting in submitPost : ' + post)
          console.log(response)
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
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
