
<template>
  <div id="app">

    <div class="row nav">
      <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <h1 class="nav" style="text-align: left;">Marvel Character Bible</h1>


        </div>
        <div class="col-sm-2"></div>
    </div>

            <div class="row">

            <div class="col-sm-2"></div>

            <div class="col-sm-8" id="navfeatures">

                <nav class="navbar navbar-expand-sm ">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <h4><router-link to="/intro">App Intro</router-link></h4>
                        </li>
                        <li class="nav-item">
                          <h4> &nbsp; | &nbsp; </h4>
                        </li>
                        <li class="nav-item">
                            <h4><router-link to="/search">Search</router-link></h4>
                        </li>
                        <li class="nav-item">
                          <h4> &nbsp; | &nbsp; </h4>
                        </li>
                        <li class="nav-item">
                            <h4><router-link to="/list">Full List</router-link></h4>
                        </li>
                    </ul>
                </nav>

            </div>

            <div class="col-sm-2"></div>

        </div>

        <hr>

    <!-- <div id="nav">
      <h2>
        <router-link to="/about">About</router-link> |
        <router-link to="/Intro">Application</router-link>
      </h2>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
 
  @import url('https://fonts.googleapis.com/css?family=Lato|Permanent+Marker|Source+Sans+Pro:400i');


  body {
    background-color: #FDFDFD;
    }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #2A75B3;
  }

  

  div.nav {
    font-family: 'Permanent Marker', cursive;
    background-color: #ED1D24;
    color: #FDFDFD;
    font-weight: 300;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Lato', sans-serif;
  }

  h1.nav {
    font-family: 'Permanent Marker', cursive;
    font-weight: 300;
    padding-bottom: 10px;
  }

  p,th,td {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 750;
  }

</style>
