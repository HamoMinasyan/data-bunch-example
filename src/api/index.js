export const getCountByInterval = (callback) => {
    setInterval(() => {
        callback(1);
    }, 3000);
};

export const getTimeByInterval = (callback) => {
    setInterval(() => {
        const date = new Date();
        const value = `${date.getHours()}:${date.getMinutes()} - ${date.getSeconds()}`;
        callback(value);
    }, 500);
};