<template>
<div>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
        <div class="content-wrapper">
        <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <form @submit.prevent="update">
                <div class="card-body">
                  <div class="form-group">
                    <label for="name">Nama Shelter</label>
                    <input type="text" class="form-control" v-model="form.nama_shelter" id="nama_shelter" placeholder="Enter name">
                  </div>
                  <div class="form-group">
                    <label for="address">Lokasi</label>
                    <input type="text" class="form-control" v-model="form.lokasi" id="lokasi" placeholder="Enter address">
                  </div>

                  <div class="form-group">
                    <label for="address">Koordinat</label>
                    <input type="text" class="form-control" v-model="form.koordinat" id="koordinat" placeholder="Enter address">
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
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
          nama_shelter: "",
          lokasi: "",
          koordinat: "",
        },
        shelter_id: this.$route.params.id,
      };
},
 methods: {
      load() {
        axios
          .get("https://btsapii.herokuapp.com/api/shelter/" + this.shelter_id)
         .then((res) => {
            this.form.nama_shelter = res.data.data.nama_shelter;
            this.form.lokasi = res.data.data.lokasi;
            this.form.koordinat = res.data.data.koordinat;
           console.log(res)
         })
          .catch((err) => {
            console.log(err)
          });
      },
      update(){
          axios.put("https://btsapii.herokuapp.com/api/shelter/update/" + this.shelter_id, this.form)
          .then((res)=>{
              Swal.fire("Berhasil","Data Shelter Anda Sudah Terupdate","success");
              this.$router.push({
                  name:"Shelter"
              })
              console.log(res)
          })
          .catch((err)=> {
              Swal.fire("Gagal", "Data Shelter Gagal Terupdate", "warning");
              console.log(err)
          })
      }
    },
    mounted() {
        this.load();
    },
}
</script>