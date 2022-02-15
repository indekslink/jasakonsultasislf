<template>
  <div class="space-to-top my-5 py-5">
    <div class="container">
      <div class="fw-bold display-1 text-center mb-5 font-serif">
        Formulir <span class="text-primary">SLF</span>
      </div>
      <div class="paper shadow p-lg-5 p-md-4 p-3 mb-5">
        <div class="fs-5 fw-bold mb-5 text-center font-serif">
          FORMULIR PERMOHONAN SLF UNTUK BANGUNAN GEDUNG<br />
          NON RUMAH TINGGAL DENGAN LUAS BANGUNAN PALING SEDIKIT 2.500 M2 <br />
          (DUA RIBU LIMA RATUS METER PERSEGI), RUMAH SUSUN, DAN APARTEMEN
        </div>
        <div class="row gy-5">
          <div class="col-lg-4 col-6 ms-auto">
            <p>Surabaya,</p>
            <p>Kepada</p>
            <p>Yth.</p>
            <p>di SURABAYA</p>
          </div>
          <div class="col-12">
            <p>Perihal : Permohonan Sertifikat Laik Fungsi</p>
            <p>Lampiran : 1 (satu) berkas</p>
            <p>Yang bertanda tangan di bawah ini :</p>
          </div>
          <div class="col-12">
            <Field :data="fieldData" />
          </div>
          <div class="col-12">
            <p>
              Dengan ini mengajukan permohonan untuk Sertifikat Laik Fungsi.
            </p>
            <p>
              Demikian surat permohonan ini dibuat, dengan harapan untuk
              memperoleh persetujuan.
            </p>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-6 align-self-end">
                <i>*coret yang tidak perlu</i>
              </div>
              <div class="col-6">
                <div class="text-center">
                  <p>Menyetujui</p>
                  <p>Pemohon,</p>
                  <br /><br /><br /><br /><br />
                  <p class="m-0">(Nama Terang)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a
          download
          href="/materi/formulir-slf.pdf"
          class="button btn btn-outline-primary shadow btn-lg"
        >
          <i class="fas fa-file-pdf"></i> Download Formulir SLF
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import FieldVue from "../components/Formulir/Field.vue";

export default {
  data() {
    return {
      fieldData: [],
    };
  },
  created() {
    const data = [
      "Nama",
      "Pekerjaan",
      "Alamat",
      "No.Telp/No.Hp",
      "Bertindak Atas Nama",
      "Alamat",
      "No.Telp/No.Hp",
      "Lokasi Bangunan",
      "RT/RW",
      "Kelurahan",
      "Kecamatan",
      "Ukuran/Luas Tanah",
      "Status Hak Tanah ",
      "Pemegang Hak Tanah ",
      "Digunakan sebagai ",
    ];
    this.fieldData = data;
  },

  components: {
    Field: FieldVue,
  },
};
</script>
