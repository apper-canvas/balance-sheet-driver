export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};

export const formatDateShort = (date) => {
  return new Intl.DateFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};

export const formatPercentage = (value) => {
  return `${Math.round(value)}%`;
};

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
};

export const getMonthName = (monthString) => {
  const date = new Date(monthString + "-01");
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};