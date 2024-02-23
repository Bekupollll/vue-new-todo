<template>
    <h1>Login</h1>
    <div class="form">
        <input type="text" placeholder="Enter Your Name" v-model="name">
        <input type="password" placeholder="Enter Your Password" v-model="password">
        <div class="div"><button @click="loginUser">Login</button><router-link to="/sign-up"><i class="fa-solid fa-arrow-left"></i></router-link></div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        async loginUser() {
            try {
                const result = await axios.get(`http://localhost:3000/users?name=${this.name}&password=${this.password}`)
                if (result.status === 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                    this.$router.push({ name: "tasks" })
                } else {
                    console.error("User not found or incorrect credentials")
                }
            } catch (error) {
                console.error("Error occurred while fetching user data:", error)
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: 'tasks' })
        }
    }
}
</script>
<style scoped>
  input{
    width: 80%;
    padding: 14px 32px;
    border: 1px solid grey;
    border-radius: 10px ;
    box-shadow: 2px 1px 13px 2px rgba(153,153,153,0.43) inset;
-webkit-box-shadow: 2px 1px 13px 2px rgba(153,153,153,0.43) inset;
-moz-box-shadow: 2px 1px 13px 2px rgba(153,153,153,0.43) inset;
    }
  .div{
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  i{
    padding: 14px 20px;
    background-color: skyblue;
    color: #fff;
    border: 1px solid grey;
    border-radius: 10px;
    margin-top: 10px;
  }
  .form{
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