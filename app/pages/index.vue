<script setup>
const welcomeMessage = "Test d'affichage"
</script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <h2 class="text-2xl font-bold text-primary">{{ welcomeMessage }}</h2>
      <p>ROUTAGE OK</p>
    </UCard>
  </UContainer>
</template>