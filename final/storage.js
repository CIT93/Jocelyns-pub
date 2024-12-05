const saveData = (data) => {
  localStorage.setItem("petsData", JSON.stringify(data));
};

const getData = () => {
  const data = localStorage.getItem("petsData");
  return data ? JSON.parse(data) : [];
};

export { saveData, getData };
