import { localCustomFetch } from "@/axios/customFetch";
import type { AsyncThunkConfig } from "@/store";
import type { Profile, ProfileFormData } from "@/types/types";
import type { GetThunkAPI } from "@reduxjs/toolkit";

export const updateUserThunk = async (
	{ data, id }: { data: ProfileFormData; id: string },
	thunkAPI: GetThunkAPI<AsyncThunkConfig>
): Promise<Profile | null> => {
	try {
		const { token } = thunkAPI.getState().usersSlice.token;
		const response = await localCustomFetch.patch<Profile>(`/profile/${id}`, { ...data }, { headers: { Authorization: `Bearer ${token}` } });
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const deleteUserThunk = async ({ id }: { id: string }, thunkAPI: GetThunkAPI<AsyncThunkConfig>): Promise<string | null> => {
	try {
		const { token } = thunkAPI.getState().usersSlice.token;
		const response = await localCustomFetch.delete<string>(`/profile/${id}`, { headers: { Authorization: `Bearer ${token}` } });
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
