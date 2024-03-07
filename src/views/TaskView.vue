<template>
  <div class="Add">
    <h1>Task List</h1>
    <div class="task">
      <div class="tasks" v-for="task in tasks" :key="task">
      <p>{{ task.name }}<router-link :to="'/update/'+task.id"><i class="fa-solid fa-pen " id="big_icon"></i></router-link></p>
      </div>
    </div>
    <router-link to="/add"><i class="fa-solid fa-plus" id="icon"></i></router-link>
  </div>
  <div id="mySidenav" class="sidenav">
    <a href="#" >User</a>
    <router-link id="blog" to="/user">User</router-link>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
    data(){
      return{
        tasks:[],
      }
    },
    async mounted(){
      const response = await axios.get("http://localhost:3000/tasks")
        this.tasks = response.data
    },
  }
</script>
<style>
#mySidenav a {
  position: absolute;
  left: -80px;
  transition: 0.3s;
  padding: 15px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
}
#big_icon{
color: crimson;
}
#blog {
  top: 80px;
  background-color: #2196F3;
}
#mySidenav a:hover {
  left: 0;
}
  #icon{
    padding: 20px;
    border-radius: 100%;
    background: skyblue;
    color: #fff;
    margin: 20px 0px;
  }
  .head{
    width: 100px;
    height: 70px;
    display: flex;
    align-items: center;
  }
  .Add{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }
  .tasks{
    width: 85%;
    padding:10px 20px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border-left: 10px solid greenyellow;
  }
  .task{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0px;
    gap: 10px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  p{
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    background-color: greenyellow;
    cursor: pointer;
  }
  .delete{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    background-color: crimson;
  }
</style>
