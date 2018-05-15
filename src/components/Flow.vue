<template>
  <a :href=" '#' + FlowItem.id" draggable="false" class="link">
    <div :id="FlowItem.id" draggable="false" @dblclick ="editFlow(FlowItem.id)"  @click="upDateGrid(FlowItem.id, FlowItem.name)" class="item">
      {{FlowItem.name}}
    </div>
  </a>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: "flow",
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
      'FlowItem'
    ],
    methods: {
      upDateGrid(id, name) {
        this.$emit("updateGrid", id, name)
      },
      close(showModal) {
        console.log("Debug : Cancel")
        this.showModal = false
        return showModal
      },
      editFlow(id){
        this.$emit('editFlow', id)
      },
    }
  }
</script>

<style scoped>
  div:target{
    background-color: rgb(51, 68, 76);
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
    transition: 0.15s ease-in-out;
    font-size: larger;
    color: white;
    user-select: none;
    background-color: rgb(33, 43, 49);
  }

  .item:hover {
    cursor: pointer;
    background-color: rgb(32, 168, 216);
    /*transition:0.1s ease;*/
  }

  .link{
    color: transparent;
    text-decoration-line: none ;
    text-decoration-style: unset;
    text-align: left;
  }
  #tips{
  }
</style>
