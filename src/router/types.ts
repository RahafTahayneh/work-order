export type Route = {
    key: string,
    getPath: (...params: string[]) => string,
}
