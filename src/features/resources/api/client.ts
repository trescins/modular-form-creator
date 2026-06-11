export const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5001';

export interface ApiError {
    isApiError: true;
    status: number;
    message: string;
}

export async function request<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
    })

    if (!response.ok) {
        const body = await response.json().catch(() => null);
        const message = body?.message ?? `HTTP ${response.status}`;

        throw { isApiError: true, status: response.status, message } satisfies ApiError
    }

    return response.json() as T;
}