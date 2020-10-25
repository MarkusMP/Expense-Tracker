export const getLocalStorage = (key, initialValue) => {
    try {
        const transactions = window.localStorage.getItem(key);
        return transactions ? JSON.parse(transactions) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
}

export const setLocalStorage = (key, transactions) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(transactions));
      } catch (error) {
        console.log(error);
      }
}