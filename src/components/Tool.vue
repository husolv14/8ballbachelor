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
        <div v-if="widgetItem.schema">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Navn på skjema">
              <el-input v-model="form.name"></el-input>
              <el-col class="line" :span="2"></el-col>
              <el-col :span="11">
              </el-col>
            </el-form-item>
            <el-form-item label="Skjema innhold">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="Input Field" name="type"></el-checkbox>
                <el-checkbox label="Text Field" name="type"></el-checkbox>
                <el-checkbox label="Date Picker" name="type"></el-checkbox>
                <el-checkbox label="Rating" name="type"></el-checkbox>
                <el-checkbox label="Upload File" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button @click="showModal= false">Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="widgetItem.name === 'Mail'">
          <el-form>
            <el-form-item label="Mail som skal sendes">
              <el-input type="textarea" value="Hei Securitas! Kan dere ordne med nøkkelkort til disse ansatte?"></el-input>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button @click="showModal= false">Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="widgetItem.name ==='Vent'">
          <el-form>
            <el-select placeholder="Velg antall timer" v-model="ventValue" label="Antall Timer">
              <el-option key="24" value="24">
                24
              </el-option>
              <el-option key="48" value="48">
                48
              </el-option>
            </el-select>
          </el-form>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="showModal= false">Cancel</el-button>
        </div>
        <div v-if="widgetItem.name==='Gjenta'">
          <el-form>
          <el-select placeholder="Antall gjentagelser" v-model="gjentaValue" label="Antall Timer">
            <el-option key="1" value="1">
              1
            </el-option>
            <el-option key="2" value="2">
              2
            </el-option>
            <el-option key="3" value="3">
              3
            </el-option>
          </el-select>
          </el-form>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="showModal= false">Cancel</el-button>
        </div>
        <div v-if="widgetItem.name==='Alarm'">
          <el-form>
          <el-select placeholder="Hvem får melding" v-model="gjentaValue" label="Antall Timer">
            <el-option key="donald.duck@gmail.com" value="1">
              donald.duck@gmail.com
            </el-option>
            <el-option key="DollyDuck@gmail.com" value="2">
              dolly.duck@gmail.com
            </el-option>
          </el-select>
          </el-form>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="showModal= false">Cancel</el-button>

        </div>
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
        showModal: false,
          form:{type:[]},
          ventValue: "",
          gjentaValue:""
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
      },
      onSubmit(){
          this.showModal = false
          this.$emit('create-form', this.form)
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
