<script lang="ts">
  export let resultRepresentation: string;
  let buttonText: string = "share 📤";
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
    navigator.clipboard.writeText(resultRepresentation);
    buttonText = "copied! 🔗";
    console.warn(navigator.canShare());
    try {
        navigator.share({ title: "conumble", text: resultRepresentation });
    } catch (error) {
        navigator.clipboard.writeText(resultRepresentation);
    }
  }
</script>

<!-- <button on:click={handleClick}>Share</button> -->
<!-- <div role="button" class="ShareButtonContainer" on:click={handleClick}>
  
</div> -->
<button on:click={handleClick2}>
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
    height: 50%;
    width: 63%;
    background-color: var(--primary-color-selected);
    margin: 0;
    position: relative;
    /* top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
    cursor: pointer;
    border: none;
    padding: none;
    outline: solid 3px var(--secondary-color);
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
