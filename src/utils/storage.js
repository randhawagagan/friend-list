export const get = (key) => {
    return localStorage.getItem(key) || null;
};

export const getObj = (key) => {
    const string = get(key);
    try {
        const obj = JSON.parse(string);
        return obj;
    } catch (e) {
        return {};
    }
};

export const set = (key, value) => {
    return localStorage.setItem(key,value) || null;
};

export const setObj = (key, value) => {
    set(key, JSON.stringify(value));
};
