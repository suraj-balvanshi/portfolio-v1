// src/utils/apiClient.ts

/**
 * A highly reusable, type-safe wrapper around the native fetch API.
 * @template The expected shape of the successful JSON response.
 * @param {string} url The endpoint path or full URL to fetch.
 * @param {RequestInit} [options] Optional standard fetch configurations (headers, method, body, etc.).
 * @returns {Promise<T>} Returns a promise typed to your expected data shape.
 */
export async function apiRequest<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(url, options);

  // 400 and 500 levels are failed responses, so we throw an error
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(
      errorBody.error ||
        `Network Error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<T>;
}
