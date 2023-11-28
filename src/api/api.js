import axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '07c2ce06-3e87-4ef7-91ce-1867724a4b06',
	}
})

export const authAPI = {
	isAuthRequest() {
		return instance.get(`auth/me`).then(response => response.data);
	}
}

export const usersAPI = {
	getUsersRequest(page = 1, size = 10) {
		return instance.get(`users?page=${page}&count=${size}`)
			.then(response => response.data);
	}
}

export const profileAPI = {
	getProfileRequest(id) {
		return instance.get('profile/' + id)
			.then(response => response.data);
	}
};

export const followAPI = {
	followRequest(id) {
		return instance.post('follow/' + id)
			.then(response => response.data);
	},
	unfollowRequest(id) {
		return instance.delete('follow/' + id)
			.then(response => response.data);
	}
};