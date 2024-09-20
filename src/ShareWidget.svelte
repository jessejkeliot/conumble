<script lang="ts">
  export let resultRepresentation: string;
  let buttonText: string = "share 📤";
  function handleClick(): void {
      navigator.clipboard.writeText(resultRepresentation);
      buttonText = "copied! 🔗";
    }
</script>

<!-- <button on:click={handleClick}>Share</button> -->
<!-- <div role="button" class="ShareButtonContainer" on:click={handleClick}>
  
</div> -->
<button on:click={handleClick}>
    <h2 id="shareText">{buttonText}</h2>

</button>

<style>
  h2 {
    font-size: clamp(2vmin, 5vw, 3vmax);
    transform: scale(1.5);
  }
  button {
    z-index: 5;
    height: 50%;
    width: 63%;
    background-color: rgb(0, 197, 197);
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    cursor: pointer;
    border-radius: 1em;
    border: none;
  }
  div {
    z-index: 0;
    height: 50%;
    width: 63%;
    background-color: rgb(0, 197, 197);
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    cursor: pointer;
    border-radius: 1em;
  }
</style>
