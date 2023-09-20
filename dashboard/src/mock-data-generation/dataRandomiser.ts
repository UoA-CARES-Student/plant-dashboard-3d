import orginalData from './orginalData';

export const randomiseData = () => {
  const test = orginalData.map((data) => {
    const test = data.fruitlets > 15 ? 15 : data.fruitlets;
    let fruitlets = test - 3 + Math.floor(Math.random() * 5);
    if (fruitlets < 0) {
      fruitlets = 0;
    }
    let leaves = data.leaves - 3 + Math.floor(Math.random() * 5);
    if (leaves < 0) {
      leaves = 0;
    }
    return {
      date: data.date,
      area: data.area - 15 + Math.floor(Math.random() * 40),
      fruitlets: fruitlets,
      height: data.height - 8 + Math.floor(Math.random() * 24),
      leaves: leaves,
      volume: data.volume - 18 + Math.floor(Math.random() * 40),
      width: data.width - 6 + Math.floor(Math.random() * 18),
    };
  });
  console.log(test);
};
