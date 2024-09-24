<script>
  export let fontSize = 20;
  export let size = 1;
  export let value;
  export let color;
</script>

<h1 style="font-size: {fontSize}px">{value}</h1>

<style>
  div {
    outline: dotted gold;
    height: max-content;
    /* overflow: hidden; */
    /* display: block;
        align-items: left;
        justify-content: left;
        width: 200px; */
  }
  h1 {
    outline: dashed darkmagenta;
    color: var(--text-color);
    margin: 15% 0;
    /* font-size: initial; */
  }

  @media screen and (min-width: 768px) {
    h1 {
      margin: 7.5% 0;
    }
  }
</style>
