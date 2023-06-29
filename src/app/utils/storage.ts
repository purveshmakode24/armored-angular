const __prefix = '_ng_';

export const storage = {
    getItem: (key: string) => {
        return JSON.parse(window.localStorage.getItem(__prefix + key) as string);
    },
    setItem: (key: string, value: string) => {
        window.localStorage.setItem(__prefix + key, value);
    },
    clearItem: (key: string) => {
        window.localStorage.removeItem(__prefix + key);
    },
    clearAllItems: () => {
        window.localStorage.clear();
    }
};