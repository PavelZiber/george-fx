export const formatNumber = (num?: number) => num ? Math.round((num + Number.EPSILON) * 100) / 100 : num;
