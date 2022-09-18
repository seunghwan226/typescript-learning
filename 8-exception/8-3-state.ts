{
	class TimeoutError extends Error {}
	class OfflineError extends Error {}

	type NetworkErrorState = {
		result: 'fail';
		reason: 'offline' | 'down' | 'timeout';
	};
	type SuccessState = {
		result: 'success';
	};
	type ResultState = SuccessState | NetworkErrorState;
	class NetworkClient {
		tryConnect(): ResultState {
			throw new Error('no network!');
		}
	}

	class UserService {
		constructor(private client: NetworkClient) {}

		login() {
			this.client.tryConnect();
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);
	service.login();

	class App {
		constructor(private userService: UserService) {}

		run() {
			try {
				this.userService.login();
			} catch (error) {
				// show dialog to user
			}
		}
	}

	const app = new App(service);
	app.run();
}
