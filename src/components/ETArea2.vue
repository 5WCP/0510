<script>
    import Popup from "./Popup.vue"
    import Item from "../components/item.vue"
    import Popup2 from "./Popup2.vue"
    export default {
        components: {
            Popup,
            Item,
            Popup2
        },

        props: [
            "income",
            "expence",
            "itemList"
        ],

        data() {
            return {
                isAddShow: false,
                isDeleShow: false,
                selectedItemIndex: -1
            }
        },

        methods: {
            addShow() {
                this.isAddShow = !this.isAddShow
            },

            deleShow() {
                this.isDeleShow = !this.isDeleShow
            },
            seleItem(index) {
                if(this.selectedItemIndex === index) {
                    this.selectedItemIndex = -1
                } else {
                    this.selectedItemIndex = index;
                }
            },
            push(status) {
                this.$emit("push", status)
            },
            push2(status2) {
                this.$emit("push2", status2)
            }
        },
        computed: {
            isSelected() {
                return index => this.selectedItemIndex === index;
            }
        }
    }
</script>

<template>
    <div class="ETA2">
        <div class="ETA2A">
            <div class="inEx">
                <div class="in">
                    <h2>收入</h2>
                    <h2>${{ income }}</h2>
                </div>
                <div class="ex">
                    <h2>開銷</h2>
                    <h2>${{ expence }}</h2>  
                </div>
            </div>
            <div class="btnArea">
                <button @click="addShow">新增記帳項目</button>
                <button @click="deleShow">刪除記帳項目</button>
            </div>
            <Popup 
            v-show="isAddShow"
            @switch="addShow"
            @push="push"
            />
            <Popup2 
            v-show="isDeleShow"
            @switch2="deleShow"
            :index="selectedItemIndex"
            @push2="push2"
            />
            <div class="tranArea">
                <Item 
                v-for="(item, index) in itemList"
                :key= "item.index"
                :item= "item.item"
                :money= "item.money"
                @click= "seleItem(index)"
                :class= "{'selected' : isSelected(index)}"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ETA2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70vw;
        height: 100vh;
        .ETA2A {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .inEx , .btnArea {
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0 20px;

                .in {
                    color: green;
                }

                .ex {
                    color: red;
                }
            }

            .tranArea {
                margin-top: 20px;
                overflow: auto;
                height: 40vh;

                .selected {
                    background-color: #1150a1;
                }
            }

            button {
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
        }
    }
</style>