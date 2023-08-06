import { create } from 'zustand';
import { safeLocalStorage } from '../constants/storage';

interface State {
	active: boolean;
}

interface Actions {
	deActivate: () => void;
	toggleActive: () => void;
}

const useToggleState = create<State & Actions>(set => ({
	active: JSON.parse(safeLocalStorage.get('sideNavActive')!) ?? false,
	toggleActive: () =>
		set(({ active }) => {
			safeLocalStorage.set('sideNavActive', JSON.stringify(!active));
			return { active: !active };
		}),
	deActivate: () =>
		set(() => {
			safeLocalStorage.set('sideNavActive', JSON.stringify(false));
			return { active: false };
		}),
}));

export default useToggleState;
