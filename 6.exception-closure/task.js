const parseCount = (num) => {
  if (isNaN(Number.parseInt(num))) {
    throw new Error('Невалидное значение')
  }

  return Number.parseInt(num);
}

const validateCount = (num) => {
  try {
    parseCount(num);
  } catch(err) {
    return err
  } 
  return parseCount(num)
}