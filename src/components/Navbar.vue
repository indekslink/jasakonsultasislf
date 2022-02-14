<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="/assets/images/logo-1-tp.png" alt="" width="80" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav ms-auto d-flex align-items-md-center align-items-start mb-2 mb-lg-0"
        >
          <li class="nav-item">
            <router-link active-class="active" class="nav-link fw-bold" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link fw-bold"
              to="/kajian-teknis"
              >Kajian Teknis</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link fw-bold"
              to="/formulir-slf"
              >Formulir SLF</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link fw-bold"
              to="/persyaratan"
              >persyaratan</router-link
            >
          </li>

          <li class="nav-item ms-lg-5 w-100 ms-0 mt-5 mt-lg-0">
            <div class="d-flex align-items-center justify-content-evenly">
              <a class="btn-lg btn btn-light py-3 px-4" href="tel:08123536904">
                <div class="d-flex align-items-center">
                  <i class="fas fa-phone-alt"></i>
                  <div class="ms-2 d-lg-none d-block">Telephone</div>
                </div>
              </a>
              <a
                class="btn-lg btn btn-outline-light py-3 px-4 ms-md-3 ms-0"
                href="mailto:cvtiraikencanaslf@gmail.com"
              >
                <div class="d-flex align-items-center">
                  <i class="fas fa-envelope"></i>
                  <div class="ms-2 d-lg-none d-block">Mail</div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav.navbar {
  /* background: white; */
  background-image: linear-gradient(to right, #0d6efd, #6ea7fc);
}
nav.navbar a.nav-link {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  white-space: nowrap;
  /* text-shadow: -1px 1px 0 white, 1px 1px 0 white, 1px -1px 0 white,
    -1px -1px 0 white; */
}
</style>
