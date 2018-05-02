<template>
    <!--<ListGenerator :thisProp="widgetData"></ListGenerator>-->
    <div draggable="false">

        <!--<draggable-->
        <!--:options="{animation:150,group:{name: 'grid', put:false},multipleDropzonesItemsDraggingEnabled: true}" class="list" >-->
        <div draggable="false" @dblclick="upDateGrid(widgetItem.id, widgetItem.name)" class="item">
            {{widgetItem.name}}
            <!--<br><img class="icon" :src="widgetItem.icon"/>-->
        </div>
        <!--</draggable>-->
        <!--<div v-if="showModal">-->
        <!--<Modal :widgetItem="widgetItem" @close="close(showModal)" @submit="submit(showModal,widgetItem)"></Modal>-->
        <!--</div>-->
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "widget",
        data() {
            return {
                // widgetData: [],
                // errors: [],
                showModal: false
            }
        },

        components: {
            draggable
        },
        props: [
            'widgetItem'
        ],
        methods: {
            submit(showModal, widgetItem) {
                console.log("Submit")
                console.log(widgetItem.description)
                this.showModal = false
                return showModal
            },
            upDateGrid(id,name) {
                this.$emit("updateGrid",id,name)
            },
            close(showModal) {
                console.log("Cancel")
                this.showModal = false
                return showModal

            }
        }
    }
</script>

<style scoped>
    .icon {
        height: 120px;
        width: 200px;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    .item {
        height: 35.55px;
        text-align: left;
        min-width: 233.78px;
        margin: 0px 0px 0px 0px;
        padding-top: 10px;
        padding-left: 40px;
        padding-right: 0px;
        width: auto;
        /*background-color: #000000;*/
        transition: box-shadow 0.1s ease-in-out;
        font-size: larger;
        color: white;
        user-select: none;
        background-color: rgb(33, 43, 49);
    }

    .item:hover {
      cursor:pointer;
      background-color: rgb(32, 168, 216);
      /*transition:0.1s ease;*/
    }

    .item:target {
    }

    .item:active:hover {
    }
  .item:active{

  }
</style>
