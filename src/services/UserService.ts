import apiClient from '../config/axios';
import { AxiosResponse } from 'axios';

export default class UserService {
	static fetchUser(id: string): Promise<AxiosResponse> {
		return apiClient.get(`/get/${id}`);
	}
}
