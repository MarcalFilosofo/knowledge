<template>
	<footer class="footer">
		<span>Feito por <strong>Guilherme Marçal</strong> 2021</span>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style>
	.footer{
		grid-area: footer;
		background-color: #ddd;
		color: #333;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		padding-right: 10px;
	}
</style>