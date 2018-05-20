<template>
  <el-form  label-position="top" :inline="false" class="form">
    <el-form-item label="Mail som skal sendes" >
      <el-input :span="2" type="textarea" v-model="form.content"></el-input>
    </el-form-item>
    <el-form-item label="Hvem får melding">
      <el-select placeholder="Velg en mail" v-model="form.mail" label="Antall Timer">
        <el-option key="donald.duck@gmail.com" value="donald.duck@gmail.com">
          donald.duck@gmail.com
        </el-option>
        <el-option key="dollyduck@gmail.com" value="dollyduck@gmail.com">
          dolly.duck@gmail.com
        </el-option>
      </el-select>
    </el-form-item>

  </el-form>
</template>

<script>
  export default {
    name: "Mail",
    props: [
      'run'
    ],

    data() {
      return {
        form: {
          content:"Hei Securitas! Kan dere ordne med nøkkelkort til disse ansatte?",
          mail:""
        },
        formArray:{}
      }
    },
    watch:{
      run: function () {
        this.$emit('mailform', this.form )
      }
    },
  }
</script>

<style scoped>


</style>
