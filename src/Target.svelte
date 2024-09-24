<script lang="ts">
    export let targetValue: number;
</script>
<h2 class="target">🎯 {targetValue}</h2>

<style>
    .target {
        /* position: absolute; */
        padding: 0;
        margin: 3% 0;
        font-size: 2em;
    }
    div {
        display: inline;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 2em;
    }
      @media screen and (min-width: 768px) {
        .target {
            font-size: 3em;
            margin: 0 2% 0 0;
        }
      }
</style>