import axios from 'axios';

const jwtToken =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjMiLCJpZGVudGl0eSI6IjEyMzQifQ.yOIx1ZozHSMy_ZndEEMXIH0YeGUkHH3idl_2WTI12gs';

const apiClient = axios.create({
	baseURL: 'http://opn-interview-service.nn.r.appspot.com',
	// responseType: 'json',
});

apiClient.interceptors.request.use((config) => {
	config.headers!.Authorization = `Bearer ${jwtToken}`;
	return config;
});

export default apiClient;
