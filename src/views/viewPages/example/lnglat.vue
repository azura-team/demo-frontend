<template>
  <div>
    <my-lng-lat
      :lng="lng"
      :lat="lat"
      @submit="submit"
    ></my-lng-lat>
    <!-- 传入必须为wgs84 坐标，传出也是wgs84 -->
  </div>
</template>

<script>
export default {
  name: 'lnglat',
  data () {
    return {
      lng: 117.000923,
      lat: 36.675807
    }
  },
  created () { },
  methods: {
    submit (e) {
      this.lng = e.lng
      this.lat = e.lat
    }
  }
}
</script>

<style lang="scss">
</style>
