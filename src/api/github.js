import { instance as api } from './lib';

export const fetchUser = async(username) => {
    try {
        const results = await api.get(`/users/${username}/repos`);
        return results.data;
    } catch(error) {
        console.log('error', error)
        return {error};
    }
}