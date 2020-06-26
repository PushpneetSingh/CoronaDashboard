<template>
	<v-app>
		<navbar />
		<foooter />
	</v-app>
</template>

<script>
import navbar from './views/navbar'
import foooter from './components/foooter'

export default {
  components: {
    navbar,
	foooter
  },
}
</script>
