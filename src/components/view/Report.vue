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
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">Report</li>
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
                  <h2 class="card-title">Kelola Data Report</h2>

                  <div class="card-tools">
                    <div
                      class="input-group input-group-sm"
                      style="width: 150px;"
                    >
                      <input
                        type="text"
                        name="table_search"
                        class="form-control float-right"
                        placeholder="Search"
                      />

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
                    <b>Info:</b> Menampilkan data report.
                  </div>
                </div>
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-success float-right"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Add New
                  </button>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama Shelter (BTS)</th>
                        <th>Regional (wilayah)</th>
                        <th>Koordinat</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Shelter 1</td>
                        <td>Semarang</td>
                        <td>66 derajat</td>
                        <td class="text-center">
                          <router-link :to="{}" class="btn btn-info btn-sm selected"
                            >Edit</router-link
                          >
                          <button
                            @click.prevent="PostDelete(post.id)"
                            class="btn btn-sm btn-danger"
                          >
                            Delete
                          </button>
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
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Add New Data Report
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nama Shelter (BTS)"
                  />
                  <br />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Regional (wilayah)"
                  />
                  <br />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Koordinat"
                  />
                  <br />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
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

export default {
  components: {
    NavBar,
    SideBar,
    FootBar,
  },
};
</script>
