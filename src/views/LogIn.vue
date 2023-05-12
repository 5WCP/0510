<script>
    export default {
        data() {
            return {
                isShow: true,
                account: "",
                password: "",
                message: ""
            }
        },
        methods: {
            logIn(){
                if(this.account === "Cw" && this.password === "11223355"){
                    sessionStorage.setItem("account" , this.account)
                    sessionStorage.setItem("password" , this.password)
                    this.$router.push('/page')
                } else {
                    this.message = "帳號或密碼錯誤";
                }
            }
        }
    }
</script>

<template>
    <div class="LIArea">
        <h2>記帳網頁</h2>
        <label for="account">帳號</label>
        <input type="text" id="account" v-model="account">
        <label for="password">密碼</label>
        <input type="text" id="password" v-model="password">
        <p>{{ message }}</p>
        <div>
            <button disabled="disabled">Sign Up</button>
            <button @click="logIn">Log In</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .LIArea {
        margin: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        input {
            margin: 10px 0;
            
        }

        button {
            margin: 10px 10px;
            padding: 6px 8px;
            background-color: #85558a;
            cursor: pointer;
            transition: 0.6s;
            border: none;
            border-radius: 5px;

            &:hover {
                background-color: #801a8b;
                color: aliceblue;
            }

            &:active {
                transform: scale(0.9);
            }
        }
    }
</style>