<!-- We want a help option in the corner. Title in the middle. And a settings slash accordion in the other corner -->
 <!-- settings could have : hint mode, give up  button, daily stats/leaderboard -->
<div class="gridcontainer">
    <div class="griditem" id="help"><h2>⁇</h2></div>
    <div class="griditem" id="title"><h2>Conumble</h2></div>
    <div class="griditem" id="accordion"><h2>⚜️</h2></div>
</div>

<style>
    .gridcontainer {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
    }
    h2 {
        font-size: 3em
    }
    .griditem {
        outline: solid red;
    }
    #help {
        outline: solid chartreuse;
    }
    #title {
        outline: solid chartreuse;
    }
    #accordion {

    }

</style>

