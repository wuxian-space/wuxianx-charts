declare type DefineObject<T = any> = Record<string, T>

declare type AnyObject = DefineObject
declare type StringObject = DefineObject<string>
declare type NumberObject = DefineObject<number>
declare type StringNumberObject = DefineObject<string | number>

declare type DefineKeyValuePairArray<T = any> = [string, T][]
declare type AnyKeyValuePairArray = DefineKeyValuePairArray
declare type StringKeyValuePairArray = DefineKeyValuePairArray<string>
declare type NumberKeyValuePairArray = DefineKeyValuePairArray<number>
declare type StringNumberKeyValuePairArray = DefineKeyValuePairArray<string | number>
