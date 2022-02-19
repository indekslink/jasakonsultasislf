<template>
  <div class="space-to-top py-5 my-5">
    <div class="container">
      <div class="text-center mb-5">
        <div class="fw-bold display-1 mb-4 font-serif">
          Persyaratan <span class="text-primary">SLF</span>
        </div>
        <div class="fs-3 font-serif">Berikut syarat-syarat pembuatan SLF</div>
      </div>
    </div>
    <nav>
      <div
        class="nav nav-tabs justify-content-center nav-fill mb-5"
        id="nav-tab"
        role="tablist"
      >
        <button
          class="nav-link active"
          id="nav-syarat-administratif-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-syarat-administratif"
          type="button"
          role="tab"
          aria-controls="nav-syarat-administratif"
          aria-selected="true"
        >
          Syarat Administrasi
        </button>
        <button
          class="nav-link"
          id="nav-syarat-teknis-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-syarat-teknis"
          type="button"
          role="tab"
          aria-controls="nav-syarat-teknis"
          aria-selected="false"
        >
          Syarat Teknis
        </button>
      </div>
    </nav>
    <div class="container">
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-syarat-administratif"
          role="tabpanel"
          aria-labelledby="nav-syarat-administratif-tab"
        >
          <div class="row grid-syarat gy-5">
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow border-0 py-3 px-2">
                <img
                  src="/assets/images/syarat-1.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="fs-3 text-center lh-sm font-serif fw-bold">
                  KTP Pemohon
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow border-0 py-3 px-2">
                <img
                  src="/assets/images/syarat-5.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="fs-3 text-center lh-sm font-serif fw-bold">
                  Surat Kuasa
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow border-0 py-3 px-2">
                <img
                  src="/assets/images/syarat-7.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="fs-3 text-center lh-sm font-serif fw-bold">
                  IMB/PBG
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow border-0 py-3 px-2">
                <img
                  src="/assets/images/syarat-2.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="fs-3 text-center lh-sm font-serif fw-bold">
                  Surat Tanah (SHM/HGB)
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow border-0 py-3 px-2">
                <img
                  src="/assets/images/syarat-3.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="fs-3 text-center lh-sm font-serif fw-bold">
                  NIB Berbasis Resiko
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow border-0 py-3 px-2">
                <img
                  src="/assets/images/syarat-8.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="fs-3 text-center lh-sm font-serif fw-bold">
                  SPPT PBB tahun berjalan
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow border-0 py-3 px-2">
                <img
                  src="/assets/images/syarat-6.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="fs-3 text-center lh-sm font-serif mb-2 fw-bold">
                  Surat Perjanjian Sewa/Kontrak
                </div>
                <small class="d-block text-center"
                  >(apabila tanah dan bangunan sewa + copy KTP pemilik)</small
                >
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow border-0 py-3 px-2">
                <img
                  src="/assets/images/syarat-4.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="fs-3 text-center lh-sm font-serif fw-bold">
                  Akte Pendirian/Perubahan berikut AHU
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-syarat-teknis"
          role="tabpanel"
          aria-labelledby="nav-syarat-teknis-tab"
        >
          <div class="fs-5 text-center mb-4">
            Syarat Teknis ialah syarat yang berasal dari dinas-dinas tertentu,
            antara lain sbb :
          </div>
          <div class="row grid-syarat gy-5">
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow justify-content-start border-0 py-4 px-3">
                <div class="fs-5 text-center font-serif mb-4 fw-bold">
                  Dinas Cipta Karya
                </div>
                <div class="item">
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      SK IMB/PBG & Gambar IMB Stempel Dinas
                    </div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">Gambar ASB Autocad sesuai IMB</div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">Lunas Retribusi PBB tahun berjalan</div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Fasilitas difabel yang terbangun di lapangan
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow justify-content-start border-0 py-4 px-3">
                <div class="fs-5 text-center font-serif mb-4 fw-bold">
                  Dinas Pematusan
                </div>
                <div class="item">
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Surat arahan Dranaise/Rekom Drainase
                    </div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Realisasi serta dokumentasi lebar,panjang saluran,kolam
                      tampung sesuai dengan arahan rekom drainase
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow justify-content-start border-0 py-4 px-3">
                <div class="fs-5 text-center font-serif mb-4 fw-bold">
                  Disnaker Propinsi
                </div>
                <div class="item">
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Surat kelaikan genset, petir, forklip, gondola, lift atau
                      alat angkut laiinya
                    </div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">SLO listrik TM & TR</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow justify-content-start border-0 py-4 px-3">
                <div class="fs-5 text-center font-serif mb-4 fw-bold">
                  Dinas Perhubungan
                </div>
                <div class="item">
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">Andalalin</div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">Asuransi parkir</div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">Ijin parkir</div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Pemasangan di lokasi rambu lalin sesuai dengan hasil
                      andalalin
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow justify-content-start border-0 py-4 px-3">
                <div class="fs-5 text-center font-serif mb-4 fw-bold">
                  Dinas Kesehatan
                </div>
                <div class="item">
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Sampel air bersih sesuai arahan Dinkes
                    </div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Sampel mikrobiologi Udara sesuai arahan dinkes
                    </div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Perjanjian tertulis pengendalian hama (arima, rentokill
                      dll)
                    </div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">Rekomendasi kesehatan</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow justify-content-start border-0 py-4 px-3">
                <div class="fs-5 text-center font-serif mb-4 fw-bold">
                  Dinas Lingkungan Hidup
                </div>
                <div class="item">
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Rekom Amdalalin (berupa analisa dari Konsultan)
                    </div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Ijin buang limbah cair (kerjasama dengan pihak ke 3)
                    </div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">Ijin lingkungan</div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Bangunan TPS B3, pengolahan limbah yang terpasang sesuai
                      dengan arahan LH berupa bangunan fisik yang nantinya akan
                      di tes commusioning selama 3 bulan
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card shadow justify-content-start border-0 py-4 px-3">
                <div class="fs-5 text-center font-serif mb-4 fw-bold">
                  Dinas Pemadam Kebakaran
                </div>
                <div class="item">
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">Rekom Pemadam kebakaran</div>
                  </div>
                  <div class="d-flex py-2">
                    <i class="fas fa-arrow-right me-3 mt-1"> </i>
                    <div class="lh-sm">
                      Pemasangan alat alat PMK dilapangan sesuai arahan PMK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.grid-syarat {
  align-items: stretch;
}
.grid-syarat .card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
