<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/1501925972769849.jpg" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">WZTForum</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/Posts"><i class="fa fa-list" style="padding: 5px">Post view</i></b-nav-item>
          <b-nav-item data-test="postbtn" to="/Post"><i class="fa fa-money" style="padding: 5px">Post</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
  // color: #2c3e50;
    padding-top: 20px;
    background: url("./assets/56dab15c5c1d5.jpg") no-repeat center top;
  // background-size: cover;
  // background-color: #f6d54f
  }
  button
  {
    margin:5px;
  }

  .b-nav-item {
    color: white;
    font-size: 30px;
  }
  .VueTables__child-row-toggler {
    width: 16px;
    height: 16px;
    line-height: 16px;
    display: block;
    margin: auto;
    text-align: center;
  }

  .VueTables__child-row-toggler--closed::before {
    content: "+";
  }

  .VueTables__child-row-toggler--open::before {
    content: "-";
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
