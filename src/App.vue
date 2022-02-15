<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    );
    document.head.appendChild(recaptchaScript);

    window.onscroll = this.readScroll;
  },
  methods: {
    readScroll() {
      const scroll = window.scrollY;
      const actionTop = document.querySelector(".action-top");
      actionTop.classList.toggle("show", scroll > 80);
    },
    toTop() {
      window.scrollTo(0, 0);
    },
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <button @click="toTop()" class="btn btn-primary action-top" type="button">
    <i class="fas fa-arrow-up"></i>
  </button>
  <Navbar />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@400;900&display=swap");
#app {
  font-family: "Nunito", sans-serif;
}
.action-top {
  position: fixed;
  z-index: 9999;
  right: 24px;
  opacity: 0;
  transition: 0.5s ease-in-out;
  bottom: -100%;
}
.action-top.show {
  bottom: 24px;
  opacity: 1;
}
.font-serif {
  font-family: "Zen Kaku Gothic Antique", sans-serif !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.text-small {
  font-size: 13px;
}

.gradient-blue-to-white {
  background-image: linear-gradient(to bottom, #0d6efd, white);
}
.gradient-white-to-blue {
  background-image: linear-gradient(to bottom, white, #0d6efd);
}

.space-to-top {
  margin-top: 5.5rem;
}
</style>
