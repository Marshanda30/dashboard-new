<template>
  <div>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0"></h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/#/home">Home</a></li>
                <li class="breadcrumb-item active">Realtime</li>
              </ol>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <section class="content">
        <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Data Live Realtime</h2>

                            <div class="card-tools">
                              <div class="input-group input-group-sm" style="width: 150px;">
                                <input type="text" name="table_search" class="form-control float-right" placeholder="Cari Tanggal">
                                  
                                  <div class="input-group-append">
                                    <button type="submit" class="btn btn-default">
                                        <i class="fas fa-search"></i>
                                    </button>
                                  </div>
                              </div>
                            </div>
                        </div> <br/>
                        <div class="col-12">  
                          <div class="alert alert-info" role="alert">
                            <b>Info:</b> Menampilkan data sensor secara live realtime
                          </div>
                        </div>
                        <!-- card body -->
                        <div class="card-body">
                          <table class="table table-bordered table-striped">
                            <thead>
                              <tr class="text-center">
                                <th>No</th>
                                <th>TegAC</th>
                                <th>ArusAC</th>
                                <th>TegDC1</th>
                                <th>ArusDC1</th>
                                <th>TegDC2</th>
                                <th>ArusDC2</th>
                                <th>TegDC3</th>
                                <th>ArusDC3</th>
                                <th>TegDC4</th>
                                <th>ArusDC4</th>
                                <th>Date</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(user, index) in users" :key="user.id">
                                <td>{{ index + 1}}</td>
                                <td>{{ user.tegangan_ac }}</td>
                                <td>{{ user.arus_ac }}</td>
                                <td>{{ user.tegangan_dc1 }}</td>
                                <td>{{ user.arus_dc1 }}</td>
                                <td>{{ user.tegangan_dc2 }}</td>
                                <td>{{ user.arus_dc2 }}</td>
                                <td>{{ user.tegangan_dc3 }}</td>
                                <td>{{ user.arus_dc3 }}</td>
                                <td>{{ user.tegangan_dc4 }}</td>
                                <td>{{ user.arus_dc4 }}</td>
                                <td>{{ new Date(user.updatedAt).toLocaleString()}}</td>
                                <td class="text-center">
                                  <button @click="deleteData(user.id)" class="btn btn-sm btn-danger">Delete</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                    </div>
                </div>
              <!-- /.card-header -->
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
    </div>
        <!-- /.container-fluid -->
      </section>
    </div>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import NavBar from '../layout/Navbar.vue'
import SideBar from '../layout/Sidebar.vue'
import FootBar from '../layout/Footbar.vue'

import axios from "axios";
import Swal from 'sweetalert2';

export default {
  components: {
    NavBar,
    SideBar,
    FootBar
  },
  data() {
    return {
      form:{
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
      timer: ''
    };
  },
  // https://btsapii.herokuapp.com/api/sensor
  mounted() {
    this.getUsers();
    this.timer = setInterval(this.getUsers, 5000);
  },
  methods: {
    getUsers() {
      axios
      .get("https://btsapii.herokuapp.com/api/sensor/realtime")
      .then((res) => {
        this.users = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      })
    },
    deleteData(id) {
        Swal.fire({
          title: "Anda Yakin Ingin Menghapus Data Ini ?",
          text: "Klik Batal untuk Membatalkan Penghapusan",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Batal",
          confirmButtonText: "Hapus"
        }).then(result => {
          if (result.value) {
            axios.delete('https://btsapii.herokuapp.com/api/sensor/delete/' + id)
              .then(res => {
                Swal.fire(
                  "Terhapus","Data Anda Sudah Terhapus","success");
                this.getUsers();
                console.log(res);
              })
              .catch((err) => {
                Swal.fire(
                  "Gagal","Data Anda Gagal Dihapus","warning");
                console.log(err)
              })
          } else {
            Swal.fire(
              "Gagal","Data Anda Gagal Dihapus","warning");
          }
        })
      }
  }
};
</script>