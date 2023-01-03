export default function handleResponseFromAPI(promise) {

    const res = {status: 200, body: 'success'}
    const info = 'Got a response from the API'

    return promise
    .then(() => res)
    .catch(() => new Error())
    .finally(() => {console.log(`${info}`);})
}