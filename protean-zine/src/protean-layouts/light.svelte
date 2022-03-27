<script>
	export let title;
	export let author;
	export let date;
</script>

<article class="prose prose-slate dark:prose-invert">
	<h1>{ title }</h1>
	<p class="date">on: { date }</p>
	<p class="date">by: { author }</p>
	
	<slot>
		<!-- the mdsvex content will be slotted in here -->
	</slot>
</article>