<script>
    export let fontSize = 0.2;
    export let size = 1;
    export let value;
    export let color;
</script>

<h1>{value}</h1>
<style>
    div {
        outline: dotted gold;
        height:max-content;
        /* overflow: hidden; */
        /* display: block;
        align-items: left;
        justify-content: left;
        width: 200px; */
    }
    h1{
        outline: dashed darkmagenta;
        color: var(--text-color);
        /* font-size: initial; */
    }
</style>