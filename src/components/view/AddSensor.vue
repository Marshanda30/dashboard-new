<template>
    <div>
        <nav-bar></nav-bar>
        <side-bar></side-bar>
        <div class="content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <form @submit.prevent="saveSensor">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Tegangan AC</label>
                                    <input type="text" class="form-control" v-model="form.tegangan_ac">
                                </div>
                                <div class="form-group">
                                    <label for="name">Arus AC</label>
                                    <input type="text" class="form-control" v-model="form.arus_ac">
                                </div>
                                <div class="form-group">
                                    <label for="name">Tegangan DC 1</label>
                                    <input type="text" class="form-control" v-model="form.tegangan_dc1">
                                </div>
                                <div class="form-group">
                                    <label for="name">Arus DC 1</label>
                                    <input type="text" class="form-control" v-model="form.arus_dc1">
                                </div>
                                <div class="form-group">
                                    <label for="name">Tegangan DC 2</label>
                                    <input type="text" class="form-control" v-model="form.tegangan_dc2">
                                </div>
                                <div class="form-group">
                                    <label for="name">Arus DC 2</label>
                                    <input type="text" class="form-control" v-model="form.arus_dc2">
                                </div>
                                <div class="form-group">
                                    <label for="name">Tegangan DC 3</label>
                                    <input type="text" class="form-control" v-model="form.tegangan_dc3">
                                </div>
                                <div class="form-group">
                                    <label for="name">Arus DC 3</label>
                                    <input type="text" class="form-control" v-model="form.arus_dc3">
                                </div>
                                <div class="form-group">
                                    <label for="name">Tegangan DC 4</label>
                                    <input type="text" class="form-control" v-model="form.tegangan_dc4">
                                </div>
                                <div class="form-group">
                                    <label for="name">Arus DC 4</label>
                                    <input type="text" class="form-control" v-model="form.arus_dc4">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <foot-bar></foot-bar>
    </div>
</template>

<script>
    import NavBar from "../layout/Navbar.vue";
    import SideBar from "../layout/Sidebar.vue";
    import FootBar from "../layout/Footbar.vue";
    import Swal from "sweetalert2";
    import axios from "axios";

    export default {
        components: {
            NavBar,
            SideBar,
            FootBar,
        },
        data() {
            return {
                form: {
                    tegangan_ac: "",
                    arus_ac: "",
                    tegangan_dc1: "",
                    arus_dc1: "",
                    tegangan_dc2: "",
                    arus_dc2: "",
                    tegangan_dc3: "",
                    arus_dc3: "",
                    tegangan_dc4: "",
                    arus_dc4: ""
                },
                users: [],
            };
        },
        mounted() {
            this.getUsers()
        },
        methods: {
            getUsers() {
                axios
                    .get("https://btsapii.herokuapp.com/api/sensor")
                    .then((res) => {
                        this.users = res.data.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            saveSensor() {
                axios
                    .post("https://btsapii.herokuapp.com/api/sensor/create", this.form)
                    .then(res => {
                        Swal.fire(
                            "Berhasil","Data Anda Berhasil Ditambahkan","success");
                        console.log(res)
                        this.$router.push({
                            name: "Tabel"
                        })
                    })
                    .catch(err => {
                        Swal.fire(
                            "Gagal","Data Anda Gagal Ditambahkan","warning");
                        console.log(err)
                    })
            },
        }
    }
</script>