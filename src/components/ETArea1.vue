<script>
export default {
    props: [
        "balance"
    ]
}
</script>

<template>
    <div class="ETA1">
        <h1>記帳</h1>
        <div class="bal">
            <h2>近期金錢情況</h2>
            <h2>${{ balance }}</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ETA1 {
        height: 100vh;
        width: 30vw;
        background-color: #587cac;
        color: aliceblue;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            position: absolute;
            margin: 0; 
            top: 150px;
        }

        .bal {
            position: absolute;
            margin: 0;
            bottom: 200px;
            text-align: center;
        }
    }
</style>