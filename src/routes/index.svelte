<script context="module">
    export let prerender = true;
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    import ArrowDown from "carbon-icons-svelte/lib/ArrowDown.svelte";
    import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";

    let header: HTMLDivElement;

    let credits: HTMLElement;

    let nav: HTMLElement;

    let scrollY: number;

    onMount(()=> {
        let shadow = "";

        for(var i = 0; i < 750; i++) {
            shadow +=(shadow? ",":"")+ i*1+"px "+ i*1+'px 0 #eece1b'
        }

        header.style.textShadow = shadow;
    });
</script>

<svelte:window bind:scrollY={scrollY}/>

<main id="top">
    <nav class={scrollY > 50 ? "scrolled" : ""} >
        <button class="btn" on:click={()=>window.location.href = "#top"}>molai.dev</button>
        <div class="links">
            <button on:click={()=>window.location.href = "mailto:mahir@molai.dev"}>Email</button>
            <button on:click={()=>window.location.href = "https://github.com/mtgsquad"}>GitHub</button>
        </div>
    </nav>
    <div bind:this={header} class="header">
        <p class="design">Designer</p>
        Mahir Molai
        <p class="frontend">Front-End Dev</p>
        {#if scrollY < 50}
        <div on:click={() => {
            scrollY = 500;
            console.log(scrollY);
        }} class="showScroller">
            <ArrowDown size={48} />
            <h4>Scroll Down</h4>
        </div>
        {/if}
    </div>
    <section class="about">
        <h1>About</h1>
        <p>My name is Mahir Molai & I'm a web developer from Pakistan 🇵🇰
            <br>
           I only have one hobby, and that is to write code for open source projects.
        </p>
        <br>
        <h2>Socials</h2>
        <br>
        <button on:click={() => window.open("https://github.com/mtgsquad")} class="social-btn">
            <LogoGithub size={32} />
            GitHub
        </button>
    </section>
</main>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700;900&display=swap');
    $text-colour: #b8a01b;
    $btn-text-colour: #FFDF33;
    $bg: #FFDF33;
    $bg-ad: rgba(184, 161, 27, 0.807);
    $shadow: #eece1b;
    $btn: #b8a01b;

    .credits {
        max-width: 250px;
        text-align: center;
        margin-bottom: 15px;
        font-size: 20px;
    }

    .scrolled {
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
        background-color: darken($color: $bg, $amount: 5%);
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        width: 100vw;
        scroll-behavior: smooth;
        font-family: 'Source Code Pro', monospace;
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
        transition: 300ms ease-in-out;

        .btn {
            display: flex;
            font-size: 24px;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 55px;
            cursor: pointer;
            font-family: 'Source Code Pro', monospace;
            border-radius: 10px;
            transition: 450ms ease-in-out;
            box-shadow: 10px 10px 0px 0px $btn;
            -webkit-box-shadow: 10px 10px 0px 0px $btn;
            -moz-box-shadow: 10px 10px 0px 0px $btn;
            background: $btn-text-colour;
            color: $btn;
            border: 2px solid $btn;
            &:hover {
                box-shadow: 10px 10px 0px 0px $shadow;
                -webkit-box-shadow: 10px 10px 0px 0px $shadow;
                -moz-box-shadow: 10px 10px 0px 0px $shadow;
                background: $btn;
                color: $btn-text-colour;
                border: none;
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
                font-family: 'Source Code Pro', monospace;
                border: none;
                border-radius: 10px;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                transition: 450ms ease-in-out;
                box-shadow: 10px 10px 0px 0px $shadow;
                -webkit-box-shadow: 10px 10px 0px 0px $shadow;
                -moz-box-shadow: 10px 10px 0px 0px $shadow;
                &:hover {
                    box-shadow: 10px 10px 0px 0px $btn;
                    -webkit-box-shadow: 10px 10px 0px 0px $btn;
                    -moz-box-shadow: 10px 10px 0px 0px $btn;
                    background: $btn-text-colour;
                    color: $btn;
                    border: 2px solid $btn;
                }
            }
        }
    }

    .header {
        color: $text-colour;
        font-size: 100px;
        width: 100vw;
        height: calc(100vh - 130px) !important;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        text-shadow: 1px 1px 0 $shadow;
        gap: 50px;
        margin-top: 130px;
        transition: 300ms ease-in-out;

        .frontend {
            font-size: 42px;
            align-self: flex-start;
            margin-left: 230px;
        }

        div {
            transition: 100ms ease-in-out;
        }

        .showScroller {
            font-size: 24px;
            margin-top: 275px;
            border-radius: 15px;
            width: 275px;
            background: $btn;
            height: 70px;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            transition: 450ms ease-in-out;
            box-shadow: 10px 10px 0px 0px darken($shadow, 6%);
            -webkit-box-shadow: 10px 10px 0px 0px darken($shadow, 6%);
            cursor: pointer;
            color: $btn-text-colour;

            &:hover {
                box-shadow: 10px 10px 0px 0px $btn;
                -webkit-box-shadow: 10px 10px 0px 0px $btn;
                -moz-box-shadow: 10px 10px 0px 0px $btn;
                background: $btn-text-colour;
                color: $btn;
                border: 2px solid $btn;
            }
            

            h4 {
                transition: 300ms ease-in-out;
                text-shadow: none;
            }
        }

        .design {
            font-size: 42px;
            align-self: flex-end;
            margin-right: 370px;
        }
    }

    .about {
        height: 50vh;
        padding: 75px;
        width: 100vw;
        background-color: darken($color: $bg, $amount: 5%);
        color: darken($btn, 9%);
        box-shadow: 0 -5px 5px 0px rgba(0,0,0,0.1);
        -webkit-box-shadow: 0 -5px 5px 0px rgba(0,0,0,0.1);
        -moz-box-shadow: 0 -5px 5px 0px rgba(0,0,0,0.1);

        h1 {
            font-size: 48px;
        }
        h2 {
            font-size: 36px;
        }
        p {
            font-size: 28px;
        }

        .social-btn {
            display: flex;
            font-size: 24px;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: $btn;
            width: 150px;
            height: 60px;
            cursor: pointer;
            color: $btn-text-colour;
            font-family: 'Source Code Pro', monospace;
            border: none;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            transition: 450ms ease-in-out;
            box-shadow: 10px 10px 0px 0px $shadow;
            -webkit-box-shadow: 10px 10px 0px 0px $shadow;
            -moz-box-shadow: 10px 10px 0px 0px $shadow;
            &:hover {
                box-shadow: 10px 10px 0px 0px $btn;
                -webkit-box-shadow: 10px 10px 0px 0px $btn;
                -moz-box-shadow: 10px 10px 0px 0px $btn;
                background: $btn-text-colour;
                color: $btn;
                border: 2px solid $btn;
            }
        }
    }
</style>