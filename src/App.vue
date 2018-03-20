<template>
  <div id="app">
    <top-bar></top-bar>
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
    <form-generator :schema="schema"
                    v-model="formData">
    </form-generator>
    <p>
      Hello {{formData.title}} {{formData.firstName}} {{formData.lastName}},
      You are {{formData.age}} years old
    </p>

  </div>
</template>

<script>
  import MainWrapper from './components/MainWrapper'
  import TopBar from './components/TopBar'
  // import DynamicOne from './components/Dynamics/DynamicOne'
  // import DynamicTwo from './components/Dynamics/DynamicTwo'
  import SelectList from './components/SelectList'
  import TextInput from './components/TextInput'
  import NumberInput from './components/NumberInput'
  import FormGenerator from "./components/FormGenerator";

  export default {
    name: 'App',
    components: {
      FormGenerator,
      MainWrapper,
      TopBar,
      // NumberInput,
      // SelectList,
      // TextInput
    },
    data() {
      return {
        formData: {},
        // showWhich: "DynamicOne",
        // person: {
        //   title: "Mr",
        //   firstName: "Ola",
        //   lastName: "Nordmann"
        // },
        schema: [
          {
            fieldType: "SelectList",
            name: "title",
            multi: false,
            label: "Title",
            options: ["Mr", "Ms", "Mx", "Dr", "Madam", "Lord"]
          },
          {
            fieldType: "TextInput",
            placeholder: "First Name",
            label: "First Name",
            name: "firstName"
          },
          {
            fieldType: "TextInput",
            placeholder: "Last Name",
            label: "Last Name",
            name: "lastName"
          },
          {
            fieldType: "NumberInput",
            placeholder: "Age",
            name: "age",
            label: "Age",
            minValue: 0
          }
        ]
      }


    },
    methods: {
      // switchCase: function (toCase) {
      //   Object.keys(this.person).forEach(value => {
      //     this.person[value] =
      //       toCase === "upperCase"
      //         ? this.person[value].toUpperCase()
      //         : this.person[value].toLowerCase()
      //   })
      // }
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
    margin-top              : 60px;
  }

</style>
