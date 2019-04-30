export type MemcachedErrorType =
    | 'MemcachedMissingKey'
    | 'MemcachedExpiredValue'
    | 'MemcachedOpFailed'

export interface IMemcachedError {
    name: MemcachedErrorType
}

export class MemcachedMissingKey extends Error implements IMemcachedError {
    public readonly name = 'MemcachedMissingKey'
    constructor(key: string) {
        super(`Given key[${key}] does not have a value in Memcached`)
    }
}

export class MemcachedExpiredValue extends Error implements IMemcachedError {
    public readonly name = 'MemcachedExpiredValue'
    constructor(key: string) {
        super(`Value for given key[${key}] is expired`)
    }
}

export class MemcachedOpFailed extends Error implements IMemcachedError {
    public readonly name = 'MemcachedOpFailed'
    constructor(operation: string, key: string) {
        super(`Operation[${operation}] failed for key[${key}]`)
    }
}
