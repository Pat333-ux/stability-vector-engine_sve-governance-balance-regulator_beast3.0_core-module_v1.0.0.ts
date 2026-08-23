export const StabilityVectorEngine = {
  compute(vectors) {
    const score = Object.values(vectors).reduce((a, b) => a + b, 0);
    return score / Object.keys(vectors).length;
  }
};
