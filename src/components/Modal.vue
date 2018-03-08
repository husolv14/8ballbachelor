<template>
  <div>
    <!--<transition name="modal">-->
      <!--<div class="modal-mask">-->
                <!--<div class="modal-wrapper">-->
                  <!--<button type="button" class="close" @click="showModal=false">-->
                    <!--<span aria-hidden="true">&times;</span>-->
                  <!--</button>-->
                  <!--<div class="modal-dialog">-->
                    <!--<div class="modal-content">-->
                      <!--<div class="modal-header">-->
                        <!--<h4 class="modal-title">{{ }}</h4>-->
                        <!--<p>{{test.name}}</p>-->
              <!--</div>-->
              <!--<div class="modal-body">-->
                <!--<h1>{{test.id}}</h1>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</transition>-->
    <h1>{{test.id}}</h1>
  </div>
</template>

<script>

  import Bmodal from 'bootstrap-vue/src/components/modal/modal.js'

  export default {
    name: "modal",
    data() {
      return {
        showModal: false

      }
    },
    components: {
      Bmodal
    },
    props:[
      "myProp",
      'test'
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
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    width: 40%;
    height: auto;
    border: 1px solid lightgray;
  }

  .close {
    float: right;
    border: none;
    color: darkred;
    background-color: white;
    font-size: 35px;
    display: block;
  }

  .modal-content {
    height: 100%;
  }

  .modal-body {
    padding: 20px;
  }
</style>
