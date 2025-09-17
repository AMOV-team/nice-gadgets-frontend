// fetchClient.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://mglebofzkwauhvfdkssv.supabase.co/rest/v1';
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nbGVib2Z6a3dhdWh2ZmRrc3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMDYxNjksImV4cCI6MjA3MzY4MjE2OX0.su7ku7Fe3j69cxP0_LbRRyHUWE7ouA5NkRvI65L1g-c';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'apikey': API_KEY,
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(`${BASE_URL}${url}`, options).then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    // Якщо DELETE — не буде JSON
    return method === 'DELETE' ? (undefined as T) : response.json();
  });
}

export const client = {
  get: <T>(url: string): Promise<T> => request<T>(url),
  post: <T>(url: string, data: any): Promise<T> =>
    request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any): Promise<T> =>
    request<T>(url, 'PATCH', data),
  delete: (url: string): Promise<void> => request<void>(url, 'DELETE'),
};
