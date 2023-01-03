export default function uploadPhoto(filename) {
    const rej = Promise.reject(new Error(`${filename} cannot be processed`))
    return rej;
}