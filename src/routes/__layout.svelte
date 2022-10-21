<svelte:head>
    <title>molai.dev</title>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2703289420312218"
    crossorigin="anonymous"></script>
	<script async src="https://cdn.splitbee.io/sb.js"></script>
	<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
	<script async src="https://arc.io/widget.min.js#AVk8xxJz"></script>
</svelte:head>
<div class="container">
    <slot />
</div>
<div class="screenTooSmall">
    <h1>Your Screen Is Too Small To View This Website.</h1>
    <div class="links">
        <h2>You can still checkout my socials:</h2>
        <a href="https://github.com/mtgsquad">GitHub</a>
    </div>
</div>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700;900&display=swap');
    * {
		scroll-behavior: smooth;
        font-family: 'Source Code Pro', monospace;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;  /* Firefox */
	}

	*::-webkit-scrollbar {
  		display: none;
	}

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        width: auto;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .screenTooSmall {
        display: none;
    }

    @media (max-width: 625px) {
        .screenTooSmall {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-direction: column;
            height: 100vh;
            background: black;
            width: 100vw;
            padding: 25px;

            h1 {
                font-size: 28px;
                text-align: center;
                font-weight: bold;
                color: white;
            }

            .links {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                color: white;
                flex-direction: column;

                h2 {
                    font-size: 23px;
                    margin-top: 15px;
                    text-align: center;
                }

                a {
                    font-size: 23px;
                    margin-top: 5px;
                    color: rgb(119, 160, 255);
                    text-decoration-color: red;
                    -moz-text-decoration-color: red;
                }
            }
        }

        .container {
            display: none;
        }
    }
</style>