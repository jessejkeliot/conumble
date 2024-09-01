<script lang="ts">

    let count: number = 1;

    const  handleSquare = () => {
        count = count*count;
    }
    const  handleDouble = () => {
        count = count*2;
    }
    const handleIncrement = () => {
        count++;
    }
    const handleDecrement = () => {
        count--;
    }
</script>

<p>The count is {count}</p>

<button on:click={handleSquare}>Square</button>
<button on:click={handleIncrement}>Add 1</button>
<button on:click={handleDecrement}>Subtract 1</button>
<button on:click={handleDouble}>Double<p></p></button>

<style>
</style>

<!-- The game should be: Computer generates random starting number between 2 and 7, it will then perform 7 operations on it which  -->