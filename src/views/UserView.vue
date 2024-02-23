<template>
    <div class="boom">
        <router-link id="dis" to="/"><i class="fa-solid fa-chevron-left"><p>back</p></i></router-link> 
        <div class="bo">
            <h1 id="h1">User</h1>
            <div class="userlog">
                <div class="users">
                    <strong>User Name:</strong><h1>{{ users.length > 0 ? users[0].name : 'Loading...' }}</h1>
                </div>
                <div class="users">
                    <strong>User Email:</strong><h1>{{ users.length > 0 ? users[0].email : 'Loading' }}</h1>
                </div>
                <div class="users">
                    <strong>User Pass:</strong><h1>{{ users.length > 0 ? users[0].password : 'Loading' }}</h1>
                </div>
            </div>
            <a v-on:click="logout" href="#"><i class="fa-solid fa-right-from-bracket"></i></a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
data(){
    return{
        users:[]
    }
},
methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
}},
async mounted() {
    const response = await axios.get("http://localhost:3000/users")
    this.users = response.data
}
}
</script>

<style scoped>
.fa-chevron-left{
    display: flex;
    align-items:center ;
    text-decoration: none;
    font-size: 20px;
    color: skyblue;
    text-decoration: none;
}
p{
    font-size: 12px;
}
.bo{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.boom{
    width: 100%;
    margin: 10px 0px 20px 0px;
    display: flex;
    flex-direction: column;
}
.userlog{
    width: 100%;
    border: 1px solid grey;
    border-left: none;
    border-right: none;
    padding: 10px;
}
h1{
    font-size: 24px;
}
#h1{
    font-size: 30px;
    margin-top: 0px;
    margin-bottom: 10px;
}
.fa-right-from-bracket{
    font-size: 20px;
    padding: 20px;
    background-color: crimson;
    color: #fff;
    border-radius: 50%;
    margin-top: 10px;
}
</style>