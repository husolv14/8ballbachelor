<template>
  <div id="app">
    <!--<top-bar></top-bar>-->
    <main-wrapper/>
    <!--<button @click="showWhich ='DynamicOne'">Show one</button>-->
    <!--<button @click="showWhich ='DynamicTwo'">Show two</button>-->
    <!--<component :is="showWhich"-->
    <!--v-bind="person"-->
    <!--@upperCase="switchCase('upperCase')"-->
    <!--@lowerCase="switchCase('lowerCase')">-->
    <!--</component>-->
    <!--<h1>Data Binding</h1>-->
    <!--<component v-for="(field, index) in schema"-->
    <!--:key="index"-->
    <!--:is="field.fieldType"-->
    <!--v-model="formData[field.name]"-->
    <!--v-bind="field">-->
    <!--</component>-->
    <!--<form-generator :schema="schema"-->
                    <!--v-model="formData">-->
    <!--</form-generator>-->
    <!--<p>-->
      <!--Hello {{formData.title}} {{formData.firstName}} {{formData.lastName}},-->
      <!--You are {{formData.age}} years old-->
    <!--</p>-->

  </div>
</template>

<script>
  import MainWrapper from './components/MainWrapper'

  export default {
    name: 'App',
    components: {
      MainWrapper,
    },
    data() {
      return {
      }


    },
    methods: {
    }
  }
</script>

<style>
  #app {
    font-family             : 'Avenir', Helvetica, Arial, sans -serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align              : center;
    color                   : #2c3e50;
  }
  body{
    background-color: #e4e5e6;
  }

</style>
