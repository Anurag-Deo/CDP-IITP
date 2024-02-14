export const makePostRequest = async (path, body) => {
    const response = await fetch(path, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json_response = await response.json()
    return json_response
}