<template>
  <!--<ListGenerator :thisProp="widgetData"></ListGenerator>-->
  <div draggable="false">

    <!--<draggable-->
    <!--:options="{animation:150,group:{name: 'grid', put:false},multipleDropzonesItemsDraggingEnabled: true}" class="list" >-->
    <div draggable="false" @dblclick="showModal=true" class="item">
      <p class="thisText">{{widgetItem.name}}</p>
      <el-dialog :title="widgetItem.name"
                 :visible.sync="showModal"
                 width="40%">
        <!--<vue-form-generator :schema="widgetItem.schema"></vue-form-generator>-->
      </el-dialog>

    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import ListGenerator from './ListGenerator'
  import Modal from './Modal'

  export default {
    name: "tool",
    data() {
      return {
        // widgetData: [],
        // errors: [],
        showModal: false
      }
    },

    components: {
      draggable,
      ListGenerator,
      Modal
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
      upDateGrid(id) {
        this.$emit("updateGrid",id)
      },
      close(showModal) {
        console.log("Cancel")
        this.showModal = false
        return showModal

      },
      destroyEmit(){
        this.$emit('destroy')

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
    height: 80.55px;
    text-align: center;
    min-width: 233.78px;
    margin: 20px 10px 10px 10px;
    background-color: #20a8d8;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow 0.1s ease-in-out;
    font-size: larger;
    color: white;
    float:left;
  }

  .item:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: grab;
  }

  .item:active {
    cursor: grabbing;
  }

  .item:active:hover {
    cursor: grabbing
  }
  .thisText{
    padding-top: 10px;
  }
</style>
