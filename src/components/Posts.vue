<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="posts" :options="options">
        <a slot="uplike" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="uplike(props.row.writer)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editPost(props.row._id)"></a>
        <a slot="delete" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deletePost(props.row.writer)"></a>
        <a slot="child_row" slot-scope="props">
          <div class="vue-content">The content is [ {{props.row.content}} ]</div>
        </a>
      </v-client-table>
    </div>
  </div>
</template>
<script>
import PostService from '@/services/postservice'

export default {
  name: 'Posts',
  data () {
    return {
      messagetitle: ' Posts List ',
      posts: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'writer', 'likenumber', 'uplike', 'edit', 'delete'],
      options: {
        perPage: 10,
        filterable: ['writer', 'likenumber'],
        sortable: ['likenumber'],
        headings: {
          _id: 'ID',
          writer: 'writer',
          likenumber: 'likenumber'
        },
        uniqueKey: '_id',
        // childRowTogglerFirst: false,
        orderBy: {
          column: 'likenumber'
        }
      }
    }
  },
  created () {
    this.loadPosts()
  },
  methods: {
    loadPosts: function () {
      PostService.fetchPosts()
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
          console.log(this.posts)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    uplike: function (writer) {
      PostService.likePost(writer)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadPosts()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editPost: function (id) {
      this.$router.params = id
      this.$router.push('edit')
      console.log(this.$router.params)
    },
    deletePost: function (writer) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          PostService.deletePost(writer)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadPosts()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Post ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Your Post still Counts!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
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
  .vue-pagination-ad {
    text-align: center;
  }
  .vue-content {
    text-align: left;
    font-size: 17px;
    margin-left: 30px;
  }
</style>
