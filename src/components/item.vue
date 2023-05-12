<script>
export default {
    props: [
        "item",
        "money"
    ]
}
</script>

<template>
    <div class="item">
        <h2>{{ item }}</h2>
        <h2 :class="money > 0 ? 'in' : 'ex'">${{ money }}</h2>
    </div>
</template>

<style lang="scss" scoped>
    .item {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        border:solid 2px black;
        border-radius: 5px;
        width: 28vw;
        transition: 0.6s;
        cursor: pointer;

        &:hover {
            background-color: #587cac;
            color: aliceblue;
        }
        
        h2{
            margin: 0 10px;
        }

        .in {
            color: green;
        }

        .ex {
            color: red;
        }
    }
</style>