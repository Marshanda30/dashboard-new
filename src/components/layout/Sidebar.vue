<template>
  <div>
     <aside class="main-sidebar sidebar-light-primary elevation-4">
    <!-- Brand Logo -->
    <a href="" class="brand-link">
      <img src="/assets/img/gmedia.png" alt="GMEDIA logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">ADMIN GMEDIA</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
          <ul class="nav nav-treeview" >
            <li class="nav-item">
              <router-link to="/home" class="nav-link">
                <i class="fas fa-tachometer-alt nav-icon"></i>
                <p>Dashboard</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/shelter" class="nav-link">
                <i class="fas fa-map-marker-alt nav-icon"></i>
                <p>Shelter</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/realtime" class="nav-link">
                <i class="fas fa-laptop nav-icon"></i>
                <p>Realtime</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tabel" class="nav-link">
                <i class="fas fa-database nav-icon"></i>
                <p>Data</p>
              </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link">
                  <i class="fas fa-sign-out-alt nav-icon"></i>
                  <p>Log Out</p>
                </router-link>
              </li>
          </ul>
        </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  </div> 
</template>

<style>
.brand-text{
  font-family: 'Comic Sans';
}
</style>