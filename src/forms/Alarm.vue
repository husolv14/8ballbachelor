<template>
  <el-form :inline="false">
    <el-form-item>
    <el-select placeholder="Hvem får melding" v-model="form.to" label="Antall Timer">
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
        name: "Alarm",
      data(){
          return{
            form:{
              to:""
            }
          }
      }
    }
</script>

<style scoped>

</style>
