<template>
  <div
    id="section-title"
    class="h-screen grid content-center bgMe"
  >
    <div class="justify-self-center">
      <div class="text-9xl text-center bg-gray-50 bg-opacity-50 hover:bg-opacity-75 ease-linear duration-100 px-8 py-4">
        Cédric
        <br>
        BARDAINE
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'

}

</script>

<style>
.bgMe {
  background: url("~/assets/moi.jpg");
  background-position: center;
  background-size: cover;
}
</style>
