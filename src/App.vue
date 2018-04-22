<template>
  <div id="app">
    <header>
  <!-- Use any element to open the sidenav -->
  <span class="hamburger" @click="openNav">☰</span>
    <div  ref="mySidenav" id="mySidenav" class="sidenav">
      <a @click="closeNav" class="closebtn">&times;</a>
      <router-link to="/">
        <a>Home</a>
        </router-link>
      <!-- <router-link to="/submit">
        <a>Submit</a>
      </router-link> -->
      <router-link to="/about">
        <a>About</a>
      </router-link>
    </div>
<img src="./assets/logo.png">

</header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
openNav(){
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  var vm = this;
  vm.$refs.mySidenav.style.width = "250px";
},
closeNav() {
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  var vm = this;
  vm.$refs.mySidenav.style.width = "0";
}
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
overflow-x: hidden; /* Prevent scroll on narrow devices */
}

body {
/* padding-top: 56px; */
}

/*offcanvas nav*/
/* The side navigation menu */

.hamburger {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;

}

.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  right: 0;
  background-color: white; /* White*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover{
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
/* #main {
  transition: margin-left .5s;
  padding: 20px;
} */

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

</style>
