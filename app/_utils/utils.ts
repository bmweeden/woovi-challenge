export const formatCurrency = (number: number) => {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);

  const currencyWithoutSymbol = formattedCurrency.replace(/^R\$\s*/, '');

  return currencyWithoutSymbol;
};

export const rem = (pixels: number) => {
  const baseFontSize = 16;
  const remVal = pixels / baseFontSize;
  return `${remVal}rem`;
};
