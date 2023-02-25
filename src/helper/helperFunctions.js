export const delay = (ms = 25) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}