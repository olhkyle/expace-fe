import { create } from 'zustand';

export interface User {
	username: string;
	email: string;
}

interface State {
	user: User;
}

interface Actions {
	setUser: (userData: User) => void;
}

// constants
const KEY = 'auth';

export const initialState: State = { user: { username: '', email: '' } };

const useAuth = create<State & Actions>(set => ({
	user: JSON.parse(localStorage.getItem(KEY)!) ?? initialState.user,
	setUser: userData =>
		set(() => {
			localStorage.setItem(KEY, JSON.stringify({ ...userData }));
			return { user: { ...userData } };
		}),
}));

export default useAuth;
