import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'satya',
		age: 19
	}
});

export default app;