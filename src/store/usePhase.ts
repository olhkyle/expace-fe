import { create } from 'zustand';

interface State {
	phase: number;
}

interface Actions {
	forward: () => void;
	backward: () => void;
	reset: () => void;
}

// constants
const LAST_PHASE = 4;
const KEY = 'signupPhase';

const usePhase = create<State & Actions>(set => ({
	phase: JSON.parse(localStorage.getItem(KEY)!) ?? 0,
	forward: () =>
		set(({ phase }) => {
			if (phase === LAST_PHASE) {
				localStorage.setItem(KEY, JSON.stringify(LAST_PHASE));
				return { phase: LAST_PHASE };
			}

			localStorage.setItem(KEY, JSON.stringify(phase + 1));
			return { phase: phase + 1 };
		}),
	backward: () =>
		set(({ phase }) => {
			if (phase === 0) {
				localStorage.setItem(KEY, JSON.stringify(0));
				return { phase: 0 };
			}

			localStorage.setItem(KEY, JSON.stringify(phase - 1));
			return { phase: phase - 1 };
		}),
	reset: () =>
		set(() => {
			localStorage.setItem(KEY, JSON.stringify(0));
			return { phase: 0 };
		}),
}));

export default usePhase;
