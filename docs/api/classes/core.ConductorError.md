[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [core](../modules/core.md) / ConductorError

# Class: ConductorError

[core](../modules/core.md).ConductorError

## Hierarchy

- `Error`

  ↳ **`ConductorError`**

## Table of contents

### Constructors

- [constructor](core.ConductorError.md#constructor)

### Properties

- [\_\_proto\_\_](core.ConductorError.md#__proto__)
- [\_trace](core.ConductorError.md#_trace)
- [message](core.ConductorError.md#message)
- [name](core.ConductorError.md#name)
- [stack](core.ConductorError.md#stack)
- [prepareStackTrace](core.ConductorError.md#preparestacktrace)
- [stackTraceLimit](core.ConductorError.md#stacktracelimit)

### Methods

- [captureStackTrace](core.ConductorError.md#capturestacktrace)

## Constructors

### constructor

• **new ConductorError**(`message?`, `innerError?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `innerError?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

src/core/types.ts:30

## Properties

### \_\_proto\_\_

• `Private` **\_\_proto\_\_**: `any`

#### Defined in

src/core/types.ts:28

___

### \_trace

• `Private` **\_trace**: `undefined` \| `Error`

#### Defined in

src/core/types.ts:27

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1029

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1030

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
