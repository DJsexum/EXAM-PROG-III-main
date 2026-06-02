import { HttpAdapter } from '@core/http/http.adapter';

/**
 * Endpoints que NO requieren Authorization header
 * (login, refresh, etc.)
 */
const PUBLIC_ENDPOINTS = ['/auth', '/auth/refresh'];

export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    return this.request<T>('GET', url);
  }

  async post<T, B = unknown>(url: string, data?: B): Promise<T> {
    return this.request<T>('POST', url, data);
  }

  async put<T, B = unknown>(url: string, data: B): Promise<T> {
    return this.request<T>('PUT', url, data);
  }

  async patch<T, B = unknown>(url: string, data: B): Promise<T> {
    return this.request<T>('PATCH', url, data);
  }

  async delete<T>(url: string): Promise<T> {
    return this.request<T>('DELETE', url);
  }

  // 🔒 Core request
  private async request<T>(method: string, url: string, body?: unknown): Promise<T> {
    const token = getAuthToken();
    const isPublic = PUBLIC_ENDPOINTS.some((endpoint) => url.includes(endpoint));

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // ✅ SOLO agregar Authorization si corresponde
    if (!isPublic && token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      method,
      headers,
      // credentials: 'include', // 🔥 CLAVE PARA COOKIES
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw await response.json();
    }

    return response.json() as Promise<T>;
  }
}

/**
 * Lee token SOLO en cliente
 * (SSR usa cookies directamente)
 */
function getAuthToken(): string | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.split('; ').find((row) => row.startsWith('token='));

  return match ? match.split('=')[1] : null;
}
