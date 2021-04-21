const get = (key) => {
    return localStorage.getItem(key) || null;
};

export const getObj = (key) => {
    const string = get(key);
    try {
        const obj = JSON.parse(string);
        console.log({ key, obj });
        return obj;
    } catch (e) {
        return {};
    }
};

const set = (key, value) => {
    return localStorage.setItem(key,value) || null;
};

export const setObj = (key, value) => {
    set(key, JSON.stringify(value));
};
