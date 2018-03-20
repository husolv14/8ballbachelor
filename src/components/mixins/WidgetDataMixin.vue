<template>
</template>

<script>
  import ApiFetchMixin from './ApiFetchMixin'

    export default {
        name: "widget-data-mixin",
      data(){
          return{
            widget: {},
            widgetList:[]
          }
      },
      methods: {
        storeWidgetData(){
          this.widgetList = this.getFromDB('widgetData');
          console.log('GET FROM DB : ' + this.WidgetList)
        },
        createWidget(item){
          
        }
      },
      mixins: [ApiFetchMixin],

    }
</script>

<style scoped>

</style>
