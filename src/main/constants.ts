export const LINEBREAK = '\r\n'
export const NOREPLY = ' noreply'
export const FLUSH = 1e3
export const BUFFER = 1e2
export const CONTINUE = 1e1
export const FLAG_JSON = 1 << 1
export const FLAG_BINARY = 1 << 2
export const FLAG_NUMERIC = 1 << 3

export const TOKEN_TYPES: Array<string> = [
    'STORED',
    'TOUCHED',
    'DELETED',
    'OK',
    'EXISTS',
    'NOT_FOUND',
    'NOT_STORED',
    'ERROR',
    'CLIENT_ERROR',
    'SERVER_ERROR',
    'END',
    'VALUE',
    'INCRDECR',
    'STAT',
    'VERSION',
    'ITEM',
    'CONFIG',
]

export const RESULT_PARSERS: Array<string> = [
    'stats',
    'stats settings',
    'stats slabs',
    'stats items',
]
