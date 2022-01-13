<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <img src="assets/img/gmedia.png" alt="Gmedia Logo" height="70" width="70"> <br>
          <a href="" class="h1"><b>Admin</b>GMEDIA</a>
        </div>
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your system</p>
          <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
            {{ error[0] }}
          </div>

          <form @submit.prevent="userLogin" method="post">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="form.email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="form.password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">

              </div>
              <!-- /.col -->
              <div class="col-4">
                
                  <button type="submit" class="btn btn-primary btn-block">Login</button>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <p class="mb-0 mt-3">
            <router-link :to="{name:'register'}" class="text-center">Don't have account yet?</router-link>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>
<script>
  import Swal from 'sweetalert2';
  import axios from "axios";
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        errors: null
      }
    },
    methods: {
      userLogin() {
        axios
          .post("https://btsapii.herokuapp.com/api/auth/signin", this.form)
          .then(res => {
            Swal.fire(
              "Berhasil", "Anda Berhasil Login", "success");
            console.log(res)
            this.$router.push({
              name: "Home"
            })
          })
          .catch(err => {
            Swal.fire(
              "Gagal", "Anda Gagal Login", "warning");
            console.log(err)
          })
      }
    }
  }
</script>