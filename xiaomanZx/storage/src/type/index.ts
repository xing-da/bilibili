
import { Dictionaries } from "../enum"
export type Expire = Dictionaries.permanent | number //时间戳 或者 永久Dictionaries.permanent
export type Key = string
export interface Result<T> {
    message: string
    value: T | null
}
export interface Data<T> {
    value: T,
    [Dictionaries.expire]: Expire
}
export interface StorageCls {
    get: <T> (key: Key) => void
    set: <T> (key: Key, value: T, expire: Expire) => void
    remove: (key: Key) => void
    clear: () => void
}