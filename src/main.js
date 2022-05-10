import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Andy'
	}
});

const app1 = new App({
	target: document.body,
	props: {
		name: 'Moi'
	}
});
const app3 = new App({
	target: document.body,
	props: {
		name: 'Toi'
	}
});

export default app;