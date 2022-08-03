<script context="module">
    export let prerender = true;
</script>

<script>
    import { onMount } from 'svelte';

    /**
    * @type {HTMLDivElement}
    */
    let header;
     /**
    * @type {HTMLAudioElement}
    */
    let musicPlayer;

    /**
    * @type {HTMLElement}
    */
    let credits;

    onMount(()=> {
        let shadow = "";

        for(var i = 0; i < 1000; i++) {
            shadow +=(shadow? ",":"")+ i*1+"px "+ i*1+'px 0 #eece1b'
        }

        credits.style.textShadow = shadow;

        header.style.textShadow = shadow;

        musicPlayer.play();
    })
</script>

<main id="top">
    <nav>
        <button class="btn" on:click={()=>window.location.href = "#top"}>molai.dev</button>
        <div class="links">
            <button on:click={()=>window.location.href = "mailto:mahir@molai.dev"}>Email</button>
        </div>
    </nav>
    <div bind:this={header} class="header">
        <p class="design">Designer</p>
        Mahir Molai
        <p class="frontend">Front-End Dev</p>
    </div>
    <div class="player">
        <p bind:this={credits} class="credits">Music Credits:
            <br>
            <a href="https://www.youtube.com/watch?v=mMYfOB_rzac" target="_blank">Keshi - Beside You</a>
       </p>
       <audio bind:this={musicPlayer} class="gap-bottom-left" controls src="./music/bgsong.mp3">
       </audio>
    </div>
    <div class="ad">
        <amp-ad
            layout="fixed"
            width="120"
            height="120"
            type="adsense"
            data-ad-client="ca-pub-2703289420312218"
            data-ad-slot="6837791691">
        </amp-ad>
    </div>
    <!--<section id="contact" class="contact">
        <form action="/api/form">
            <input type="text">
        </form>
    </section>-->
</main>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap');
    $text-colour: #b8a01b;
    $btn-text-colour: #FFDF33;
    $bg: #FFDF33;
    $bg-ad: rgba(184, 161, 27, 0.807);
    $shadow: #eece1b;
    $btn: #b8a01b;

    @keyframes typing {
        from { width: 0 }
        to { width: 517px }
    }
    @keyframes blink {
        from { border-color: transparent }
        to { border-color: orange; }
    }
    .credits {
        max-width: 250px;
        text-align: center;
        margin-bottom: 15px;
        font-size: 20px;
    }
    main {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        scroll-behavior: smooth;
        font-family: 'Roboto Mono', monospace;
        /**
            background: fixed;
        background-image: url('https://cdn.molai.dev/bg2.png');
        */
        background: $bg;
    }

    nav {
        height: 130px;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 70px;
        padding-right: 70px;
        position: fixed;

        .btn {
            display: flex;
            font-size: 24px;
            align-items: center;
            justify-content: center;
            background: $btn;
            width: 150px;
            height: 55px;
            cursor: pointer;
            color: $btn-text-colour;
            font-family: 'Roboto Mono', monospace;
            border: none;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            transition: 600ms ease-in-out;
            box-shadow: 10px 10px 0px 0px $shadow;
            -webkit-box-shadow: 10px 10px 0px 0px $shadow;
            -moz-box-shadow: 10px 10px 0px 0px $shadow;
            &:hover {
                box-shadow: 25px 25px 0px 0px $shadow;
                -webkit-box-shadow: 25px 25px 0px 0px $shadow;
                -moz-box-shadow: 25px 25px 0px 0px $shadow;
            }
        }

        .links {
            display: flex;
            flex-direction: row;
            gap: 40px;
            align-items: center;
            justify-content: space-between;
            gap: 50px;

            button {
                display: flex;
                font-size: 24px;
                align-items: center;
                justify-content: center;
                background: $btn;
                width: 125px;
                height: 55px;
                cursor: pointer;
                color: $btn-text-colour;
                font-family: 'Roboto Mono', monospace;
                border: none;
                border-radius: 10px;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                transition: 600ms ease-in-out;
                box-shadow: 10px 10px 0px 0px $shadow;
                -webkit-box-shadow: 10px 10px 0px 0px $shadow;
                -moz-box-shadow: 10px 10px 0px 0px $shadow;

                &:hover {
                    box-shadow: 25px 25px 0px 0px $shadow;
                    -webkit-box-shadow: 25px 25px 0px 0px $shadow;
                    -moz-box-shadow: 25px 25px 0px 0px $shadow;
                }
            }
        }
    }

    .header {
        color: $text-colour;
        font-size: 100px;
        width: 100vw;
        height: calc(100vh - 130px);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        text-shadow: 1px 1px 0 $shadow;
        gap: 50px;

        .frontend {
            font-size: 42px;
            align-self: flex-start;
            margin-left: 230px;
        }

        .design {
            font-size: 42px;
            align-self: flex-end;
            margin-right: 370px;
        }
    }

    .player {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        width: 300px;
        margin-left: 20px;
        margin-bottom: 20px;
        align-self: flex-start;
        justify-self: flex-end;
        text-shadow: 1px 1px 0 $shadow;
        color: $text-colour;

        a {
            color: blue;
            text-decoration: none;
        }
    }

    .ad {
        background: $bg-ad;
        width: 150px;
        height: 150px;
        align-self: flex-end;
        justify-self: flex-end;
        border-radius: 15px 0px 0px 0px;
    }
</style>