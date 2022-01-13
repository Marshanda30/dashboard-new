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
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/#/home">Home</a></li>
                <li class="breadcrumb-item active">Shelter</li>
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
              <div class="card">
                <div class="card-header">
                  <h2 class="card-title">Kelola Shelter(BTS)</h2>

                  <div class="card-tools">
                    <div class="input-group input-group-sm" style="width: 150px;">
                      <input type="text" v-model="search" class="form-control float-right" placeholder="Cari Shelter" />

                      <div class="input-group-append">
                        <button type="submit" class="btn btn-default">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="col-12">
                  <div class="alert alert-info" role="alert">
                    <b>Info:</b> Menampilkan list data shelter BTS dalam sistem.
                  </div>
                </div>
                <div class="col-12">
                  <router-link to="addShelter">
                    <button type="submit" class="btn btn-success float-right">
                      Add New
                    </button>
                  </router-link>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table class="table table-bordered table-striped"  id="datatable">>
                    <thead>
                      <tr class="text-center">
                        <th>No</th>
                        <th>Nama Shelter (BTS)</th>
                        <th>Regional (wilayah)</th>
                        <th>Koordinat</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in items" :key="item.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.nama_shelter }}</td>
                        <td>{{ item.lokasi }}</td>
                        <td>{{ item.koordinat }}</td>
                        <td>{{ new Date(item.updatedAt).toLocaleString() }}</td>
                        <td class="text-center">
                          <router-link :to="{ name: 'editshelter',  params: {id: item.id}}">
                            <button class="btn btn-info btn-sm selected">Edit</button>
                          </router-link>
                          <button @click="deleteData(item.id)" class="btn btn-sm btn-danger">Delete</button>
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
  import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
  import NavBar from "../layout/Navbar.vue";
  import SideBar from "../layout/Sidebar.vue";
  import FootBar from "../layout/Footbar.vue";

  import axios from "axios";
  import Swal from 'sweetalert2'

  export default {
    components: {
      NavBar,
      SideBar,
      FootBar,
    },
    data() {
      return {
        items: [],
        errors: null,
        search: ''
      };
    },
    mounted() {
      this.getUsers();
      this.timer = setInterval(this.getUsers, 5000);
    },
    methods: {
      getUsers() {
        axios
          .get("https://btsapii.herokuapp.com/api/shelter")
          .then((res) => {
            this.items = res.data.data;
              $('#datatable').DataTable();
          })
          .catch((err) => {
            console.log(err);
          })
      },
      saveProduct() {
        axios
          .post("https://btsapii.herokuapp.com/api/shelter/create", this.form)
          .then(res => {
            console.log(res)
            this.$router.push({
              name: "Shelter"
            })
          })
          .catch(err => {
            console.log(err)
          })
      },
      deleteData(id) {
        Swal.fire({
          title: "Anda Yakin Ingin Menghapus Shelter Ini ?",
          text: "Klik Batal untuk Membatalkan Penghapusan",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Batal",
          confirmButtonText: "Hapus"
        }).then(result => {
          if (result.value) {
            axios.delete('https://btsapii.herokuapp.com/api/shelter/delete/' + id)
              .then(res => {
                Swal.fire(
                  "Terhapus", "Shelter Anda Sudah Terhapus", "success");
                this.getUsers();
                console.log(res);
              })
              .catch((err) => {
                Swal.fire(
                  "Gagal", "Shelter Anda Gagal Dihapus", "warning");
                console.log(err)
              })
          } else {
            Swal.fire(
              "Gagal", "Shelter Anda Gagal Dihapus", "warning");
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