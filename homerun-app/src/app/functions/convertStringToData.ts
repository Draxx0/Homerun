const convertStringToData = (stringDate: string): Date => {
  const dateParts = stringDate.split("/");
  const year = parseInt(dateParts[2], 10);
  const month = parseInt(dateParts[1], 10) - 1; 
  const day = parseInt(dateParts[0], 10);
  return new Date(year, month, day);
};

export default convertStringToData;
