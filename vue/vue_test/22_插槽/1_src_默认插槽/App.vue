<template>
	<div class="container">
		<MyCategory title="美食">
			<h1>蛋糕吃不完我打包带走</h1>
		</MyCategory>
		<MyCategory title="游戏">
			<ul>
				<li v-for="(game, index) in games" :key="index">{{ game }}</li>
			</ul>
		</MyCategory>
		<MyCategory title="电影">
			<ul>
				<li v-for="( film, index) in films" :key="index">{{ film }}</li>
			</ul>
		</MyCategory>
	</div>
</template>

<script>
import MyCategory from "./components/myCategory.vue";
export default {
	name: "App",
	components: { MyCategory },
	data() {
		return {
			foods: ['火锅', '烧烤', '小龙虾', '牛排'],
			games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
			films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
		}
	},
}
</script>
<style>
.container {
	display: flex;
	justify-content: space-around
}
</style>
