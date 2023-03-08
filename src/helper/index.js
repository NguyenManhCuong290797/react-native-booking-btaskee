// format money
export const formatPrice = (price) => (
  String(`${price}`).replace(/(.)(?=(\d{3})+$)/g, "$1,")
);