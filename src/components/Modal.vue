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
              <div v-show="widgetItem.mail">
                <p>Avsender</p>

                <select class="select" id="from">
                  <option v-for="mail in widgetItem.mail">{{mail}}</option>
                </select>
                </br>

                <p>Mottaker</p>
                <select class="select" id="to">
                  <option v-for="mail in widgetItem.mail">{{mail}}</option>
                </select>
                <br><br>
                ​
                <textarea rows="10" cols="70">{{widgetItem.standard}}</textarea>

              </div>
              <br><br>
              <button>Submit</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>

  import Bmodal from 'bootstrap-vue/src/components/modal/modal.js'

  export default {
    name: "modal",
    data() {
      return {
        showModal: true

      }
    },
    components: {
      Bmodal
    },
    props: [
      "myProp",
      'widgetItem',
      "showModal"
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
  .icon{
    height: 80px;
  }
  .select{
    font-size: 20px;
  }
</style>
