<template>
  <div @dblclick="showModal=true">
    <div draggable="true" @destroy="destroyEmit">
      <p class="toolText">{{toolItem.name}}</p>
      <el-dialog :title="toolItem.name"
                 :visible.sync="showModal"
                 width="40%">

        <div class="form" v-if="toolItem.name === 'Mail'"><Mail></Mail></div>
        <div class="form" v-if="toolItem.name === 'Vent'"><Vent></Vent></div>
        <div class="form" v-if="toolItem.name === 'Gjenta'"><Gjenta></Gjenta></div>
        <div class="form" v-if="toolItem.name === 'Alarm'"><Alarm></Alarm></div>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitTool(value)">Lagre</el-button>
        <el-button @click="showModal= false">Avbryt</el-button>
          <el-popover
            placement="top"
            width="160"
            v-model="showSure">
  <div>Er du sikker?<br> </div>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="showSure = false">Avbryt</el-button>
    <el-button type="danger" size="mini" @click="destroyEmit(toolItem.id)">Bekreft</el-button>
  </div>
  <el-button class="del" type="danger" icon="el-icon-delete" circle slot="reference"></el-button>
</el-popover>

          <!--<el-button class="del" type="danger" icon="el-icon-delete" circle @click="destroyEmit(toolItem.id)"></el-button>-->
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Mail from '../forms/Mail'
import Vent from '../forms/Vent'
import Gjenta from '../forms/Gjenta'
import Alarm from '../forms/Alarm'

  export default {
    name: "tool",
    data() {
      return {
        // widgetData: [],
        // errors: [],
        showModal: false,
        conditional: false,
        showSure: false
      }
    },
    components:{
      Mail,
      Vent,
      Gjenta,
      Alarm
    },
    props: [
      'toolItem', 'index'
    ],
    methods: {
      test(){
        alert('works')
      },
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
        this.showSure= false
        this.showModal=false
        this.$emit('destroy', id)
      },

    },
    created(){
        if (this.toolItem.name == 'Conditional'){
          this.conditional = true
          this.$emit('isConditional', this.toolItem.tools)
        }
    }
  }
</script>

<style scoped>
  .form{
    width: 600px;
    position: relative;
    margin: auto;
    margin-bottom: 25px;
  }
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
    background-color: rgb(32, 168, 216);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow 100ms ease-in-out;
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
  .del{
    margin-left: 15px;
  }
  .thisText{
    padding-top: 10px;
  }
</style>
