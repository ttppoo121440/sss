<template>
  <div class="page-banner">
    <img
      src="~@/assets/images/page-banner.jpg"
      alt="banner"
      class="w-100"
    >
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss">

.page-banner {
  img {
    min-height: 300px;
    max-height: 600px;
  }
}
</style>
