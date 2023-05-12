<script>
import ETArea1 from "../components/ETArea1.vue"
import ETArea2 from "../components/ETArea2.vue"
export default {
    components: {
        ETArea1,
        ETArea2
    },
    data() {
        return {
            income: +localStorage.getItem("income"),
            expence: +localStorage.getItem("expence"),
            balance: +localStorage.getItem("balance"),
            itemList: JSON.parse(localStorage.getItem("itemList")) || []
        }
    },
    methods: {
        getStatus(status) {
            this.income = status.income;
            this.expence = status.expence;
            this.balance = status.balance;
            this.itemList = status.itemList;
            localStorage.setItem("itemList", JSON.stringify(status.itemList));
            localStorage.setItem("income" , status.income);
            localStorage.setItem("expence" , status.expence);
            localStorage.setItem("balance" , status.balance);
        },
        getStatus2(status2) {
            this.income = status2.income;
            this.expence = status2.expence;
            this.balance = status2.balance;
            this.itemList = status2.itemList;
            localStorage.setItem("itemList", JSON.stringify(status2.itemList));
            localStorage.setItem("income" , status2.income);
            localStorage.setItem("expence" , status2.expence);
            localStorage.setItem("balance" , status2.balance);
        }
    },
    beforeCreate() {
        if(!sessionStorage.getItem("account") || !sessionStorage.getItem("password")){
            alert("請登入")
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <div class="ETA">
        <ETArea1 :balance="balance" />
        <ETArea2 @push="getStatus" @push2="getStatus2" :income="income" :expence="expence" :itemList="itemList" />
    </div>
</template>

<style lang="scss" scoped>
    .ETA {
        display: flex;
    }
</style>