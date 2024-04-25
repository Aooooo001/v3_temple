import {
	defineStore
} from 'pinia';


const app = defineStore({
	id: 'app',
	state: () => ({
		userName: ''
	}),
	actions: {
		getUserName(name) {
			this.userName = name;
		}
	},
	persist: {
		enabled: true,
		strategies: [{
			key: 'app-store',
		}, ],
	},
});

export default app;