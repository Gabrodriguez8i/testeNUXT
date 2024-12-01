<template>
  <div>
    <button @click="login">Iniciar sesión</button>
  </div>
</template>

<script setup>
const { $supabase } = useNuxtApp()

const login = async () => {
  const { data, error } = await $supabase.auth.signInWithPassword({
    email: 'gr985809@gmail.com',
    password: 'abc123,.',
  })

  if (error) {
    console.log('Error en login:', error.message)
  } else {
    console.log('Usuario logueado:', data)
  }
}
</script>
