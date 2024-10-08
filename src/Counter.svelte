<script lang=ts>
  export let fontSize = 20;
  export let size = 1;
  export let value;
  export let state: number;
</script>

<h1 style="font-size: {fontSize}px" class="state{state}">{value}</h1>

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
    /* outline: dashed darkmagenta; */
    text-shadow: 0px 5px 7px var(--contrast-shadow-color);
    color: var(--text-color);
    margin: 15% 0;
    /* font-size: initial; */
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }


  .state0 {
    color: var(--background-color);
    text-shadow: 0px 0px 30px var(--contrast-shadow-color);
  }
  .state3{
    color: var(--secondary-color);
  }
  @media screen and (min-width: 768px) {
    h1 {
      margin: 7.5% 0;
    }
  }
</style>
