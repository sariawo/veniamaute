function compareIntersection(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const percentage = (intersection.size / Math.max(...a.length, ...b.length)) * 100;
  return { intersection: Array.from(intersection), percentage: percentage.toFixed(2) };
}
