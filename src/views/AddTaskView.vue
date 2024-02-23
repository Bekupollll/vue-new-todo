<template>
  <div class="about">
    <router-link to="/"><i class="fa-solid fa-chevron-left"><p>back</p></i></router-link>
    <h1>Add Task</h1> 
    <img src="../img/ca9e0b4b0c9541dae7b72fa1fce0ce7b.jpg" alt="">
    <h3>{{ tasks.name }}</h3>
    <form>
      <input type="text" name="name" placeholder="Add New Task" v-model="tasks.name">
       <button @click="addTask"><i class="fa-solid fa-paper-plane"></i></button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {
  },
  data(){
    return{
      tasks:{
        name:''
      }
    }
  },
  methods:{
    async addTask(){
      console.log('connect')
      const result = await axios.post("http://localhost:3000/tasks",{
        name:this.tasks.name
      })
      if(result.status === 201){
        alert("Add task is succesfull!!!")
        this.$router.push({name:'tasks'})
      }
    }
  },
}</script>

<style scoped>
  button{
    padding: 14px 32px;
    background: skyblue;
    border: 1px solid grey ;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
  }
  img{
    width: 100%;
    height: 200px;
    border-radius: 10px;
    border: 1px solid gray;
  }
  i{
    display: flex;
    align-items:center ;
    text-decoration: none;
    font-size: 20px;
    color: skyblue;
    margin-bottom: 5px;
    text-decoration: none;
  }
  input{
    padding: 14px 32px;
    border: 1px solid grey;
    width: 60%;
    border-radius: 10px 0px 0px 10px ;
    box-shadow: 2px 1px 13px 2px rgba(153,153,153,0.43) inset;
-webkit-box-shadow: 2px 1px 13px 2px rgba(153,153,153,0.43) inset;
-moz-box-shadow: 2px 1px 13px 2px rgba(153,153,153,0.43) inset;
  }
  form{
    display: flex;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  form i{
    color: white;
  }
  .about{
    margin-top: 20px;
  }
  p{
    font-size: 10px;
  }
</style>