var getCurrentDate = () => {
  var currentDate = new Date();
  console.log(currentDate);
  return (
    currentDate.getMonth() +
    1 +
    '/' +
    currentDate.getDate() +
    '/' +
    currentDate.getFullYear()
  );
};

export { getCurrentDate };
