import { CallbackFunction, Key } from './types'

import * as Utils from './utils'

export type NativeConstructor =
    | StringConstructor
    | NumberConstructor
    | FunctionConstructor
    | ArrayConstructor
    | BooleanConstructor
    | ObjectConstructor

export type ValidationItem = [string, NativeConstructor]

export type ValidationItems = Array<ValidationItem>

export type CommandType =
    | 'touch'
    | 'get'
    | 'gets'
    | 'delete'
    | 'stats cachedump'
    | 'set'
    | 'replace'
    | 'add'
    | 'cas'
    | 'append'
    | 'prepend'
    | 'incr'
    | 'decr'
    | 'version'
    | 'flush_all'
    | 'stats'
    | 'stats settings'
    | 'stats slabs'
    | 'stats items'

export type CommandCompiler = (noreply?: boolean) => CommandOptions

export interface IMemcachedCommand {
    key: Key
    value: any
    callback: CallbackFunction
    lifetime: number
    validate: ValidationItems
    type: CommandType
    command: string
    redundancyEnabled: boolean
    multi: boolean
    cas: string
    start: number
    execution: number
}

export const DEFAULT_COMMAND: IMemcachedCommand = {
    key: '',
    value: null,
    callback: (err: any, data: any): void => {
        // Yeah, this is No-op
    },
    lifetime: 0,
    validate: [],
    type: 'touch',
    command: '',
    redundancyEnabled: false,
    multi: false,
    cas: '',
    start: 0,
    execution: 0,
}

export type CommandOptions = Partial<IMemcachedCommand>

export function makeCommand(options: CommandOptions): IMemcachedCommand {
    return Utils.merge(DEFAULT_COMMAND, options)
}
