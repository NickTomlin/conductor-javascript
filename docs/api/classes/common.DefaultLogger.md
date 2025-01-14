[@io-orkes/conductor-typescript](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / DefaultLogger

# Class: DefaultLogger

[common](../modules/common.md).DefaultLogger

## Implements

- [`ConductorLogger`](../interfaces/common.ConductorLogger.md)

## Table of contents

### Constructors

- [constructor](common.DefaultLogger.md#constructor)

### Properties

- [level](common.DefaultLogger.md#level)
- [tags](common.DefaultLogger.md#tags)

### Methods

- [debug](common.DefaultLogger.md#debug)
- [error](common.DefaultLogger.md#error)
- [info](common.DefaultLogger.md#info)
- [log](common.DefaultLogger.md#log)

## Constructors

### constructor

• **new DefaultLogger**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`DefaultLoggerConfig`](../interfaces/common.DefaultLoggerConfig.md) |

#### Defined in

src/common/ConductorLogger.ts:28

## Properties

### level

• `Private` `Readonly` **level**: `number`

#### Defined in

src/common/ConductorLogger.ts:26

___

### tags

• `Private` `Readonly` **tags**: `Object`[]

#### Defined in

src/common/ConductorLogger.ts:25

## Methods

### debug

▸ **debug**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`void`

#### Implementation of

[ConductorLogger](../interfaces/common.ConductorLogger.md).[debug](../interfaces/common.ConductorLogger.md#debug)

#### Defined in

src/common/ConductorLogger.ts:56

___

### error

▸ **error**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`void`

#### Implementation of

[ConductorLogger](../interfaces/common.ConductorLogger.md).[error](../interfaces/common.ConductorLogger.md#error)

#### Defined in

src/common/ConductorLogger.ts:60

___

### info

▸ **info**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`void`

#### Implementation of

[ConductorLogger](../interfaces/common.ConductorLogger.md).[info](../interfaces/common.ConductorLogger.md#info)

#### Defined in

src/common/ConductorLogger.ts:52

___

### log

▸ `Private` **log**(`level`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | ``"DEBUG"`` \| ``"INFO"`` \| ``"ERROR"`` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

src/common/ConductorLogger.ts:38
