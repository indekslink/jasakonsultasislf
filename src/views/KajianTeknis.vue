<template>
  <div class="space-to-top my-5 py-5">
    <div class="container">
      <div class="fw-bold display-1 text-center mb-5 font-serif">
        Penyusunan <span class="text-primary">Kajian Teknis</span>
      </div>
      <div class="mb-4 text-center">
        <a
          href="/materi/contoh-penyusunan-kajian-teknis.pdf"
          download
          class="btn btn-outline-primary shadow"
        >
          <i class="fas fa-file-pdf"></i> Download File Pendukung
        </a>
      </div>
      <div
        class="filter-bab font-serif justify-content-md-center justify-content-start mb-4"
      >
        <button @click="activeClass($event, 'Bab1')" class="btn btn-primary">
          Bab I
        </button>
        <button
          @click="activeClass($event, 'Bab2')"
          class="btn btn-outline-primary"
        >
          Bab II
        </button>
        <button
          @click="activeClass($event, 'Bab3')"
          class="btn btn-outline-primary"
        >
          Bab III
        </button>
        <button
          @click="activeClass($event, 'Bab4')"
          class="btn btn-outline-primary"
        >
          Bab IV
        </button>
        <button
          @click="activeClass($event, 'Bab5')"
          class="btn btn-outline-primary"
        >
          Bab V
        </button>
        <button
          @click="activeClass($event, 'Bab6')"
          class="btn btn-outline-primary"
        >
          Bab VI
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <component :is="currentBab" />
      </transition>
    </div>
  </div>
</template>

<script>
import Bab1 from "../components/KajianTeknis/Bab1.vue";
import Bab2 from "../components/KajianTeknis/Bab2.vue";
import Bab3 from "../components/KajianTeknis/Bab3.vue";
import Bab4 from "../components/KajianTeknis/Bab4.vue";
import Bab5 from "../components/KajianTeknis/Bab5.vue";
import Bab6 from "../components/KajianTeknis/Bab6.vue";
export default {
  data() {
    return {
      currentBab: "Bab1",
    };
  },
  components: {
    Bab1,
    Bab2,
    Bab3,
    Bab4,
    Bab5,
    Bab6,
  },
  methods: {
    activeClass(e, bab) {
      const target = e.target;

      this.currentBab = bab;
      document.querySelectorAll(".filter-bab button").forEach((val) => {
        val.classList.remove("btn-primary");
        val.classList.add("btn-outline-primary");
      });
      target.classList.remove("btn-outline-primary");
      target.classList.add("btn-primary");
    },
  },
};
</script>
<style>
.filter-bab {
  display: flex;
  gap: 1rem;
  padding: 1rem 12px;
  overflow: auto hidden;
}
.filter-bab button {
  text-transform: uppercase;
  white-space: nowrap;
}
.items .title-items {
  display: flex;
}
.items .title-items i {
  margin-top: 6px;
  margin-right: 8px;
}
</style>
