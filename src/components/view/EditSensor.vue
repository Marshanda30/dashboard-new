<template>
    <div>
        <nav-bar></nav-bar>
        <side-bar></side-bar>
        <div class="content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <form @submit.prevent="update">
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
    import NavBar from '../layout/Navbar.vue'
    import SideBar from '../layout/Sidebar.vue'
    import FootBar from '../layout/Footbar.vue'
    import axios from 'axios'
    import Swal from 'sweetalert2'


    export default {
        components: {
            NavBar,
            SideBar,
            FootBar
        },
        data() {
            return {
                errors: null,
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
                sensor_id: this.$route.params.id,
            };
        },
        methods: {
            load() {
                axios
                    .get("https://btsapii.herokuapp.com/api/sensor/" + this.sensor_id)
                    .then((res) => {
                        this.form.tegangan_ac = res.data.data.tegangan_ac;
                        this.form.arus_ac = res.data.data.arus_ac;
                        this.form.tegangan_dc1 = res.data.data.tegangan_dc1;
                        this.form.arus_dc1 = res.data.data.arus_dc1;
                        this.form.tegangan_dc2 = res.data.data.tegangan_dc2;
                        this.form.arus_dc2 = res.data.data.arus_dc2;
                        this.form.tegangan_dc3 = res.data.data.tegangan_dc3;
                        this.form.arus_dc3 = res.data.data.arus_dc3;
                        this.form.tegangan_dc4 = res.data.data.tegangan_dc4;
                        this.form.arus_dc4 = res.data.data.arus_dc4;
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            },
            update() {
                axios.put("https://btsapii.herokuapp.com/api/sensor/update/" + this.sensor_id, this.form)
                    .then((res) => {
                        Swal.fire("Berhasil", "Data Anda Sudah Terupdate", "success");
                        this.$router.push({
                            name: "Tabel"
                        })
                        console.log(res)
                    })
                    .catch((err) => {
                        Swal.fire("Gagal", "Data Gagal Terupdate", "warning");
                        console.log(err)
                    })
            }
        },
        mounted() {
            this.load();
        },
    }
</script>