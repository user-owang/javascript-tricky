function curriedAdd(total = undefined) {
  if (total === undefined) return 0;
  return function addNext(num = undefined) {
    if (num === undefined) return total;
    total += num;
    return addNext;
  };
}

module.exports = { curriedAdd };
