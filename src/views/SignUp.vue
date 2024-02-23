<template>
    <div>
    <h1>Sign up</h1>
    </div>
    <form>
        <input type="text" placeholder="Enter Name" v-model="users.name">
        <input type="text" placeholder="Enter Email" v-model="users.email">
        <input type="password" placeholder="Enter Password" v-model="users.password">
        <div class="div"><button @click="AddUser">Sign up</button><router-link to="/login"><i class="fa-solid fa-arrow-right"></i></router-link></div>
    </form>
</template>

<script>
import axios from 'axios'

export default{
data(){
    return{
        users:{
            name:'',
            email:'',
            password:''
        }
    }
},
methods:{
    async AddUser(){
        const result = await axios.post("http://localhost:3000/users",{
            name:this.users.name,
            email:this.users.email,
            password:this.users.password
        })
        if(result.status === 200){
            alert("Sign Up is successful!!!")
            this.$router.push({name:'login'})
        }
    }
},
mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: 'login' })
        }
    }
}
</script>

<style scoped>
  i{
    padding: 14px 20px;
    border-radius: 10px;
    background-color: skyblue;
    color: #fff;
    border: 1px solid grey;
    margin-top: 10px;
  }
  .div{
    align-items: center;
    width: 100%;
    display: flex;
    gap: 10px;
  }
  input{
    width: 80%;
    padding: 14px 32px;
    border: 1px solid grey;
    border-radius: 10px ;
    box-shadow: 2px 1px 13px 2px rgba(153,153,153,0.43) inset;
-webkit-box-shadow: 2px 1px 13px 2px rgba(153,153,153,0.43) inset;
-moz-box-shadow: 2px 1px 13px 2px rgba(153,153,153,0.43) inset;
  }
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    align-items: center;
    gap: 10px;
  }
  button{
    width: 80%;
    padding: 14px 32px;
    background: skyblue;
    border: 1px solid grey ;
    border-radius:10px ;
    margin-top: 10px;
    color: #fff;
  }
</style>