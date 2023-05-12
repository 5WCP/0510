<script>
    export default {
        props: [
            "index"
        ],
        methods: {
            deleItem() {
                let itemList = JSON.parse(localStorage.getItem("itemList"));
                let income = 0;
                let expence = 0;
                let balance = 0;
                itemList.splice(this.index, 1);
                itemList.forEach(function(i) {
                    if(i.money < 0) {
                        expence -= i.money
                    }
                    if(i.money > 0) {
                        income += i.money
                    }
                })
                balance = income - expence;
                const status2= {
                income,
                expence,
                balance,
                itemList
                }
                this.$emit("push2",status2)
            },

            closeDele() {
                this.$emit("switch2");
            }
        }
    }
</script>

<template>
    <div class="deleTran">
        <div class="card2">
            <div class="closeDele" @click="closeDele">關閉</div>
            <h2>確定要刪除嗎?</h2>
            <button @click="deleItem">確定</button>
        </div>
        <div class="bg2"></div>
    </div>
</template>

<style lang="scss" scoped>
    .deleTran {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top:0;
        left:0;

        .card2 {
            background-color: white;
            border-radius: 5px;
            width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;

            button {
                padding: 4px 6px;
                margin: 10px 0;
                border-radius: 3px;
                background-color: red;
                cursor: pointer;
                transition: 0.6s;

                &:hover {
                    color: white;
                    transform: scale(1.05);
                }
            }
            .closeDele {
                position: absolute;
                top: 5px;
                right: 5px;
                cursor: pointer;
                padding: 2px 5px;
                border-radius: 2px;
                background-color: #587cac;
                transition: 0.6s;
                
                &:hover {
                    color: #fff;
                    transform: scale(1.05);
                }
            }
        }

        .bg2 {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0a0808;
            opacity: 0.5;
            z-index: -1;
        }

    }
</style>