export function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}
export function filterIsrael(arr) {
  return arr.filter((country) => country.name.common !== "Israel");
}
