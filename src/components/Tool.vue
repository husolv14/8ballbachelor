<template>
  <!--<ListGenerator :thisProp="widgetData"></ListGenerator>-->
  <div>
    <!--<draggable-->
    <!--:options="{animation:150,group:{name: 'grid', put:false},multipleDropzonesItemsDraggingEnabled: true}" class="list" >-->
    <div draggable="true" @destroy="destroyEmit"@dblclick="showModal=true" class="item">
      <p class="toolText">{{toolItem.name}}</p>
      <el-dialog :title="toolItem.name"
                 :visible.sync="showModal"
                 width="40%">
        <el-button icon="el-icon-delete" circle @click="destroyEmit(toolItem.id)"></el-button>
        <!--<vue-form-generator :schema="toolItem.schema"></vue-form-generator>-->
        <!--<form-generator :schema="toolItem.schema"></form-generator>-->

      </el-dialog>

    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'


  export default {
    name: "tool",
    data() {
      return {
        // widgetData: [],
        // errors: [],
        showModal: false,
        conditional: false
      }
    },

    components: {
      draggable
    },
    props: [
      'toolItem'
    ],
    methods: {

      upDateGrid(id) {
        this.$emit("updateGrid",id)
      },
      close(showModal) {
        console.log("Cancel")
        this.showModal = false
        return showModal

      },
      destroyEmit(id){
        console.log('Starting destroy emit with ID : ' + id)
        this.showModal=false
        this.$emit('destroy', id)
      },

    },
    created(){
        if (this.toolItem.name == 'Conditional'){
          this.conditional = true
          this.$emit('isConditional', this.toolItem.tools)
        }
        else {
          this.$emit('notConditional')
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
    /*transition: box-shadow 1s ease-in-out;*/
    font-size: larger;
    color: white;
    float:left;
  }

  .item:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: grab;
  }
  .toolText{
  }

  /*.item:active {*/
    /*cursor: grabbing;*/
  /*}*/

  /*.item:active:hover {*/
    /*cursor: grabbing*/
  /*}*/
  .thisText{
    padding-top: 10px;
  }
</style>
