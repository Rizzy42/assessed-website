import App from './App.svelte';

const app = new App({
	target: document.body,
	// Svelte should change existing DOM rather then creating new elements.
	// Also helpful for Server-Side Rendering (SSR)
	hydrate: true
});

export default app;