<script context="module">
    export let prerender = true;

</script>

<main id="top">
    <nav>
        <h1 on:click={()=>window.location.href = "#top"}><b>molai</b>.dev</h1>
        <div class="links">
            <button on:click={()=>window.location.href = "mailto:mahir@molai.dev"}>Email</button>
        </div>
    </nav>
    <header>
        <h1 class="name">Mahir Molai</h1>
    </header>
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
    $btn: #b8a01b;

    @keyframes typing {
        from { width: 0 }
        to { width: 517px }
    }
    @keyframes blink {
        from { border-color: transparent }
        to { border-color: orange; }
    }
    main {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        scroll-behavior: smooth;
        font-family: 'Roboto Mono', monospace;
        background: fixed;
        background-image: url('https://cdn.molai.dev/bg2.png');
    }

    nav {
        height: 130px;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 70px;

        h1 {
            color: $text-colour;
            font-size: 36px;
            cursor: pointer;

            b {
                color: black;
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
                box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);

                &:hover {
                    box-shadow: 25px 25px 0px 0px rgba(0,0,0,0.75);
                    -webkit-box-shadow: 25px 25px 0px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 25px 25px 0px 0px rgba(0,0,0,0.75);
                }
            }
        }
    }

    header {
        margin-bottom: 125px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 130px);
        width: 100vw;

        h1{
            font-weight: 600;
            font-size: 76px;
            color: $text-colour;
            width: 0;
            overflow: hidden;
            border-right: .15em solid orange;
            white-space: nowrap;
            animation: typing 1.5s steps(20, end) forwards, blink .8s infinite;
        }
    }
</style>