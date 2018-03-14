<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <span aria-hidden="true"></span>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">{{widgetItem.name}}</h1>
            </div>
            <div class="modal-body">
              <img class="icon" :src="widgetItem.icon"/>

              <p>{{widgetItem.description}}</p>
              <div v-show="widgetItem.standard">

                <!--<p>Mottaker</p>-->
                <!--<select class="select" id="to">-->
                <!--<option v-for="mail in widgetItem.mail">{{mail}}</option>-->
                <!--</select>-->
                <!--<br>-->
                <!--<p>Mail-Frekvens</p>-->
                <!--<select id="freq">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>
                <br><br>
                ​-->
                <textarea rows="10" cols="70" v-model="message = widgetItem.standard"></textarea>
                <p></p>
                <br><br>
              </div>
            </div>
            <div v-show="widgetItem.mail">
              <p>Avsender</p>
              <select class="select" id="from">
                <option v-for="mail in widgetItem.mail">{{mail}}</option>
              </select>
              <br>
            </div>

            <div v-show="widgetItem.user">
              <input type="text"/>
              <div>{{query('id=2')}}</div>
              <textarea rows="20" cols="70">se her: {{userData}}</textarea>

            </div>
            <br>
            <div></div>
            <button type="submit" @click="submit(message)">Submit</button>
            <button @click="close">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>

  import Bmodal from 'bootstrap-vue/src/components/modal/modal.js'
  import axios from 'axios'

  export default {
    name: "modal",
    data() {
      return {
        showModal: true,
        userData: [],
        message:"",

      }
    },
    methods: {
      query(data) {
        axios.get(`http://localhost:3000/users?` + data)
          .then(response => {
            // JSON responses are automatically parsed.
            this.userData = response.data
            return this.userData.name
          })
          .catch(e => {
            this.errors.push(e)
          })


      },
      submit(message) {
        this.$emit('submit')
        axios.post(`http://localhost:3000/mails`, {
          message
        })
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
      Bmodal,
      axios
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
    transition: opacity .3s ease;
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

  button {
    height: 40px;
    width: 100px;
    margin-left: 10px;
  }

  .icon {
    height: 80px;
  }

  .select {
    font-size: 20px;
  }
</style>
