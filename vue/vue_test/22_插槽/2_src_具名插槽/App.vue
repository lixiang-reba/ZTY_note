<template>
	<div class="container">
		<MyCategory title="美食">
			<h1 slot="center">蛋糕吃不完我打包带走</h1>
			<h2 slot="footer">hzksl</h2>
		</MyCategory>
		<MyCategory title="游戏">
			<ul slot="footer">
				<li v-for="(game, index) in games" :key="index">{{ game }}</li>
			</ul>
		</MyCategory>
		<MyCategory title="电影">
			<!-- 若有多个DOM放入slot中 可以在外面包裹template -->
			<!-- v-slot:footer的写法只能用于template标签 -->
			<template v-slot:footer>
				<h1>wxmsl</h1>
				<h1>hxlsl</h1>
			</template>
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
