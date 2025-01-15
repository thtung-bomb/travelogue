/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import { cleanParams } from "@/utils";
import ApiRequest from "@/interfaces/api";


export const BaseService = {
	async get<T = any>({ url, payload, headers }: ApiRequest): Promise<AxiosResponse<T>> {
		if (!url) {
			throw new Error("URL is required for GET request");
		}
		try {
			const params = cleanParams({ ...payload });
			const response = await axiosInstance.get<T, AxiosResponse<T>>(url, {
				params,
				headers: headers || {},
			});
			return response;
		} catch (error) {
			// Handle error if needed, e.g., dispatch error action
			console.error("GET request failed", error);
			throw error;
		}
	},

	async post<T = any>({ url, payload, headers }: ApiRequest): Promise<AxiosResponse<T>> {
		if (!url) {
			throw new Error("URL is required for POST request");
		}
		try {
			const response = await axiosInstance.post<T, AxiosResponse<T>>(url, payload, {
				headers: headers || {},
			});
			return response;
		} catch (error) {
			console.error("POST request failed", error);
			throw error;
		}
	},
	async put<T = any>({ url, payload, headers }: ApiRequest): Promise<AxiosResponse<T>> {
		if (!url) {
			throw new Error("URL is required for PUT request");
		}
		try {
			const response = await axiosInstance.put<T, AxiosResponse<T>>(url, payload, {
				headers: headers || {},
			});
			return response;
		} catch (error) {
			console.error("PUT request failed", error);
			throw error;
		}
	},

	async delete<T = any>({ url, payload, headers }: ApiRequest): Promise<AxiosResponse<T>> {
		if (!url) {
			throw new Error("URL is required for DELETE request");
		}
		try {
			const params = cleanParams({ ...payload });
			const response = await axiosInstance.delete<T, AxiosResponse<T>>(url, {
				params,
				headers: headers || {},
			});
			console.log(response);
			return response;
		} catch (error) {
			console.error("DELETE request failed", error);
			throw error;
		}
	},

	async getById<T = any>({ url, id, headers }: { url: string; id: string | number; headers?: any }): Promise<AxiosResponse<T>> {
		try {
			const response = await axiosInstance.get<T, AxiosResponse<T>>(`${url}/${id}`, {
				headers: headers || {},
			});
			return response;
		} catch (error) {
			console.error("GET by ID request failed", error);
			throw error;
		}
	}
};
