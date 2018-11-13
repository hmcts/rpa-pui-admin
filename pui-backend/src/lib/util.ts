import * as express from 'express'
import { Logger } from 'log4js'

export function asyncReturnOrError(promise: any, message: string, res: express.Response, logger: Logger): any {
    return promise
        .then(data => {
            return data
        })
        .catch(err => {
            const msg = `${message}: ${err.message}`
            logger.error(msg)
            res.status(err.statusCode || 500).send(msg)
            return null
        })
}

export function dotNotation(nestled: string) {
    return nestled.replace(/[\[\]]/g, '.')
}

export function valueOrNull(object: any, nestled: string) {
    const value = exists(object, nestled, true)
    return value ? value : null
}

export function exists(object: any, nestled: string, returnValue = false) {
    const dotArray = dotNotation(nestled).split('.')
    if (object) {
        if (dotArray.length && dotArray[0] !== '') {
            const current = dotArray[0]
            dotArray.shift()
            if (object[current]) {
                return exists(object[current], dotArray.join('.'), returnValue)
            } else {
                return false
            }
        } else {
            return returnValue ? object : true
        }
    } else {
        return false
    }
}

export function shorten(str: string, maxLen: number): string {
    return str.length > maxLen ? `${str.substring(0, maxLen)}...` : str
}
