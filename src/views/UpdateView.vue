<template>
    <div class="update">
        <router-link to="/"><i class="fa-solid fa-chevron-left"><p>back</p></i></router-link> 
        <h1>Update Task</h1>
        <img src="../img/ca9e0b4b0c9541dae7b72fa1fce0ce7b.jpg" alt="">
        <h3>{{ tasks.name }} <i @click="Delete" class="fa-solid fa-eraser"></i></h3>
        <form>
            <input type="text" name="name" v-model="tasks.name">
            <button @click="UpdateTask"><i class="fa-solid fa-paper-plane"></i></button>
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default{
    data(){
        return{
            tasks:{
                name:''
            }
        }
    },
    methods:{
        async UpdateTask(){
            const result = await axios.put("http://localhost:3000/tasks/"+this.$route.params.id,{
                name:this.tasks.name
            })
            if(result.status === 200){
                alert("Update Task Successful!!!")
            }
        },
        async Delete() {
  try {
    const result = await axios.delete(`http://localhost:3000/tasks/`+this.$route.params.id,)
    if (result.status === 200) {
      alert("Delete Task Successful!!!")
      await this.fetchTasks()
      this.$router.push({name:'tasks'})
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      alert("Task not found!")
    } 
  }
}
    },
    async mounted(){
        const result = await axios.get('http://localhost:3000/tasks/'+this.$route.params.id)
        this.tasks = result.data
    }
}
</script>

<style scoped>
h3{
    display: flex;
    justify-content: space-evenly;
}
h3 i {
    color: crimson;
}
.update{
    width: 100%;
    margin-top: 20px;
}
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