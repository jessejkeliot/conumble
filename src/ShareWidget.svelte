<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let resultRepresentation: string;
  let buttonText: string = "share 📤";
  const dispatch = createEventDispatcher();
  function handleClick(): void {
    buttonText = "failed to copy! ❌";
    const textBlob = new Blob([resultRepresentation], { type: 'text/plain' });
    const clipboardItem = new ClipboardItem({'text/plain': textBlob });
    navigator.clipboard
      .write([clipboardItem])
      .then(() => {
        buttonText = "copied! 🔗"; // Update the button text when copying succeeds
      })
      .catch(() => {
        buttonText = "failed to copy! ❌"; // Handle the error case
      });
  }
  function handleClick2() {
    if(navigator.canShare()){
      const sharedata = {text: resultRepresentation, title: "Conumble Results", url: "www.jessejkeliot.github.io/conumble/"};
      navigator.share(sharedata);
    }
    navigator.clipboard.writeText(resultRepresentation);
    buttonText = "copied! 🔗";
  }
</script>

<!-- <button on:click={handleClick}>Share</button> -->
<!-- <div role="button" class="ShareButtonContainer" on:click={handleClick}>
  
</div> -->
<button on:click={handleClick2} on:touchstart={handleClick2} on:touchend={() => console.log("touch ended")}>
    <h2 id="shareText">{buttonText}</h2>
</button>

<style>
  h2 {
    color: var(--text-color);
    font-size: xx-large;
    padding: 0;
    margin: 0;
    /* transform: scale(1.5); */
  }
  button {
    z-index: 5;
    height: 100%;
    width: 63%;
    background-color: var(--secondary-color-selected);
    margin: 0;
    position: relative;
    /* top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
    cursor: pointer;
    border: none;
    padding: none;
    outline: solid 4px var(--secondary-color-selected);
  }
  div {
    position: absolute;
    z-index: 0;
    height: auto;
    width: 100%;
    background-color: rgb(0, 197, 197);
    margin: 0;
    position: absolute;
    cursor: pointer;
    border-radius: 1em;
    outline: solid bisque;
  }
</style>
