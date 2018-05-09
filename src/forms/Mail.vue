<template>
  <el-form  label-position="top" :inline="false" class="form">
    <el-form-item label="Mail som skal sendes" >
      <el-input :span="2" type="textarea" value="Hei Securitas! Kan dere ordne med nøkkelkort til disse ansatte?"></el-input>
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
    <el-button type="primary" @click="">Create</el-button>
    <el-button @click="showModal= false">Cancel</el-button>

  </el-form>
</template>

<script>
  export default {
    name: "Mail",
    data() {
      return {
        form: {
          content:"",
          mail:""
        }
      }
    }
  }
</script>

<style scoped>


</style>
