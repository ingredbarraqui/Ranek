export const API_URL = "https://ranekapi.origamid.dev/json"

export function PRODUTOS_GET() {
    return {
        url: API_URL + "/api/produto",
        options: {
            method: 'GET',
            Cache: 'no-store',
        }
    }
    console.log(url)
}
