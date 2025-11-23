/**
 * Save search history
 */
export function saveSearchHistory(city) {
  const history = JSON.parse(localStorage.getItem("cityHistory") || "[]");

  /**
   * Remove if already exists
   */
  const filtered = history.filter((c) => c !== city);

  /**
   * Add to beginning
   */
  const updated = [city, ...filtered].slice(0, 10); // Keep last 10

  localStorage.setItem("cityHistory", JSON.stringify(updated));
}

export function getSearchHistory() {
  return JSON.parse(localStorage.getItem("cityHistory") || "[]");
}

export function clearSearchHistory() {
  localStorage.removeItem("cityHistory");
}
