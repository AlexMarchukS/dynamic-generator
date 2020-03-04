export const capitalize = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .charAt(0)
    .toUpperCase() + str.slice(1);
};

export const snakeCaseToTitle = (str, separator = ' ', reverse = false) => {
  if (typeof str !== 'string') return '';

  const result = str
    .split('_')
    .map(title => capitalize(title.toLowerCase()));

  return !reverse ? result.join(separator) : result.reverse().join(separator);
};
