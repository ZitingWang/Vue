<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i></i></b>
          <p></p>
          <p>My email address is 20082254@mail.wit.ie.</p>
        </td>
        <br>
      </tr>
      <tr>
        <img src="../assets/WIT.jpg" alt="description here" />
      </tr>
    </table>
    <p class="lead">This is my facebook.<a href ="https://www.facebook.com/ziting.wang.12">Facebook</a></p>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      messagetitle: ' Contact Us '
    }
  }
}
</script>

<style scoped>
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
