<template>
<div class="big">
  <div class="content">
    <router-view/>
    <nav>
  </nav>  
  </div>  

</div>
</template>

<style>
  .big{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(235, 235, 235);
  }
  .content{
    width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 20px;
    padding: 0px 20px;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 10;
  }
  h1{
    color: gray;
    margin: 10px 0px 5px 0px ;
    text-shadow: 2px 3px 10px rgba(0,0,0,0.42);
  }
  router-link{
    text-decoration: none;
  }
</style>