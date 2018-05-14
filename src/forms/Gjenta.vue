<template>
  <el-form :inline="false">
    <el-form-item>
    <el-select placeholder="Antall gjentagelser" v-model="form.repeat" label="Antall Timer">
      <el-option key="1" value="1">
        1
      </el-option>
      <el-option key="2" value="2">
        2
      </el-option>
      <el-option key="3" value="3">
        3
      </el-option>
    </el-select>
    </el-form-item>
  </el-form>

</template>

<script>
    export default {
        name: "Gjenta",
      data(){
          return{
            form:{
              repeat: ""
            }
          }
      }
    }
</script>

<style scoped>

</style>
