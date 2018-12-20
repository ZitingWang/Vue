<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-info" style="padding: 3px"></i>{{messagetitle}}</h3>
    <p class="lead"><p>Hello, I am from ZitingWang from WIT and also a student of NUIST.</p>
    <table align="center">
    <tr>
      <td>
      </td>
      <br>
    </tr>
      <tr>
        <img src="../assets/WIT.jpg" alt="description here" />
      </tr>
      <tr> </tr>
      <tr>
        <img src="../assets/logo.png" alt="description here" />
      </tr>
    </table>
    <p></p>
    <p class="lead">If you want to know more, please contact us.<a href ="/contact">Contact Us</a></p>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      messagetitle: ' About Us '
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
</style>
