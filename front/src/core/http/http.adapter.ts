// **Interfaz HttpClient:** Define los métodos HTTP esperados
export interface HttpClient {
  get<T>(url: string): Promise<T>;

  post<T, B = unknown>(url: string, data?: B): Promise<T>;

  put<T, B = unknown>(url: string, data: B): Promise<T>;

  patch<T, B = unknown>(url: string, data: B): Promise<T>;

  delete<T>(url: string): Promise<T>;
}

// **Clase base abstracta HttpAdapter**
export abstract class HttpAdapter implements HttpClient {
  abstract get<T>(url: string): Promise<T>;

  abstract post<T, B = unknown>(url: string, data?: B): Promise<T>;

  abstract put<T, B = unknown>(url: string, data: B): Promise<T>;

  abstract patch<T, B = unknown>(url: string, data: B): Promise<T>;

  abstract delete<T>(url: string): Promise<T>;
}
