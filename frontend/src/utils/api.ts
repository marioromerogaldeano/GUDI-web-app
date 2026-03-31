const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
}

const getAuthHeaders = (): HeadersInit => {
    const token = localStorage.getItem('token')

    if (!token) {
        return defaultHeaders
    }

    return {
        ...defaultHeaders,
        Authorization: `Bearer ${token}`,
    }
}

export const apiGet = async <T,>(url: string): Promise<T> => {
    const response = await fetch(url, {
        headers: getAuthHeaders(),
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data?.message || 'No se pudieron obtener los datos')
    }

    return data as T
}
