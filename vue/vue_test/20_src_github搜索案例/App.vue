<template>
	<div class="container">
		<MySearch />
		<MyList />
	</div>
</template>

<script>
import MySearch from "./components/mySearch.vue";
import MyList from "./components/myList.vue";
export default {
	name: "App",
	components: { MySearch, MyList }
}
</script>
<style>
</style>
