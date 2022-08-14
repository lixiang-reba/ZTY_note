<template>
	<div class="container">
		<MyCategory title="游戏">
			<!-- scope是一个对象 包含传过来的所有内容 -->
			<template scope="demo">
				<ul>
					<li v-for="(game, index) in demo.games" :key="index">{{ game }}</li>
				</ul>
			</template>
		</MyCategory>
		<MyCategory title="游戏">
			<template scope="{games}">
				{{ games }}
				<ol>
					<li style="color:pink" v-for="(game, index) in games" :key="index">{{ game }}</li>
				</ol>
			</template>
		</MyCategory>
	</div>
</template>

<script>
import MyCategory from "./components/myCategory.vue";
export default {
	name: "App",
	components: { MyCategory },
}
</script>
<style>
.container {
	display: flex;
	justify-content: space-around
}
</style>
