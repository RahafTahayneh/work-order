export const routes = {
    main:{
        key: 'main',
        getPath: (): string=> '/'
    },
    workerProfile:{
        key: 'worker',
        getPath: (id?: number): string=> `/workers/${id || ':id'}`
    }
}