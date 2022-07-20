<main>
    <header>
        <h1 class="name">molai.dev</h1>
    <div class="links">
        <button on:click={()=>window.location.href = "#contact"}>Contact</button>
    </div>
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
  to { width: 424px }
}
@keyframes blink {
  from { border-color: transparent }
  to { border-color: orange; }
}
    main {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100vw;
        scroll-behavior: smooth;
    }

    header {
        margin-bottom: 125px;
        font-family: 'Roboto Mono', monospace;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        justify-content: center;
        height: 100vh;
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

        .links {
            display: flex;
            flex-direction: row;
            gap: 40px;
            align-items: center;
            justify-content: center;

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

                &:hover{
                    box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);

                }
            }
        }
    }

    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>