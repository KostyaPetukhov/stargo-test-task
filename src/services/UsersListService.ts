import apiClient from '../config/axios';
import { AxiosResponse } from 'axios';

export default class UsersListService {
	static fetchUsersList(): Promise<AxiosResponse> {
		return apiClient.get('/list');
	}
}
