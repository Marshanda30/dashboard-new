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
            </div>
            <!-- /.col -->
            <div class="col-sm-6" style="margin-left:60%;">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/#/home">Home</a></li>
                <li class="breadcrumb-item active">Sensor</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card" style="display:table-cell">
                <div class="card-header">
                  <h2 class="card-title">Data Sensor</h2>

              
                </div>
                <br />
                <div class="col-12">
                  <div class="alert alert-info" role="alert">
                    <b>Info:</b> Menampilkan list data sensor dalam sistem
                  </div>
                </div>
                <div class="col-12">
                  <router-link to="addSensor">
                    <button type="submit" class="btn btn-success float-right">
                      Add New
                    </button>
                  </router-link>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table class="table table-bordered table-striped" id="datatable">
                    <thead>
                      <tr class="text-center">
                        <th>No</th>
                        <th>AC(V)</th>
                        <th>AC(A)</th>
                        <th>DC1(V)</th>
                        <th>DC1(A)</th>
                        <th>DC2(V)</th>
                        <th>DC2(A)</th>
                        <th>DC3(V)</th>
                        <th>DC3(A)</th>
                        <th>DC4(V)</th>
                        <th>DC4(A)</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(user, index) in users" :key="user.id">
                        <td>{{ index + 1}}</td>
                        <td>{{ user.tegangan_ac + " V"}}</td>
                        <td>{{ user.arus_ac + " A"}}</td>
                        <td>{{ user.tegangan_dc1 + " V" }}</td>
                        <td>{{ user.arus_dc1 + " A"}}</td>
                        <td>{{ user.tegangan_dc2 + " V"}}</td>
                        <td>{{ user.arus_dc2 + " A"}}</td>
                        <td>{{ user.tegangan_dc3 + " V"}}</td>
                        <td>{{ user.arus_dc3 + " A"}}</td>
                        <td>{{ user.tegangan_dc4 + " V"}}</td>
                        <td>{{ user.arus_dc4 + " A"}}</td>
                        <td>{{ new Date(user.updatedAt).toLocaleString()}}</td>
                        <td class="text-center">
                          <router-link :to="{ name: 'editsensor',  params: {id: user.id}}">
                            <button class="btn btn-info btn-sm selected">Edit</button>
                          </router-link>
                          <button @click="deleteData(user.id)" class="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
            </div>
          </div>
          <!-- /.card -->
        </div>
      </div>
      <!-- /.row -->
    </div>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
  import NavBar from "../layout/Navbar.vue";
  import SideBar from "../layout/Sidebar.vue";
  import FootBar from "../layout/Footbar.vue";

  import axios from "axios";
  import Swal from 'sweetalert2';
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'datatables.net-dt/js/dataTables.dataTables';
  import 'datatables.net-dt/css/jquery.dataTables.min.css';
  import $ from 'jquery';

  export default {
    components: {
      NavBar,
      SideBar,
      FootBar,
    },
    data() {
      return {
        users: [],
        errors: null,
        search: ''
      };
    },
    mounted() {
      this.getUsers(
        axios.get("https://btsapii.herokuapp.com/api/sensor")
        .then((res) => {
          this.users = res.data.data;
          console.log(res)
          $(function () {
            $('#datatable').DataTable({
              language: {
                info: "",
                previous: "<i class='fa fa-chevron-left'></i>",
                next: "<i class='fa fa-chevron-right'><i>",
                last: "last"
              }
            })
          })
        })
      );
      this.timer = setInterval(this.getUsers, 5000);
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
      deleteData(id) {
        Swal.fire({
          title: "Anda Yakin Ingin Menghapus Sensor Ini ?",
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
                  "Terhapus", "Sensor Anda Sudah Terhapus", "success");
                this.getUsers();
                console.log(res);
              })
              .catch((err) => {
                Swal.fire(
                  "Gagal", "Sensor Anda Gagal Dihapus", "warning");
                console.log(err)
              })
          } else {
            Swal.fire(
              "Gagal", "Sensor Anda Gagal Dihapus", "warning");
          }
        })
      }
    }
  };
</script>

<style>
  h2 {
    font-family: "Bahnschrift SemiBold";
  }

  button {
    font-family: "Franklin Gothic Medium";
    margin-right: 15px;
  }

  .btn-info {
    font-family: "Franklin Gothic Medium";
  }

  .selected {
    margin-right: 10px;
  }

  .alert-info {
    font-family: "Times New Roman";
    margin-left: 15px;
    margin-right: 15px;
  }
</style>