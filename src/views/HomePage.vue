<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="'100px'" />
    <px-assets-table v-if="!isLoading" :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable.vue";

export default {
  name: "home_page",
  components: { PxAssetsTable },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;

    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>


