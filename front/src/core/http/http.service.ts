import { HttpAdapter } from '@core/http/http.adapter';

export class HttpService {
  constructor(private readonly adapter: HttpAdapter) {}

  get<T>(url: string): Promise<T> {
    return this.adapter.get<T>(url);
  }

  post<T, B = unknown>(url: string, data?: B): Promise<T> {
    return this.adapter.post<T, B>(url, data);
  }

  put<T, B = unknown>(url: string, data: B): Promise<T> {
    return this.adapter.put<T, B>(url, data);
  }

  patch<T, B = unknown>(url: string, data: B): Promise<T> {
    return this.adapter.patch<T, B>(url, data);
  }

  delete<T>(url: string): Promise<T> {
    return this.adapter.delete<T>(url);
  }
}
