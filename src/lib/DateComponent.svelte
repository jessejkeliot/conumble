<script>
	export let date = new Date();
	
	let internalDate = ''
	
	const dateToInternalDate = x => {
		const d = new Date(x)
		return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
	}
	
	const internalDateToDate = x => {
		if (!/^\d{4}-\d{2}-\d{2}$/.test(x)) return
		const d = new Date(x)
		// bail out on invalid date
		if (isNaN(d.getTime())) return
		return d
	}
		
	const input = x => {
		internalDate = dateToInternalDate(x)
	}
	
	const output = x => {
		const v = internalDateToDate(x)
		if (v) date = v
	} 
	
	$: input(date)

	$: output(internalDate)
</script>

<!-- eg. formatted like: DD.MM.YYYY -->
<!-- <input type="text" bind:value={internalDate}> -->
