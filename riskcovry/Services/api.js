export const fetchData = async () => {
    return new Promise((resolve, reject) => {
      console.log("Data is fetching");
      setTimeout(() => {
        const data = [10, 20, 30, 40];
        resolve(data);
      }, 500);
    });
};