export interface Storage {
	get(key: string): string | null;

	set(key: string, value: string): void;

	remove(key: string): void;

	clear(): void;
}

class MemoStorage implements Storage {
	#storage = new Map<string, string>();

	public get(key: string) {
		return this.#storage.get(key) || null;
	}

	public set(key: string, value: string) {
		this.#storage.set(key, value);
	}

	public remove(key: string) {
		this.#storage.delete(key);
	}

	public clear() {
		this.#storage.clear();
	}
}

class LocalStorage implements Storage {
	public static available(): boolean {
		const KEY = generateTestKey();

		try {
			localStorage.setItem(KEY, 'test');
			localStorage.removeItem(KEY);
			return true;
		} catch (e) {
			return false;
		}
	}

	public get(key: string) {
		return localStorage.getItem(key);
	}

	public set(key: string, value: string) {
		localStorage.setItem(key, value);
	}

	public remove(key: string) {
		localStorage.removeItem(key);
	}

	public clear() {
		localStorage.clear();
	}
}

const generateTestKey = () => {
	return new Array(4)
		.fill(null)
		.map(() => Math.random().toString(36).slice(2))
		.join('');
};

const generateStorage = (): Storage => {
	if (LocalStorage.available()) {
		return new LocalStorage();
	}

	return new MemoStorage();
};

export const safeLocalStorage = generateStorage();
