<template>
	<div>
		<TestA />
		<TestB />
		<TestC />
	</div>
</template>
<script>
import TestA from './components/TestA.vue';
import TestB from './components/TestB.vue';
import TestC from './components/TestC.vue';

export default {
	name: "App",
	components: { TestA, TestB, TestC }
}
</script>
