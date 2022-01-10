<template>

  <div id="app">
    

    <NavBar/>
 

     <Section/>
     

    

  

  
    <footer class="footers">
    <p class="mt-2 text-white">Posco Assan</p>
  <!-- Grid container -->
  <div class="container  pb-0">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #3b5998;"
        href="#!"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #55acee;"
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #dd4b39;"
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #ac2bac;"
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #0082ca;"
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <!-- Github -->
      <a
        class="btn btn-primary btn-floating m-1"
        style="background-color: #333333;"
        href="#!"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>

</footer>


  </div>
</template>

<script>



import NavBar from "@/components/NavBar";
import Section from './components/Section.vue';



export default {
  name: 'App',
  components: {
    NavBar,
    Section,

   

  }
}
</script>

<style>



html, body {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, "sans-serif";
    background-color: #41566b;
  min-height: 100vmin;
width: 100%;
 margin-top: 0;
  padding-top: 0;
  border: 0;


    
}
#app {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

      
  
 
 


}
.selection{
  background-color: blue;
}

.footers{
  margin:0;
  bottom:0;
  width: 1920px;
  height: 100px;
  position:fixed;
     background-color: #385674;
 

}
.special{
 
 text-align: center;
}
p{
  font-size: 1em;
}

</style>
