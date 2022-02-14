<template>
  <footer class="bg-dark text-light">
    <div class="container py-3">
      <div class="row justify-content-between gy-5">
        <div class="col-md-6">
          <div
            class="row align-items-center justify-content-start justify-content-center"
          >
            <div class="col-lg-3 col-5">
              <img src="/assets/images/logo-1-tp.png" alt="" class="w-100" />
            </div>
            <div class="col-lg-9 text-md-start text-center">
              <div class="fs-1 fw-bold font-serif">CV. Tirai Kencana</div>
              <div class="text-muted">
                CIVIL-GENERAL CONTRACTOR-SUPPLIER & DESIGN
              </div>
            </div>
            <div class="col-12 fs-3 pt-3 font-serif">
              Jasa Konsultasi Sertifikat Laik Fungsi
              <span class="fw-bold">(SLF)</span>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="fs-1 fw-bold font-serif mb-3">Alamat Kantor</div>
          <p>Kebraon indah permai Blok D 39 surabaya</p>
        </div>
      </div>
      <div class="copy text-center mt-5">
        Copyright &copy; {{ copy() }} All Rights Reserved
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  setup() {
    const copy = () => {
      const created = 2021;
      const now = new Date().getFullYear();
      return created > now ? created + "-" + now : now;
    };
    return { copy };
  },
};
</script>
