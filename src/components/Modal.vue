<template>
  <el-dialog
    :title="widgetItem.name"
    :visible.sync="showModal"
    width="40%"
    :before-close="close">
    <span>{{widgetItem.description}}</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="close">Cancel</el-button>
    <el-button type="primary" @click="submit(message)">Confirm</el-button>
    </span>


  <!--<transition v-if="showModal" name="modal">-->
    <!--<div class="modal-mask">-->
      <!--<div class="modal-wrapper">-->
        <!--<span aria-hidden="true"></span>-->
        <!--<div class="modal-dialog">-->
          <!--<div class="modal-content">-->
            <!--<div class="modal-header">-->
              <!--<h1 class="modal-title">{{widgetItem.name}}</h1>-->
            <!--</div>-->
            <!--<div class="modal-body">-->
              <!--<img class="icon" :src="widgetItem.icon"/>-->

              <div v-show="widgetItem.standard">
                <el-input
                  type="textarea"
                  autosize
                  placeholder="Please input"
                  v-model="message = widgetItem.standard"
                  :value="message"
                >
                </el-input>
                <p></p>
                <br><br>
              </div>
            <!--</div>-->
            <div v-show="widgetItem.mail">
              <!--<p>Avsender</p>-->
              <!--<el-select placeholder="Select" class="select" id="from" :value="mail">-->
                <!--<el-option :label="mail" :value="mail" v-for="mail in widgetItem.mail">{{mail}}</el-option>-->
              <!--</el-select>-->


              <br>
            </div>

            <div v-show="widgetItem.user">
              <!--<input type="text"/>-->
              <!--<div>{{query('id=2')}}</div>-->
              <!--<textarea rows="20" cols="70">se her: {{userData}}</textarea>-->
              <span>Navn</span>
              <el-input label = "navn" placeholder="Please input" v-model="input"></el-input>
              <span>Dato</span>
              <el-date-picker
                v-model="datepick"
                type="date"
                placeholder="Velg en dato">
              </el-date-picker>


            </div>
            <br>
  </el-dialog>
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

  <!--</transition>-->

</template>

<script>

  // import Bmodal from 'bootstrap-vue/src/components/modal/modal.js'
  import axios from 'axios'
  import Element from 'element-ui'
  import { Message } from 'element-ui';

  export default {
    name: "modal",
    data() {
      return {
        showModal: true,
        userData: [],
        message:"",
        randomValue: "",
        input: "",
        datepick:""

      }
    },
    methods: {
      query(data) {
        axios.get(`http://localhost:3000/users?` + data)
          .then(response => {
            // JSON responses are automatically parsed.
            this.userData = response.data
            return this.userData
          })
          .catch(e => {
            this.errors.push(e)
          })


      },
      submit(message) {
        this.$emit('submit')
        this.$message({
          message: 'Mail was sucessfully submitted',
          type: 'success'
        })
        axios.post(`http://localhost:3000/mails`, {
          message
        }

        )
          .then(response => {})
          .catch(e => {
            this.errors.push(e)
          })
      },
      close() {
        this.$emit('close')
      },
      post(data, path){

      }
    },

    components: {
      // Bmodal,
      axios,
      Element,
      Message
    },
    props: [
      "myProp",
      'widgetItem',
      "users"
    ]
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    left: 35%;
    top: 10%;
    background-color: rgb(255, 255, 255);
    display: table;
    color: black;
    min-width: 40%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    width: auto;
    height: auto;
    min-width: 15%;
    border: 1px solid lightgray;
  }

  .close {
    position: fixed;
    float: right;
    border: none;
    color: darkred;
    background-color: white;
    font-size: 35px;
    display: block;
  }

  .modal-content {
    padding: 20px;
    text-align: center;
  }

  .modal-title {
    width: 100%;
  }

  .modal-body {
    padding: 20px;
  }

  /*button {*/
    /*height: 40px;*/
    /*width: 100px;*/
    /*margin-left: 10px;*/
    /*box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);*/
    /*transition: box-shadow 0.1s ease-in-out;*/
    /*border:none;*/
    /*color: white;*/
  /*}*/
  /*button:hover {*/
    /*box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);*/

  /*}*/

  .icon {
    height: 80px;
  }

  .select {
    font-size: 20px;
  }
  .modal-enter-active {
    transition: all .5s ease;
  }
  .modal-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .modal-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-20px);
    opacity: 0;
  }
  /*.button-submit{*/
    /*background-color: mediumseagreen;*/
  /*}*/
  /*.button-close{*/
    /*background-color: indianred;*/
  /*}*/
</style>
