<template>
    <div class="mainWrapper">
        <sidebar v-loading="loadingSidebar" @sidebar-UpdateGrid="updateGrid" @updateList="updateList"
                 @addNewWidget="addNewWidget" :WidgetData="WidgetData">
        </sidebar>
        <grid @grid-create-form="makeForm" :loading="loadingGrid" :ToolData="ToolData"/>
        <!--modal/-->
        <div class="form-wrapper" v-if="showForm">
            <el-form class="form">
                <h1>{{wrapperForm.name}}</h1>
                <span></span>
                <el-form-item label="Input Field" class="formItem" v-if="formInpuField">
                    <el-input v-model="thisForm.input">asd</el-input>
                </el-form-item>
                <el-form-item class="formItem" label="Text Field" v-if="formTextField">
                    <el-input type="textarea" v-model="thisForm.textArea"></el-input>
                </el-form-item>
                <el-form-item label = "Date Picker" class="formItem" v-if="formDatePicker">
                <el-date-picker class="date" type="date" placeholder="Pick a date" v-model="thisForm.date"></el-date-picker>
                </el-form-item>
                <el-form-item label = "Rating" class="formItem" v-if="formRating">
                    <br/>
                    <el-rate
                            class="rating"
                            v-model="value"
                            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                    </el-rate>
                </el-form-item>
                <el-form-item label = "Rating" class="formItem" v-if="formUpload">
                <el-upload
                        class="upload-demo"
                        drag
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                    <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
                </el-upload>
                </el-form-item>

            </el-form>
        </div>
    </div>

</template>

<script>
    import Sidebar from '../components/Sidebar'
    import Grid from '../components/Grid'
    //import Modal from '../components/Modal'
    import ApiFetch from './ApiFetch'
    import axios from 'axios'

    export default {
        name: 'main-wrapper',
        data() {
            return {
                WidgetData: {},
                ToolData: {},
                loadingGrid: false,
                loadingSidebar: false,
                showForm: false,
                wrapperForm: [],
                formInputField: false,
                formTextField: false,
                formDatePicker: false,
                formRating: false,
                formUpload: false,
                thisForm:[],
                value : null
            }

        },
        components: {
            Sidebar,
            Grid,
            ApiFetch
            //Modal
        },
        methods: {
            updateGrid(id) {
                this.loadingGrid = true
                console.log("Updating Grid")
                axios.get(`http://localhost:3000/ToolData?id=` + id)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.ToolData = response.data
                        console.log(response.data)
                        this.loadingGrid = false
                        this.$message({
                            message: 'Hentet data fra tools.',
                            type: 'success'
                        });
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
            addNewWidget(formData) {
                axios.post(`http://localhost:3000/WidgetData`, {
                        name: formData.name,
                        dbName: formData.dbName
                    }
                )
                    .then(response => {
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
                this.showModal = false
                this.$emit('UPDATE')
            },
            updateList() {
                this.loadingSidebar = true
                console.log("UPDATING LIST")
                axios.get(`http://localhost:3000/widgetData`)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.WidgetData = response.data
                        this.loadingSidebar = false
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
            makeForm(form) {
                let i = 0
                this.wrapperForm = form
                this.showForm = true
                for (i = 0; i < form.type.length; i++) {
                    if (form.type[i] == 'Input Field') {
                        this.formInpuField = true
                        this.$message("Skjema laget")
                    }
                    if (form.type[i] == 'Text Field') {
                        this.formTextField = true
                    }
                    if (form.type[i] == 'Date Picker') {
                        this.formDatePicker = true
                    }
                    if (form.type[i] == 'Rating') {
                        this.formRating = true
                    }
                    if (form.type[i] == 'Upload File') {
                        this.formUpload = true
                    }


                }


            }
        },
        created() {
            this.loadingSidebar = true
            axios.get(`http://localhost:3000/widgetData`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.WidgetData = response.data
                    this.loadingSidebar = false

                })
                .catch(e => {
                    this.errors.push(e)
                })
        },


    }
</script>

<style scoped>
    .mainWrapper {
        height: 70em;
        background-color: #f0f3f5;
        width: auto;
    }

    h3 {
        position: relative;
    }

    .form-wrapper {

        display: block;
        height: 200px;
        width: 80%;
        float: left;
    }
    .form{

        width: 20%;
        position: relative;
        left: 40%;
    }
    .formItem{
        width: 300px;
        left: 13%;
        position: relative;
    }
    .date{
        float: left;
    }
    .rating{
        float: left;
    }
</style>
