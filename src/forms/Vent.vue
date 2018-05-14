<template>
  <el-form :inline="false">
    <el-form-item>
    <el-select placeholder="Velg antall timer" v-model="form.time" label="Antall Timer">
      <el-option key="24" value="24">
        24
      </el-option>
      <el-option key="48" value="48">
        48
      </el-option>
    </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "Vent",
      data(){
          return{
            form:{
              time: ""
            }
          }
      }
    }
</script>

<style scoped>

</style>
