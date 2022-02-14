<template>
  <div
    class="row g-0 mb-4 align-items-center"
    v-for="(val, i) in data"
    :key="i"
  >
    <div class="col-4" v-text="val"></div>
    <div class="col-1 text-center">:</div>
    <div class="col-7 border-dashed align-self-end"></div>
  </div>
  <div class="row g-0 mb-4 align-items-center">
    <div class="col-4">Jenis SLF*</div>
    <div class="col-1 text-center">:</div>
    <div class="col-7 align-self-end">
      SLF / SLF perubahan/ perpanjangan SLF
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style scoped>
.border-dashed {
  border-bottom: 1px dashed rgb(102, 102, 102);
}
</style>
