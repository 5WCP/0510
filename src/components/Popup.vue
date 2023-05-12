<script>
export default {
    data() {
        return {
            item: "",
            money: ""
        }
    },
    methods: {
        addItem() {
            let itemList = JSON.parse(localStorage.getItem("itemList")) || [];
            let income = 0;
            let expence = 0;
            let balance = 0;
            itemList.push({item: this.item, money: this.money});
            itemList.forEach(function(i) {
                if(i.money < 0) {
                    expence -= i.money
                }
                if(i.money > 0) {
                    income += i.money
                }
            })
            balance = income - expence;
            const status= {
                income,
                expence,
                balance,
                itemList
            }
            this.$emit("push",status)
        },
        closeAdd() {
            this.$emit("switch");
        }
        
    }
}
</script>

<template>
    <div class="addTran">

        <div class="card">
            <div class="closeAdd" @click="closeAdd">關閉</div>
            <div>
                <label for="item">項目</label>
                <input type="text" id="item" v-model="item">
            </div>
            <div>
                <label for="money">收+支-</label>
                <input type="number" id="money" v-model="money">
            </div>
            <button @click="addItem">新增</button>
        </div>

        <div class="bg"></div>

    </div>
</template>

<style lang="scss" scoped>
    .addTran {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .card {
            width: 200px;
            background-color: #fff;
            border-radius: 5px;
            padding: 6px 8px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;

            button {
                margin-top: 15px;
                background-color: #587cac;
                padding: 4px 6px;
                border-radius: 5px;
                transition: 0.6s;
                cursor: pointer;

                &:hover {
                    background-color: #07397a;
                    border-radius: 10px;
                    color: aliceblue;
                    padding: 8px 10px;
                }
            }

            input {
                margin: 10px 0;
            }

            .closeAdd {
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

        .bg {
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