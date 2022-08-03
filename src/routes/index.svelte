<script context="module">
	export let prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let header: HTMLDivElement;

	onMount(() => {
		let shadow = '';

		for (let i = 0; i < 1000; i++) {
			shadow += (shadow ? ',' : '') + i + 'px ' + i + 'px 0 #eece1b';
		}

		header.style.textShadow = shadow;
	});
</script>

<main id="top">
	<nav>
		<h1><b>molai</b>.dev</h1>
		<div class="links">
			<a href="mailto:mahir@molai.dev" class="email">Email</a>
		</div>
	</nav>
	<div bind:this={header} class="header">
		<p class="design">Designer</p>
		Mahir Molai
		<p class="frontend">Front-end Dev</p>
	</div>
	<div class="player">
		<p class="credits">
			Music Credits:
			<br />
			<a href="https://www.youtube.com/watch?v=mMYfOB_rzac" target="_blank">Keshi - Beside You</a>
		</p>
		<audio class="gap-bottom-left" controls autoplay src="/music/bgsong.mp3" />
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
	$btn-text-colour: #ffdf33;
	$bg: #ffdf33;
	$shadow: #eece1b;
	$btn: #b8a01b;

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 517px;
		}
	}
	@keyframes blink {
		from {
			border-color: transparent;
		}
		to {
			border-color: orange;
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

		h1 {
			color: $text-colour;
			font-size: 36px;
			cursor: pointer;

			/**
                b {
                color: black;
            }
            */
		}

		.links {
			display: flex;
			flex-direction: row;
			gap: 40px;
			align-items: center;
			justify-content: space-between;
			gap: 50px;

			.email {
                text-decoration: none;
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
		height: calc(100vh - 130px);
		width: 100vw;
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
			margin-right: 330px;
		}
	}
</style>
