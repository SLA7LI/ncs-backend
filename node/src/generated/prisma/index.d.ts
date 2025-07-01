
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Worker
 * 
 */
export type Worker = $Result.DefaultSelection<Prisma.$WorkerPayload>
/**
 * Model ServiceRequest
 * 
 */
export type ServiceRequest = $Result.DefaultSelection<Prisma.$ServiceRequestPayload>
/**
 * Model ServiceRequestImage
 * 
 */
export type ServiceRequestImage = $Result.DefaultSelection<Prisma.$ServiceRequestImagePayload>
/**
 * Model LobbyParticipant
 * 
 */
export type LobbyParticipant = $Result.DefaultSelection<Prisma.$LobbyParticipantPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model escrows
 * 
 */
export type escrows = $Result.DefaultSelection<Prisma.$escrowsPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Urgency: {
  normal: 'normal',
  urgent: 'urgent'
};

export type Urgency = (typeof Urgency)[keyof typeof Urgency]


export const RequestStatus: {
  open: 'open',
  in_progress: 'in_progress',
  closed: 'closed'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const InvitationSource: {
  manual: 'manual',
  autoAssigned: 'autoAssigned'
};

export type InvitationSource = (typeof InvitationSource)[keyof typeof InvitationSource]


export const ParticipantStatus: {
  pending: 'pending',
  bidding: 'bidding',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type ParticipantStatus = (typeof ParticipantStatus)[keyof typeof ParticipantStatus]


export const transactions_type: {
  in: 'in',
  out: 'out'
};

export type transactions_type = (typeof transactions_type)[keyof typeof transactions_type]


export const transactions_status: {
  pending: 'pending',
  success: 'success',
  failed: 'failed'
};

export type transactions_status = (typeof transactions_status)[keyof typeof transactions_status]

}

export type Urgency = $Enums.Urgency

export const Urgency: typeof $Enums.Urgency

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type InvitationSource = $Enums.InvitationSource

export const InvitationSource: typeof $Enums.InvitationSource

export type ParticipantStatus = $Enums.ParticipantStatus

export const ParticipantStatus: typeof $Enums.ParticipantStatus

export type transactions_type = $Enums.transactions_type

export const transactions_type: typeof $Enums.transactions_type

export type transactions_status = $Enums.transactions_status

export const transactions_status: typeof $Enums.transactions_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worker`: Exposes CRUD operations for the **Worker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.worker.findMany()
    * ```
    */
  get worker(): Prisma.WorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceRequest`: Exposes CRUD operations for the **ServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRequests
    * const serviceRequests = await prisma.serviceRequest.findMany()
    * ```
    */
  get serviceRequest(): Prisma.ServiceRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceRequestImage`: Exposes CRUD operations for the **ServiceRequestImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRequestImages
    * const serviceRequestImages = await prisma.serviceRequestImage.findMany()
    * ```
    */
  get serviceRequestImage(): Prisma.ServiceRequestImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lobbyParticipant`: Exposes CRUD operations for the **LobbyParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LobbyParticipants
    * const lobbyParticipants = await prisma.lobbyParticipant.findMany()
    * ```
    */
  get lobbyParticipant(): Prisma.LobbyParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.escrows`: Exposes CRUD operations for the **escrows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escrows
    * const escrows = await prisma.escrows.findMany()
    * ```
    */
  get escrows(): Prisma.escrowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Worker: 'Worker',
    ServiceRequest: 'ServiceRequest',
    ServiceRequestImage: 'ServiceRequestImage',
    LobbyParticipant: 'LobbyParticipant',
    Notification: 'Notification',
    escrows: 'escrows',
    transactions: 'transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "worker" | "serviceRequest" | "serviceRequestImage" | "lobbyParticipant" | "notification" | "escrows" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Worker: {
        payload: Prisma.$WorkerPayload<ExtArgs>
        fields: Prisma.WorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findFirst: {
            args: Prisma.WorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findMany: {
            args: Prisma.WorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          create: {
            args: Prisma.WorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          createMany: {
            args: Prisma.WorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          update: {
            args: Prisma.WorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          deleteMany: {
            args: Prisma.WorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          aggregate: {
            args: Prisma.WorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorker>
          }
          groupBy: {
            args: Prisma.WorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerCountAggregateOutputType> | number
          }
        }
      }
      ServiceRequest: {
        payload: Prisma.$ServiceRequestPayload<ExtArgs>
        fields: Prisma.ServiceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          findFirst: {
            args: Prisma.ServiceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          findMany: {
            args: Prisma.ServiceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>[]
          }
          create: {
            args: Prisma.ServiceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          createMany: {
            args: Prisma.ServiceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          update: {
            args: Prisma.ServiceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          deleteMany: {
            args: Prisma.ServiceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          aggregate: {
            args: Prisma.ServiceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceRequest>
          }
          groupBy: {
            args: Prisma.ServiceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestCountAggregateOutputType> | number
          }
        }
      }
      ServiceRequestImage: {
        payload: Prisma.$ServiceRequestImagePayload<ExtArgs>
        fields: Prisma.ServiceRequestImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceRequestImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceRequestImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestImagePayload>
          }
          findFirst: {
            args: Prisma.ServiceRequestImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceRequestImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestImagePayload>
          }
          findMany: {
            args: Prisma.ServiceRequestImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestImagePayload>[]
          }
          create: {
            args: Prisma.ServiceRequestImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestImagePayload>
          }
          createMany: {
            args: Prisma.ServiceRequestImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceRequestImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestImagePayload>
          }
          update: {
            args: Prisma.ServiceRequestImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestImagePayload>
          }
          deleteMany: {
            args: Prisma.ServiceRequestImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceRequestImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceRequestImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestImagePayload>
          }
          aggregate: {
            args: Prisma.ServiceRequestImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceRequestImage>
          }
          groupBy: {
            args: Prisma.ServiceRequestImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceRequestImageCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestImageCountAggregateOutputType> | number
          }
        }
      }
      LobbyParticipant: {
        payload: Prisma.$LobbyParticipantPayload<ExtArgs>
        fields: Prisma.LobbyParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LobbyParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LobbyParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          findFirst: {
            args: Prisma.LobbyParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LobbyParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          findMany: {
            args: Prisma.LobbyParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>[]
          }
          create: {
            args: Prisma.LobbyParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          createMany: {
            args: Prisma.LobbyParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LobbyParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          update: {
            args: Prisma.LobbyParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          deleteMany: {
            args: Prisma.LobbyParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LobbyParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LobbyParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          aggregate: {
            args: Prisma.LobbyParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLobbyParticipant>
          }
          groupBy: {
            args: Prisma.LobbyParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<LobbyParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.LobbyParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<LobbyParticipantCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      escrows: {
        payload: Prisma.$escrowsPayload<ExtArgs>
        fields: Prisma.escrowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.escrowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$escrowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.escrowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$escrowsPayload>
          }
          findFirst: {
            args: Prisma.escrowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$escrowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.escrowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$escrowsPayload>
          }
          findMany: {
            args: Prisma.escrowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$escrowsPayload>[]
          }
          create: {
            args: Prisma.escrowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$escrowsPayload>
          }
          createMany: {
            args: Prisma.escrowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.escrowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$escrowsPayload>
          }
          update: {
            args: Prisma.escrowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$escrowsPayload>
          }
          deleteMany: {
            args: Prisma.escrowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.escrowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.escrowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$escrowsPayload>
          }
          aggregate: {
            args: Prisma.EscrowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscrows>
          }
          groupBy: {
            args: Prisma.escrowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscrowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.escrowsCountArgs<ExtArgs>
            result: $Utils.Optional<EscrowsCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    worker?: WorkerOmit
    serviceRequest?: ServiceRequestOmit
    serviceRequestImage?: ServiceRequestImageOmit
    lobbyParticipant?: LobbyParticipantOmit
    notification?: NotificationOmit
    escrows?: escrowsOmit
    transactions?: transactionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    notifications: number
    serviceRequests: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    serviceRequests?: boolean | UsersCountOutputTypeCountServiceRequestsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountServiceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
  }


  /**
   * Count Type WorkerCountOutputType
   */

  export type WorkerCountOutputType = {
    lobbyParticipations: number
  }

  export type WorkerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobbyParticipations?: boolean | WorkerCountOutputTypeCountLobbyParticipationsArgs
  }

  // Custom InputTypes
  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCountOutputType
     */
    select?: WorkerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountLobbyParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyParticipantWhereInput
  }


  /**
   * Count Type ServiceRequestCountOutputType
   */

  export type ServiceRequestCountOutputType = {
    participants: number
    images: number
  }

  export type ServiceRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ServiceRequestCountOutputTypeCountParticipantsArgs
    images?: boolean | ServiceRequestCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ServiceRequestCountOutputType without action
   */
  export type ServiceRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestCountOutputType
     */
    select?: ServiceRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceRequestCountOutputType without action
   */
  export type ServiceRequestCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyParticipantWhereInput
  }

  /**
   * ServiceRequestCountOutputType without action
   */
  export type ServiceRequestCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    phone: string | null
    wilaya: string | null
    baladia: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    phone: string | null
    wilaya: string | null
    baladia: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    phone: number
    wilaya: number
    baladia: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    wilaya?: true
    baladia?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    wilaya?: true
    baladia?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    wilaya?: true
    baladia?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    wilaya?: boolean
    baladia?: boolean
    created_at?: boolean
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    serviceRequests?: boolean | Users$serviceRequestsArgs<ExtArgs>
    worker?: boolean | Users$workerArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    wilaya?: boolean
    baladia?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "phone" | "wilaya" | "baladia" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    serviceRequests?: boolean | Users$serviceRequestsArgs<ExtArgs>
    worker?: boolean | Users$workerArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      serviceRequests: Prisma.$ServiceRequestPayload<ExtArgs>[]
      worker: Prisma.$WorkerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      phone: string
      wilaya: string
      baladia: string
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends Users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    serviceRequests<T extends Users$serviceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Users$serviceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    worker<T extends Users$workerArgs<ExtArgs> = {}>(args?: Subset<T, Users$workerArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly wilaya: FieldRef<"Users", 'String'>
    readonly baladia: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.notifications
   */
  export type Users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Users.serviceRequests
   */
  export type Users$serviceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    cursor?: ServiceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * Users.worker
   */
  export type Users$workerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    where?: WorkerWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Worker
   */

  export type AggregateWorker = {
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  export type WorkerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    rating: number | null
    completedJobs: number | null
  }

  export type WorkerSumAggregateOutputType = {
    id: number | null
    userId: number | null
    rating: number | null
    completedJobs: number | null
  }

  export type WorkerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    rating: number | null
    completedJobs: number | null
    genre: string | null
    bio: string | null
    picture: string | null
    nationalIDPicture: string | null
    businessDocumentPDF: string | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type WorkerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    rating: number | null
    completedJobs: number | null
    genre: string | null
    bio: string | null
    picture: string | null
    nationalIDPicture: string | null
    businessDocumentPDF: string | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type WorkerCountAggregateOutputType = {
    id: number
    userId: number
    availability: number
    rating: number
    completedJobs: number
    genre: number
    bio: number
    picture: number
    nationalIDPicture: number
    businessDocumentPDF: number
    verified: number
    createdAt: number
    _all: number
  }


  export type WorkerAvgAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    completedJobs?: true
  }

  export type WorkerSumAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    completedJobs?: true
  }

  export type WorkerMinAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    completedJobs?: true
    genre?: true
    bio?: true
    picture?: true
    nationalIDPicture?: true
    businessDocumentPDF?: true
    verified?: true
    createdAt?: true
  }

  export type WorkerMaxAggregateInputType = {
    id?: true
    userId?: true
    rating?: true
    completedJobs?: true
    genre?: true
    bio?: true
    picture?: true
    nationalIDPicture?: true
    businessDocumentPDF?: true
    verified?: true
    createdAt?: true
  }

  export type WorkerCountAggregateInputType = {
    id?: true
    userId?: true
    availability?: true
    rating?: true
    completedJobs?: true
    genre?: true
    bio?: true
    picture?: true
    nationalIDPicture?: true
    businessDocumentPDF?: true
    verified?: true
    createdAt?: true
    _all?: true
  }

  export type WorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worker to aggregate.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workers
    **/
    _count?: true | WorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerMaxAggregateInputType
  }

  export type GetWorkerAggregateType<T extends WorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker[P]>
      : GetScalarType<T[P], AggregateWorker[P]>
  }




  export type WorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerWhereInput
    orderBy?: WorkerOrderByWithAggregationInput | WorkerOrderByWithAggregationInput[]
    by: WorkerScalarFieldEnum[] | WorkerScalarFieldEnum
    having?: WorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCountAggregateInputType | true
    _avg?: WorkerAvgAggregateInputType
    _sum?: WorkerSumAggregateInputType
    _min?: WorkerMinAggregateInputType
    _max?: WorkerMaxAggregateInputType
  }

  export type WorkerGroupByOutputType = {
    id: number
    userId: number
    availability: JsonValue
    rating: number
    completedJobs: number
    genre: string
    bio: string | null
    picture: string | null
    nationalIDPicture: string | null
    businessDocumentPDF: string | null
    verified: boolean
    createdAt: Date
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  type GetWorkerGroupByPayload<T extends WorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    availability?: boolean
    rating?: boolean
    completedJobs?: boolean
    genre?: boolean
    bio?: boolean
    picture?: boolean
    nationalIDPicture?: boolean
    businessDocumentPDF?: boolean
    verified?: boolean
    createdAt?: boolean
    lobbyParticipations?: boolean | Worker$lobbyParticipationsArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker"]>



  export type WorkerSelectScalar = {
    id?: boolean
    userId?: boolean
    availability?: boolean
    rating?: boolean
    completedJobs?: boolean
    genre?: boolean
    bio?: boolean
    picture?: boolean
    nationalIDPicture?: boolean
    businessDocumentPDF?: boolean
    verified?: boolean
    createdAt?: boolean
  }

  export type WorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "availability" | "rating" | "completedJobs" | "genre" | "bio" | "picture" | "nationalIDPicture" | "businessDocumentPDF" | "verified" | "createdAt", ExtArgs["result"]["worker"]>
  export type WorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobbyParticipations?: boolean | Worker$lobbyParticipationsArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worker"
    objects: {
      lobbyParticipations: Prisma.$LobbyParticipantPayload<ExtArgs>[]
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      availability: Prisma.JsonValue
      rating: number
      completedJobs: number
      genre: string
      bio: string | null
      picture: string | null
      nationalIDPicture: string | null
      businessDocumentPDF: string | null
      verified: boolean
      createdAt: Date
    }, ExtArgs["result"]["worker"]>
    composites: {}
  }

  type WorkerGetPayload<S extends boolean | null | undefined | WorkerDefaultArgs> = $Result.GetResult<Prisma.$WorkerPayload, S>

  type WorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerCountAggregateInputType | true
    }

  export interface WorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worker'], meta: { name: 'Worker' } }
    /**
     * Find zero or one Worker that matches the filter.
     * @param {WorkerFindUniqueArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerFindUniqueArgs>(args: SelectSubset<T, WorkerFindUniqueArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerFindUniqueOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerFindFirstArgs>(args?: SelectSubset<T, WorkerFindFirstArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.worker.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.worker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerWithIdOnly = await prisma.worker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkerFindManyArgs>(args?: SelectSubset<T, WorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worker.
     * @param {WorkerCreateArgs} args - Arguments to create a Worker.
     * @example
     * // Create one Worker
     * const Worker = await prisma.worker.create({
     *   data: {
     *     // ... data to create a Worker
     *   }
     * })
     * 
     */
    create<T extends WorkerCreateArgs>(args: SelectSubset<T, WorkerCreateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workers.
     * @param {WorkerCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerCreateManyArgs>(args?: SelectSubset<T, WorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Worker.
     * @param {WorkerDeleteArgs} args - Arguments to delete one Worker.
     * @example
     * // Delete one Worker
     * const Worker = await prisma.worker.delete({
     *   where: {
     *     // ... filter to delete one Worker
     *   }
     * })
     * 
     */
    delete<T extends WorkerDeleteArgs>(args: SelectSubset<T, WorkerDeleteArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worker.
     * @param {WorkerUpdateArgs} args - Arguments to update one Worker.
     * @example
     * // Update one Worker
     * const worker = await prisma.worker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerUpdateArgs>(args: SelectSubset<T, WorkerUpdateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workers.
     * @param {WorkerDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.worker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerDeleteManyArgs>(args?: SelectSubset<T, WorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerUpdateManyArgs>(args: SelectSubset<T, WorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Worker.
     * @param {WorkerUpsertArgs} args - Arguments to update or create a Worker.
     * @example
     * // Update or create a Worker
     * const worker = await prisma.worker.upsert({
     *   create: {
     *     // ... data to create a Worker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker we want to update
     *   }
     * })
     */
    upsert<T extends WorkerUpsertArgs>(args: SelectSubset<T, WorkerUpsertArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.worker.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends WorkerCountArgs>(
      args?: Subset<T, WorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerAggregateArgs>(args: Subset<T, WorkerAggregateArgs>): Prisma.PrismaPromise<GetWorkerAggregateType<T>>

    /**
     * Group by Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worker model
   */
  readonly fields: WorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lobbyParticipations<T extends Worker$lobbyParticipationsArgs<ExtArgs> = {}>(args?: Subset<T, Worker$lobbyParticipationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Worker model
   */
  interface WorkerFieldRefs {
    readonly id: FieldRef<"Worker", 'Int'>
    readonly userId: FieldRef<"Worker", 'Int'>
    readonly availability: FieldRef<"Worker", 'Json'>
    readonly rating: FieldRef<"Worker", 'Float'>
    readonly completedJobs: FieldRef<"Worker", 'Int'>
    readonly genre: FieldRef<"Worker", 'String'>
    readonly bio: FieldRef<"Worker", 'String'>
    readonly picture: FieldRef<"Worker", 'String'>
    readonly nationalIDPicture: FieldRef<"Worker", 'String'>
    readonly businessDocumentPDF: FieldRef<"Worker", 'String'>
    readonly verified: FieldRef<"Worker", 'Boolean'>
    readonly createdAt: FieldRef<"Worker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Worker findUnique
   */
  export type WorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findUniqueOrThrow
   */
  export type WorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findFirst
   */
  export type WorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findFirstOrThrow
   */
  export type WorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findMany
   */
  export type WorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Workers to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker create
   */
  export type WorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a Worker.
     */
    data: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
  }

  /**
   * Worker createMany
   */
  export type WorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker update
   */
  export type WorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a Worker.
     */
    data: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
    /**
     * Choose, which Worker to update.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker updateMany
   */
  export type WorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
  }

  /**
   * Worker upsert
   */
  export type WorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the Worker to update in case it exists.
     */
    where: WorkerWhereUniqueInput
    /**
     * In case the Worker found by the `where` argument doesn't exist, create a new Worker with this data.
     */
    create: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
    /**
     * In case the Worker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
  }

  /**
   * Worker delete
   */
  export type WorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter which Worker to delete.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker deleteMany
   */
  export type WorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workers to delete
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to delete.
     */
    limit?: number
  }

  /**
   * Worker.lobbyParticipations
   */
  export type Worker$lobbyParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    where?: LobbyParticipantWhereInput
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    cursor?: LobbyParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * Worker without action
   */
  export type WorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
  }


  /**
   * Model ServiceRequest
   */

  export type AggregateServiceRequest = {
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  export type ServiceRequestAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    budget: number | null
    latitude: number | null
    longitude: number | null
  }

  export type ServiceRequestSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    budget: number | null
    latitude: number | null
    longitude: number | null
  }

  export type ServiceRequestMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    category: string | null
    description: string | null
    budget: number | null
    urgency: $Enums.Urgency | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    latitude: number | null
    longitude: number | null
  }

  export type ServiceRequestMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    category: string | null
    description: string | null
    budget: number | null
    urgency: $Enums.Urgency | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    latitude: number | null
    longitude: number | null
  }

  export type ServiceRequestCountAggregateOutputType = {
    id: number
    clientId: number
    category: number
    description: number
    budget: number
    urgency: number
    status: number
    createdAt: number
    latitude: number
    longitude: number
    _all: number
  }


  export type ServiceRequestAvgAggregateInputType = {
    id?: true
    clientId?: true
    budget?: true
    latitude?: true
    longitude?: true
  }

  export type ServiceRequestSumAggregateInputType = {
    id?: true
    clientId?: true
    budget?: true
    latitude?: true
    longitude?: true
  }

  export type ServiceRequestMinAggregateInputType = {
    id?: true
    clientId?: true
    category?: true
    description?: true
    budget?: true
    urgency?: true
    status?: true
    createdAt?: true
    latitude?: true
    longitude?: true
  }

  export type ServiceRequestMaxAggregateInputType = {
    id?: true
    clientId?: true
    category?: true
    description?: true
    budget?: true
    urgency?: true
    status?: true
    createdAt?: true
    latitude?: true
    longitude?: true
  }

  export type ServiceRequestCountAggregateInputType = {
    id?: true
    clientId?: true
    category?: true
    description?: true
    budget?: true
    urgency?: true
    status?: true
    createdAt?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type ServiceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequest to aggregate.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRequests
    **/
    _count?: true | ServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRequestMaxAggregateInputType
  }

  export type GetServiceRequestAggregateType<T extends ServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRequest[P]>
      : GetScalarType<T[P], AggregateServiceRequest[P]>
  }




  export type ServiceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithAggregationInput | ServiceRequestOrderByWithAggregationInput[]
    by: ServiceRequestScalarFieldEnum[] | ServiceRequestScalarFieldEnum
    having?: ServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRequestCountAggregateInputType | true
    _avg?: ServiceRequestAvgAggregateInputType
    _sum?: ServiceRequestSumAggregateInputType
    _min?: ServiceRequestMinAggregateInputType
    _max?: ServiceRequestMaxAggregateInputType
  }

  export type ServiceRequestGroupByOutputType = {
    id: number
    clientId: number
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status: $Enums.RequestStatus
    createdAt: Date
    latitude: number
    longitude: number
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  type GetServiceRequestGroupByPayload<T extends ServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    category?: boolean
    description?: boolean
    budget?: boolean
    urgency?: boolean
    status?: boolean
    createdAt?: boolean
    latitude?: boolean
    longitude?: boolean
    participants?: boolean | ServiceRequest$participantsArgs<ExtArgs>
    client?: boolean | UsersDefaultArgs<ExtArgs>
    images?: boolean | ServiceRequest$imagesArgs<ExtArgs>
    _count?: boolean | ServiceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequest"]>



  export type ServiceRequestSelectScalar = {
    id?: boolean
    clientId?: boolean
    category?: boolean
    description?: boolean
    budget?: boolean
    urgency?: boolean
    status?: boolean
    createdAt?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type ServiceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "category" | "description" | "budget" | "urgency" | "status" | "createdAt" | "latitude" | "longitude", ExtArgs["result"]["serviceRequest"]>
  export type ServiceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ServiceRequest$participantsArgs<ExtArgs>
    client?: boolean | UsersDefaultArgs<ExtArgs>
    images?: boolean | ServiceRequest$imagesArgs<ExtArgs>
    _count?: boolean | ServiceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServiceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRequest"
    objects: {
      participants: Prisma.$LobbyParticipantPayload<ExtArgs>[]
      client: Prisma.$UsersPayload<ExtArgs>
      images: Prisma.$ServiceRequestImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      category: string
      description: string
      budget: number
      urgency: $Enums.Urgency
      status: $Enums.RequestStatus
      createdAt: Date
      latitude: number
      longitude: number
    }, ExtArgs["result"]["serviceRequest"]>
    composites: {}
  }

  type ServiceRequestGetPayload<S extends boolean | null | undefined | ServiceRequestDefaultArgs> = $Result.GetResult<Prisma.$ServiceRequestPayload, S>

  type ServiceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceRequestCountAggregateInputType | true
    }

  export interface ServiceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceRequest'], meta: { name: 'ServiceRequest' } }
    /**
     * Find zero or one ServiceRequest that matches the filter.
     * @param {ServiceRequestFindUniqueArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceRequestFindUniqueArgs>(args: SelectSubset<T, ServiceRequestFindUniqueArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceRequestFindFirstArgs>(args?: SelectSubset<T, ServiceRequestFindFirstArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany()
     * 
     * // Get first 10 ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceRequestWithIdOnly = await prisma.serviceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceRequestFindManyArgs>(args?: SelectSubset<T, ServiceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceRequest.
     * @param {ServiceRequestCreateArgs} args - Arguments to create a ServiceRequest.
     * @example
     * // Create one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.create({
     *   data: {
     *     // ... data to create a ServiceRequest
     *   }
     * })
     * 
     */
    create<T extends ServiceRequestCreateArgs>(args: SelectSubset<T, ServiceRequestCreateArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceRequests.
     * @param {ServiceRequestCreateManyArgs} args - Arguments to create many ServiceRequests.
     * @example
     * // Create many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceRequestCreateManyArgs>(args?: SelectSubset<T, ServiceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceRequest.
     * @param {ServiceRequestDeleteArgs} args - Arguments to delete one ServiceRequest.
     * @example
     * // Delete one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.delete({
     *   where: {
     *     // ... filter to delete one ServiceRequest
     *   }
     * })
     * 
     */
    delete<T extends ServiceRequestDeleteArgs>(args: SelectSubset<T, ServiceRequestDeleteArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceRequest.
     * @param {ServiceRequestUpdateArgs} args - Arguments to update one ServiceRequest.
     * @example
     * // Update one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceRequestUpdateArgs>(args: SelectSubset<T, ServiceRequestUpdateArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceRequests.
     * @param {ServiceRequestDeleteManyArgs} args - Arguments to filter ServiceRequests to delete.
     * @example
     * // Delete a few ServiceRequests
     * const { count } = await prisma.serviceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceRequestDeleteManyArgs>(args?: SelectSubset<T, ServiceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceRequestUpdateManyArgs>(args: SelectSubset<T, ServiceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceRequest.
     * @param {ServiceRequestUpsertArgs} args - Arguments to update or create a ServiceRequest.
     * @example
     * // Update or create a ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.upsert({
     *   create: {
     *     // ... data to create a ServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRequest we want to update
     *   }
     * })
     */
    upsert<T extends ServiceRequestUpsertArgs>(args: SelectSubset<T, ServiceRequestUpsertArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestCountArgs} args - Arguments to filter ServiceRequests to count.
     * @example
     * // Count the number of ServiceRequests
     * const count = await prisma.serviceRequest.count({
     *   where: {
     *     // ... the filter for the ServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends ServiceRequestCountArgs>(
      args?: Subset<T, ServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceRequestAggregateArgs>(args: Subset<T, ServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetServiceRequestAggregateType<T>>

    /**
     * Group by ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceRequest model
   */
  readonly fields: ServiceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends ServiceRequest$participantsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequest$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends ServiceRequest$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequest$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceRequest model
   */
  interface ServiceRequestFieldRefs {
    readonly id: FieldRef<"ServiceRequest", 'Int'>
    readonly clientId: FieldRef<"ServiceRequest", 'Int'>
    readonly category: FieldRef<"ServiceRequest", 'String'>
    readonly description: FieldRef<"ServiceRequest", 'String'>
    readonly budget: FieldRef<"ServiceRequest", 'Float'>
    readonly urgency: FieldRef<"ServiceRequest", 'Urgency'>
    readonly status: FieldRef<"ServiceRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"ServiceRequest", 'DateTime'>
    readonly latitude: FieldRef<"ServiceRequest", 'Float'>
    readonly longitude: FieldRef<"ServiceRequest", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ServiceRequest findUnique
   */
  export type ServiceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest findUniqueOrThrow
   */
  export type ServiceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest findFirst
   */
  export type ServiceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest findFirstOrThrow
   */
  export type ServiceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest findMany
   */
  export type ServiceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequests to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest create
   */
  export type ServiceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceRequest.
     */
    data: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
  }

  /**
   * ServiceRequest createMany
   */
  export type ServiceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceRequests.
     */
    data: ServiceRequestCreateManyInput | ServiceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceRequest update
   */
  export type ServiceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceRequest.
     */
    data: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which ServiceRequest to update.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest updateMany
   */
  export type ServiceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceRequests.
     */
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequests to update
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to update.
     */
    limit?: number
  }

  /**
   * ServiceRequest upsert
   */
  export type ServiceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceRequest to update in case it exists.
     */
    where: ServiceRequestWhereUniqueInput
    /**
     * In case the ServiceRequest found by the `where` argument doesn't exist, create a new ServiceRequest with this data.
     */
    create: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
    /**
     * In case the ServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
  }

  /**
   * ServiceRequest delete
   */
  export type ServiceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter which ServiceRequest to delete.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest deleteMany
   */
  export type ServiceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequests to delete
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to delete.
     */
    limit?: number
  }

  /**
   * ServiceRequest.participants
   */
  export type ServiceRequest$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    where?: LobbyParticipantWhereInput
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    cursor?: LobbyParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * ServiceRequest.images
   */
  export type ServiceRequest$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    where?: ServiceRequestImageWhereInput
    orderBy?: ServiceRequestImageOrderByWithRelationInput | ServiceRequestImageOrderByWithRelationInput[]
    cursor?: ServiceRequestImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequestImageScalarFieldEnum | ServiceRequestImageScalarFieldEnum[]
  }

  /**
   * ServiceRequest without action
   */
  export type ServiceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
  }


  /**
   * Model ServiceRequestImage
   */

  export type AggregateServiceRequestImage = {
    _count: ServiceRequestImageCountAggregateOutputType | null
    _avg: ServiceRequestImageAvgAggregateOutputType | null
    _sum: ServiceRequestImageSumAggregateOutputType | null
    _min: ServiceRequestImageMinAggregateOutputType | null
    _max: ServiceRequestImageMaxAggregateOutputType | null
  }

  export type ServiceRequestImageAvgAggregateOutputType = {
    id: number | null
    serviceRequestId: number | null
  }

  export type ServiceRequestImageSumAggregateOutputType = {
    id: number | null
    serviceRequestId: number | null
  }

  export type ServiceRequestImageMinAggregateOutputType = {
    id: number | null
    serviceRequestId: number | null
    url: string | null
  }

  export type ServiceRequestImageMaxAggregateOutputType = {
    id: number | null
    serviceRequestId: number | null
    url: string | null
  }

  export type ServiceRequestImageCountAggregateOutputType = {
    id: number
    serviceRequestId: number
    url: number
    _all: number
  }


  export type ServiceRequestImageAvgAggregateInputType = {
    id?: true
    serviceRequestId?: true
  }

  export type ServiceRequestImageSumAggregateInputType = {
    id?: true
    serviceRequestId?: true
  }

  export type ServiceRequestImageMinAggregateInputType = {
    id?: true
    serviceRequestId?: true
    url?: true
  }

  export type ServiceRequestImageMaxAggregateInputType = {
    id?: true
    serviceRequestId?: true
    url?: true
  }

  export type ServiceRequestImageCountAggregateInputType = {
    id?: true
    serviceRequestId?: true
    url?: true
    _all?: true
  }

  export type ServiceRequestImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequestImage to aggregate.
     */
    where?: ServiceRequestImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequestImages to fetch.
     */
    orderBy?: ServiceRequestImageOrderByWithRelationInput | ServiceRequestImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRequestImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequestImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequestImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRequestImages
    **/
    _count?: true | ServiceRequestImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceRequestImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceRequestImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRequestImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRequestImageMaxAggregateInputType
  }

  export type GetServiceRequestImageAggregateType<T extends ServiceRequestImageAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRequestImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRequestImage[P]>
      : GetScalarType<T[P], AggregateServiceRequestImage[P]>
  }




  export type ServiceRequestImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestImageWhereInput
    orderBy?: ServiceRequestImageOrderByWithAggregationInput | ServiceRequestImageOrderByWithAggregationInput[]
    by: ServiceRequestImageScalarFieldEnum[] | ServiceRequestImageScalarFieldEnum
    having?: ServiceRequestImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRequestImageCountAggregateInputType | true
    _avg?: ServiceRequestImageAvgAggregateInputType
    _sum?: ServiceRequestImageSumAggregateInputType
    _min?: ServiceRequestImageMinAggregateInputType
    _max?: ServiceRequestImageMaxAggregateInputType
  }

  export type ServiceRequestImageGroupByOutputType = {
    id: number
    serviceRequestId: number
    url: string
    _count: ServiceRequestImageCountAggregateOutputType | null
    _avg: ServiceRequestImageAvgAggregateOutputType | null
    _sum: ServiceRequestImageSumAggregateOutputType | null
    _min: ServiceRequestImageMinAggregateOutputType | null
    _max: ServiceRequestImageMaxAggregateOutputType | null
  }

  type GetServiceRequestImageGroupByPayload<T extends ServiceRequestImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceRequestImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRequestImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRequestImageGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRequestImageGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRequestImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceRequestId?: boolean
    url?: boolean
    serviceRequest?: boolean | ServiceRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequestImage"]>



  export type ServiceRequestImageSelectScalar = {
    id?: boolean
    serviceRequestId?: boolean
    url?: boolean
  }

  export type ServiceRequestImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceRequestId" | "url", ExtArgs["result"]["serviceRequestImage"]>
  export type ServiceRequestImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceRequest?: boolean | ServiceRequestDefaultArgs<ExtArgs>
  }

  export type $ServiceRequestImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRequestImage"
    objects: {
      serviceRequest: Prisma.$ServiceRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serviceRequestId: number
      url: string
    }, ExtArgs["result"]["serviceRequestImage"]>
    composites: {}
  }

  type ServiceRequestImageGetPayload<S extends boolean | null | undefined | ServiceRequestImageDefaultArgs> = $Result.GetResult<Prisma.$ServiceRequestImagePayload, S>

  type ServiceRequestImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceRequestImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceRequestImageCountAggregateInputType | true
    }

  export interface ServiceRequestImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceRequestImage'], meta: { name: 'ServiceRequestImage' } }
    /**
     * Find zero or one ServiceRequestImage that matches the filter.
     * @param {ServiceRequestImageFindUniqueArgs} args - Arguments to find a ServiceRequestImage
     * @example
     * // Get one ServiceRequestImage
     * const serviceRequestImage = await prisma.serviceRequestImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceRequestImageFindUniqueArgs>(args: SelectSubset<T, ServiceRequestImageFindUniqueArgs<ExtArgs>>): Prisma__ServiceRequestImageClient<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceRequestImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceRequestImageFindUniqueOrThrowArgs} args - Arguments to find a ServiceRequestImage
     * @example
     * // Get one ServiceRequestImage
     * const serviceRequestImage = await prisma.serviceRequestImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceRequestImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceRequestImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestImageClient<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequestImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestImageFindFirstArgs} args - Arguments to find a ServiceRequestImage
     * @example
     * // Get one ServiceRequestImage
     * const serviceRequestImage = await prisma.serviceRequestImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceRequestImageFindFirstArgs>(args?: SelectSubset<T, ServiceRequestImageFindFirstArgs<ExtArgs>>): Prisma__ServiceRequestImageClient<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequestImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestImageFindFirstOrThrowArgs} args - Arguments to find a ServiceRequestImage
     * @example
     * // Get one ServiceRequestImage
     * const serviceRequestImage = await prisma.serviceRequestImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceRequestImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceRequestImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestImageClient<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceRequestImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRequestImages
     * const serviceRequestImages = await prisma.serviceRequestImage.findMany()
     * 
     * // Get first 10 ServiceRequestImages
     * const serviceRequestImages = await prisma.serviceRequestImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceRequestImageWithIdOnly = await prisma.serviceRequestImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceRequestImageFindManyArgs>(args?: SelectSubset<T, ServiceRequestImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceRequestImage.
     * @param {ServiceRequestImageCreateArgs} args - Arguments to create a ServiceRequestImage.
     * @example
     * // Create one ServiceRequestImage
     * const ServiceRequestImage = await prisma.serviceRequestImage.create({
     *   data: {
     *     // ... data to create a ServiceRequestImage
     *   }
     * })
     * 
     */
    create<T extends ServiceRequestImageCreateArgs>(args: SelectSubset<T, ServiceRequestImageCreateArgs<ExtArgs>>): Prisma__ServiceRequestImageClient<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceRequestImages.
     * @param {ServiceRequestImageCreateManyArgs} args - Arguments to create many ServiceRequestImages.
     * @example
     * // Create many ServiceRequestImages
     * const serviceRequestImage = await prisma.serviceRequestImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceRequestImageCreateManyArgs>(args?: SelectSubset<T, ServiceRequestImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceRequestImage.
     * @param {ServiceRequestImageDeleteArgs} args - Arguments to delete one ServiceRequestImage.
     * @example
     * // Delete one ServiceRequestImage
     * const ServiceRequestImage = await prisma.serviceRequestImage.delete({
     *   where: {
     *     // ... filter to delete one ServiceRequestImage
     *   }
     * })
     * 
     */
    delete<T extends ServiceRequestImageDeleteArgs>(args: SelectSubset<T, ServiceRequestImageDeleteArgs<ExtArgs>>): Prisma__ServiceRequestImageClient<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceRequestImage.
     * @param {ServiceRequestImageUpdateArgs} args - Arguments to update one ServiceRequestImage.
     * @example
     * // Update one ServiceRequestImage
     * const serviceRequestImage = await prisma.serviceRequestImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceRequestImageUpdateArgs>(args: SelectSubset<T, ServiceRequestImageUpdateArgs<ExtArgs>>): Prisma__ServiceRequestImageClient<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceRequestImages.
     * @param {ServiceRequestImageDeleteManyArgs} args - Arguments to filter ServiceRequestImages to delete.
     * @example
     * // Delete a few ServiceRequestImages
     * const { count } = await prisma.serviceRequestImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceRequestImageDeleteManyArgs>(args?: SelectSubset<T, ServiceRequestImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequestImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRequestImages
     * const serviceRequestImage = await prisma.serviceRequestImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceRequestImageUpdateManyArgs>(args: SelectSubset<T, ServiceRequestImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceRequestImage.
     * @param {ServiceRequestImageUpsertArgs} args - Arguments to update or create a ServiceRequestImage.
     * @example
     * // Update or create a ServiceRequestImage
     * const serviceRequestImage = await prisma.serviceRequestImage.upsert({
     *   create: {
     *     // ... data to create a ServiceRequestImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRequestImage we want to update
     *   }
     * })
     */
    upsert<T extends ServiceRequestImageUpsertArgs>(args: SelectSubset<T, ServiceRequestImageUpsertArgs<ExtArgs>>): Prisma__ServiceRequestImageClient<$Result.GetResult<Prisma.$ServiceRequestImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceRequestImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestImageCountArgs} args - Arguments to filter ServiceRequestImages to count.
     * @example
     * // Count the number of ServiceRequestImages
     * const count = await prisma.serviceRequestImage.count({
     *   where: {
     *     // ... the filter for the ServiceRequestImages we want to count
     *   }
     * })
    **/
    count<T extends ServiceRequestImageCountArgs>(
      args?: Subset<T, ServiceRequestImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRequestImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRequestImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceRequestImageAggregateArgs>(args: Subset<T, ServiceRequestImageAggregateArgs>): Prisma.PrismaPromise<GetServiceRequestImageAggregateType<T>>

    /**
     * Group by ServiceRequestImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceRequestImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRequestImageGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRequestImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceRequestImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRequestImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceRequestImage model
   */
  readonly fields: ServiceRequestImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRequestImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRequestImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceRequest<T extends ServiceRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequestDefaultArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceRequestImage model
   */
  interface ServiceRequestImageFieldRefs {
    readonly id: FieldRef<"ServiceRequestImage", 'Int'>
    readonly serviceRequestId: FieldRef<"ServiceRequestImage", 'Int'>
    readonly url: FieldRef<"ServiceRequestImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceRequestImage findUnique
   */
  export type ServiceRequestImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequestImage to fetch.
     */
    where: ServiceRequestImageWhereUniqueInput
  }

  /**
   * ServiceRequestImage findUniqueOrThrow
   */
  export type ServiceRequestImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequestImage to fetch.
     */
    where: ServiceRequestImageWhereUniqueInput
  }

  /**
   * ServiceRequestImage findFirst
   */
  export type ServiceRequestImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequestImage to fetch.
     */
    where?: ServiceRequestImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequestImages to fetch.
     */
    orderBy?: ServiceRequestImageOrderByWithRelationInput | ServiceRequestImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequestImages.
     */
    cursor?: ServiceRequestImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequestImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequestImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequestImages.
     */
    distinct?: ServiceRequestImageScalarFieldEnum | ServiceRequestImageScalarFieldEnum[]
  }

  /**
   * ServiceRequestImage findFirstOrThrow
   */
  export type ServiceRequestImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequestImage to fetch.
     */
    where?: ServiceRequestImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequestImages to fetch.
     */
    orderBy?: ServiceRequestImageOrderByWithRelationInput | ServiceRequestImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequestImages.
     */
    cursor?: ServiceRequestImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequestImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequestImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequestImages.
     */
    distinct?: ServiceRequestImageScalarFieldEnum | ServiceRequestImageScalarFieldEnum[]
  }

  /**
   * ServiceRequestImage findMany
   */
  export type ServiceRequestImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequestImages to fetch.
     */
    where?: ServiceRequestImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequestImages to fetch.
     */
    orderBy?: ServiceRequestImageOrderByWithRelationInput | ServiceRequestImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRequestImages.
     */
    cursor?: ServiceRequestImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequestImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequestImages.
     */
    skip?: number
    distinct?: ServiceRequestImageScalarFieldEnum | ServiceRequestImageScalarFieldEnum[]
  }

  /**
   * ServiceRequestImage create
   */
  export type ServiceRequestImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceRequestImage.
     */
    data: XOR<ServiceRequestImageCreateInput, ServiceRequestImageUncheckedCreateInput>
  }

  /**
   * ServiceRequestImage createMany
   */
  export type ServiceRequestImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceRequestImages.
     */
    data: ServiceRequestImageCreateManyInput | ServiceRequestImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceRequestImage update
   */
  export type ServiceRequestImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceRequestImage.
     */
    data: XOR<ServiceRequestImageUpdateInput, ServiceRequestImageUncheckedUpdateInput>
    /**
     * Choose, which ServiceRequestImage to update.
     */
    where: ServiceRequestImageWhereUniqueInput
  }

  /**
   * ServiceRequestImage updateMany
   */
  export type ServiceRequestImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceRequestImages.
     */
    data: XOR<ServiceRequestImageUpdateManyMutationInput, ServiceRequestImageUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequestImages to update
     */
    where?: ServiceRequestImageWhereInput
    /**
     * Limit how many ServiceRequestImages to update.
     */
    limit?: number
  }

  /**
   * ServiceRequestImage upsert
   */
  export type ServiceRequestImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceRequestImage to update in case it exists.
     */
    where: ServiceRequestImageWhereUniqueInput
    /**
     * In case the ServiceRequestImage found by the `where` argument doesn't exist, create a new ServiceRequestImage with this data.
     */
    create: XOR<ServiceRequestImageCreateInput, ServiceRequestImageUncheckedCreateInput>
    /**
     * In case the ServiceRequestImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRequestImageUpdateInput, ServiceRequestImageUncheckedUpdateInput>
  }

  /**
   * ServiceRequestImage delete
   */
  export type ServiceRequestImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
    /**
     * Filter which ServiceRequestImage to delete.
     */
    where: ServiceRequestImageWhereUniqueInput
  }

  /**
   * ServiceRequestImage deleteMany
   */
  export type ServiceRequestImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequestImages to delete
     */
    where?: ServiceRequestImageWhereInput
    /**
     * Limit how many ServiceRequestImages to delete.
     */
    limit?: number
  }

  /**
   * ServiceRequestImage without action
   */
  export type ServiceRequestImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestImage
     */
    select?: ServiceRequestImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequestImage
     */
    omit?: ServiceRequestImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestImageInclude<ExtArgs> | null
  }


  /**
   * Model LobbyParticipant
   */

  export type AggregateLobbyParticipant = {
    _count: LobbyParticipantCountAggregateOutputType | null
    _avg: LobbyParticipantAvgAggregateOutputType | null
    _sum: LobbyParticipantSumAggregateOutputType | null
    _min: LobbyParticipantMinAggregateOutputType | null
    _max: LobbyParticipantMaxAggregateOutputType | null
  }

  export type LobbyParticipantAvgAggregateOutputType = {
    serviceRequestId: number | null
    workerId: number | null
    bid: number | null
  }

  export type LobbyParticipantSumAggregateOutputType = {
    serviceRequestId: number | null
    workerId: number | null
    bid: number | null
  }

  export type LobbyParticipantMinAggregateOutputType = {
    serviceRequestId: number | null
    workerId: number | null
    source: $Enums.InvitationSource | null
    bid: number | null
    status: $Enums.ParticipantStatus | null
    createdAt: Date | null
    clientCompleted: boolean | null
    workerCompleted: boolean | null
  }

  export type LobbyParticipantMaxAggregateOutputType = {
    serviceRequestId: number | null
    workerId: number | null
    source: $Enums.InvitationSource | null
    bid: number | null
    status: $Enums.ParticipantStatus | null
    createdAt: Date | null
    clientCompleted: boolean | null
    workerCompleted: boolean | null
  }

  export type LobbyParticipantCountAggregateOutputType = {
    serviceRequestId: number
    workerId: number
    source: number
    bid: number
    status: number
    createdAt: number
    clientCompleted: number
    workerCompleted: number
    _all: number
  }


  export type LobbyParticipantAvgAggregateInputType = {
    serviceRequestId?: true
    workerId?: true
    bid?: true
  }

  export type LobbyParticipantSumAggregateInputType = {
    serviceRequestId?: true
    workerId?: true
    bid?: true
  }

  export type LobbyParticipantMinAggregateInputType = {
    serviceRequestId?: true
    workerId?: true
    source?: true
    bid?: true
    status?: true
    createdAt?: true
    clientCompleted?: true
    workerCompleted?: true
  }

  export type LobbyParticipantMaxAggregateInputType = {
    serviceRequestId?: true
    workerId?: true
    source?: true
    bid?: true
    status?: true
    createdAt?: true
    clientCompleted?: true
    workerCompleted?: true
  }

  export type LobbyParticipantCountAggregateInputType = {
    serviceRequestId?: true
    workerId?: true
    source?: true
    bid?: true
    status?: true
    createdAt?: true
    clientCompleted?: true
    workerCompleted?: true
    _all?: true
  }

  export type LobbyParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LobbyParticipant to aggregate.
     */
    where?: LobbyParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyParticipants to fetch.
     */
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LobbyParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LobbyParticipants
    **/
    _count?: true | LobbyParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LobbyParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LobbyParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LobbyParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LobbyParticipantMaxAggregateInputType
  }

  export type GetLobbyParticipantAggregateType<T extends LobbyParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateLobbyParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLobbyParticipant[P]>
      : GetScalarType<T[P], AggregateLobbyParticipant[P]>
  }




  export type LobbyParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyParticipantWhereInput
    orderBy?: LobbyParticipantOrderByWithAggregationInput | LobbyParticipantOrderByWithAggregationInput[]
    by: LobbyParticipantScalarFieldEnum[] | LobbyParticipantScalarFieldEnum
    having?: LobbyParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LobbyParticipantCountAggregateInputType | true
    _avg?: LobbyParticipantAvgAggregateInputType
    _sum?: LobbyParticipantSumAggregateInputType
    _min?: LobbyParticipantMinAggregateInputType
    _max?: LobbyParticipantMaxAggregateInputType
  }

  export type LobbyParticipantGroupByOutputType = {
    serviceRequestId: number
    workerId: number
    source: $Enums.InvitationSource
    bid: number
    status: $Enums.ParticipantStatus
    createdAt: Date
    clientCompleted: boolean
    workerCompleted: boolean
    _count: LobbyParticipantCountAggregateOutputType | null
    _avg: LobbyParticipantAvgAggregateOutputType | null
    _sum: LobbyParticipantSumAggregateOutputType | null
    _min: LobbyParticipantMinAggregateOutputType | null
    _max: LobbyParticipantMaxAggregateOutputType | null
  }

  type GetLobbyParticipantGroupByPayload<T extends LobbyParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LobbyParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LobbyParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LobbyParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], LobbyParticipantGroupByOutputType[P]>
        }
      >
    >


  export type LobbyParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceRequestId?: boolean
    workerId?: boolean
    source?: boolean
    bid?: boolean
    status?: boolean
    createdAt?: boolean
    clientCompleted?: boolean
    workerCompleted?: boolean
    serviceRequest?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobbyParticipant"]>



  export type LobbyParticipantSelectScalar = {
    serviceRequestId?: boolean
    workerId?: boolean
    source?: boolean
    bid?: boolean
    status?: boolean
    createdAt?: boolean
    clientCompleted?: boolean
    workerCompleted?: boolean
  }

  export type LobbyParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"serviceRequestId" | "workerId" | "source" | "bid" | "status" | "createdAt" | "clientCompleted" | "workerCompleted", ExtArgs["result"]["lobbyParticipant"]>
  export type LobbyParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceRequest?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
  }

  export type $LobbyParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LobbyParticipant"
    objects: {
      serviceRequest: Prisma.$ServiceRequestPayload<ExtArgs>
      worker: Prisma.$WorkerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      serviceRequestId: number
      workerId: number
      source: $Enums.InvitationSource
      bid: number
      status: $Enums.ParticipantStatus
      createdAt: Date
      clientCompleted: boolean
      workerCompleted: boolean
    }, ExtArgs["result"]["lobbyParticipant"]>
    composites: {}
  }

  type LobbyParticipantGetPayload<S extends boolean | null | undefined | LobbyParticipantDefaultArgs> = $Result.GetResult<Prisma.$LobbyParticipantPayload, S>

  type LobbyParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LobbyParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LobbyParticipantCountAggregateInputType | true
    }

  export interface LobbyParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LobbyParticipant'], meta: { name: 'LobbyParticipant' } }
    /**
     * Find zero or one LobbyParticipant that matches the filter.
     * @param {LobbyParticipantFindUniqueArgs} args - Arguments to find a LobbyParticipant
     * @example
     * // Get one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LobbyParticipantFindUniqueArgs>(args: SelectSubset<T, LobbyParticipantFindUniqueArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LobbyParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LobbyParticipantFindUniqueOrThrowArgs} args - Arguments to find a LobbyParticipant
     * @example
     * // Get one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LobbyParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, LobbyParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LobbyParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantFindFirstArgs} args - Arguments to find a LobbyParticipant
     * @example
     * // Get one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LobbyParticipantFindFirstArgs>(args?: SelectSubset<T, LobbyParticipantFindFirstArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LobbyParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantFindFirstOrThrowArgs} args - Arguments to find a LobbyParticipant
     * @example
     * // Get one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LobbyParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, LobbyParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LobbyParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LobbyParticipants
     * const lobbyParticipants = await prisma.lobbyParticipant.findMany()
     * 
     * // Get first 10 LobbyParticipants
     * const lobbyParticipants = await prisma.lobbyParticipant.findMany({ take: 10 })
     * 
     * // Only select the `serviceRequestId`
     * const lobbyParticipantWithServiceRequestIdOnly = await prisma.lobbyParticipant.findMany({ select: { serviceRequestId: true } })
     * 
     */
    findMany<T extends LobbyParticipantFindManyArgs>(args?: SelectSubset<T, LobbyParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LobbyParticipant.
     * @param {LobbyParticipantCreateArgs} args - Arguments to create a LobbyParticipant.
     * @example
     * // Create one LobbyParticipant
     * const LobbyParticipant = await prisma.lobbyParticipant.create({
     *   data: {
     *     // ... data to create a LobbyParticipant
     *   }
     * })
     * 
     */
    create<T extends LobbyParticipantCreateArgs>(args: SelectSubset<T, LobbyParticipantCreateArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LobbyParticipants.
     * @param {LobbyParticipantCreateManyArgs} args - Arguments to create many LobbyParticipants.
     * @example
     * // Create many LobbyParticipants
     * const lobbyParticipant = await prisma.lobbyParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LobbyParticipantCreateManyArgs>(args?: SelectSubset<T, LobbyParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LobbyParticipant.
     * @param {LobbyParticipantDeleteArgs} args - Arguments to delete one LobbyParticipant.
     * @example
     * // Delete one LobbyParticipant
     * const LobbyParticipant = await prisma.lobbyParticipant.delete({
     *   where: {
     *     // ... filter to delete one LobbyParticipant
     *   }
     * })
     * 
     */
    delete<T extends LobbyParticipantDeleteArgs>(args: SelectSubset<T, LobbyParticipantDeleteArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LobbyParticipant.
     * @param {LobbyParticipantUpdateArgs} args - Arguments to update one LobbyParticipant.
     * @example
     * // Update one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LobbyParticipantUpdateArgs>(args: SelectSubset<T, LobbyParticipantUpdateArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LobbyParticipants.
     * @param {LobbyParticipantDeleteManyArgs} args - Arguments to filter LobbyParticipants to delete.
     * @example
     * // Delete a few LobbyParticipants
     * const { count } = await prisma.lobbyParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LobbyParticipantDeleteManyArgs>(args?: SelectSubset<T, LobbyParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LobbyParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LobbyParticipants
     * const lobbyParticipant = await prisma.lobbyParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LobbyParticipantUpdateManyArgs>(args: SelectSubset<T, LobbyParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LobbyParticipant.
     * @param {LobbyParticipantUpsertArgs} args - Arguments to update or create a LobbyParticipant.
     * @example
     * // Update or create a LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.upsert({
     *   create: {
     *     // ... data to create a LobbyParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LobbyParticipant we want to update
     *   }
     * })
     */
    upsert<T extends LobbyParticipantUpsertArgs>(args: SelectSubset<T, LobbyParticipantUpsertArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LobbyParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantCountArgs} args - Arguments to filter LobbyParticipants to count.
     * @example
     * // Count the number of LobbyParticipants
     * const count = await prisma.lobbyParticipant.count({
     *   where: {
     *     // ... the filter for the LobbyParticipants we want to count
     *   }
     * })
    **/
    count<T extends LobbyParticipantCountArgs>(
      args?: Subset<T, LobbyParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LobbyParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LobbyParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LobbyParticipantAggregateArgs>(args: Subset<T, LobbyParticipantAggregateArgs>): Prisma.PrismaPromise<GetLobbyParticipantAggregateType<T>>

    /**
     * Group by LobbyParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LobbyParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LobbyParticipantGroupByArgs['orderBy'] }
        : { orderBy?: LobbyParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LobbyParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLobbyParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LobbyParticipant model
   */
  readonly fields: LobbyParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LobbyParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LobbyParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceRequest<T extends ServiceRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequestDefaultArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    worker<T extends WorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerDefaultArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LobbyParticipant model
   */
  interface LobbyParticipantFieldRefs {
    readonly serviceRequestId: FieldRef<"LobbyParticipant", 'Int'>
    readonly workerId: FieldRef<"LobbyParticipant", 'Int'>
    readonly source: FieldRef<"LobbyParticipant", 'InvitationSource'>
    readonly bid: FieldRef<"LobbyParticipant", 'Float'>
    readonly status: FieldRef<"LobbyParticipant", 'ParticipantStatus'>
    readonly createdAt: FieldRef<"LobbyParticipant", 'DateTime'>
    readonly clientCompleted: FieldRef<"LobbyParticipant", 'Boolean'>
    readonly workerCompleted: FieldRef<"LobbyParticipant", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LobbyParticipant findUnique
   */
  export type LobbyParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipant to fetch.
     */
    where: LobbyParticipantWhereUniqueInput
  }

  /**
   * LobbyParticipant findUniqueOrThrow
   */
  export type LobbyParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipant to fetch.
     */
    where: LobbyParticipantWhereUniqueInput
  }

  /**
   * LobbyParticipant findFirst
   */
  export type LobbyParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipant to fetch.
     */
    where?: LobbyParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyParticipants to fetch.
     */
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LobbyParticipants.
     */
    cursor?: LobbyParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LobbyParticipants.
     */
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * LobbyParticipant findFirstOrThrow
   */
  export type LobbyParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipant to fetch.
     */
    where?: LobbyParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyParticipants to fetch.
     */
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LobbyParticipants.
     */
    cursor?: LobbyParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LobbyParticipants.
     */
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * LobbyParticipant findMany
   */
  export type LobbyParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipants to fetch.
     */
    where?: LobbyParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyParticipants to fetch.
     */
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LobbyParticipants.
     */
    cursor?: LobbyParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyParticipants.
     */
    skip?: number
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * LobbyParticipant create
   */
  export type LobbyParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a LobbyParticipant.
     */
    data: XOR<LobbyParticipantCreateInput, LobbyParticipantUncheckedCreateInput>
  }

  /**
   * LobbyParticipant createMany
   */
  export type LobbyParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LobbyParticipants.
     */
    data: LobbyParticipantCreateManyInput | LobbyParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LobbyParticipant update
   */
  export type LobbyParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a LobbyParticipant.
     */
    data: XOR<LobbyParticipantUpdateInput, LobbyParticipantUncheckedUpdateInput>
    /**
     * Choose, which LobbyParticipant to update.
     */
    where: LobbyParticipantWhereUniqueInput
  }

  /**
   * LobbyParticipant updateMany
   */
  export type LobbyParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LobbyParticipants.
     */
    data: XOR<LobbyParticipantUpdateManyMutationInput, LobbyParticipantUncheckedUpdateManyInput>
    /**
     * Filter which LobbyParticipants to update
     */
    where?: LobbyParticipantWhereInput
    /**
     * Limit how many LobbyParticipants to update.
     */
    limit?: number
  }

  /**
   * LobbyParticipant upsert
   */
  export type LobbyParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the LobbyParticipant to update in case it exists.
     */
    where: LobbyParticipantWhereUniqueInput
    /**
     * In case the LobbyParticipant found by the `where` argument doesn't exist, create a new LobbyParticipant with this data.
     */
    create: XOR<LobbyParticipantCreateInput, LobbyParticipantUncheckedCreateInput>
    /**
     * In case the LobbyParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LobbyParticipantUpdateInput, LobbyParticipantUncheckedUpdateInput>
  }

  /**
   * LobbyParticipant delete
   */
  export type LobbyParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter which LobbyParticipant to delete.
     */
    where: LobbyParticipantWhereUniqueInput
  }

  /**
   * LobbyParticipant deleteMany
   */
  export type LobbyParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LobbyParticipants to delete
     */
    where?: LobbyParticipantWhereInput
    /**
     * Limit how many LobbyParticipants to delete.
     */
    limit?: number
  }

  /**
   * LobbyParticipant without action
   */
  export type LobbyParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    messages: string | null
    link: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    messages: string | null
    link: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    messages: number
    link: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    messages?: true
    link?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    messages?: true
    link?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    messages?: true
    link?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string
    messages: string
    link: string | null
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    messages?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    messages?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "messages" | "link" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      messages: string
      link: string | null
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly messages: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model escrows
   */

  export type AggregateEscrows = {
    _count: EscrowsCountAggregateOutputType | null
    _avg: EscrowsAvgAggregateOutputType | null
    _sum: EscrowsSumAggregateOutputType | null
    _min: EscrowsMinAggregateOutputType | null
    _max: EscrowsMaxAggregateOutputType | null
  }

  export type EscrowsAvgAggregateOutputType = {
    id: number | null
    job_id: number | null
    client_id: number | null
    worker_id: number | null
    amount: number | null
  }

  export type EscrowsSumAggregateOutputType = {
    id: bigint | null
    job_id: bigint | null
    client_id: bigint | null
    worker_id: bigint | null
    amount: number | null
  }

  export type EscrowsMinAggregateOutputType = {
    id: bigint | null
    job_id: bigint | null
    client_id: bigint | null
    worker_id: bigint | null
    amount: number | null
    createdAt: Date | null
  }

  export type EscrowsMaxAggregateOutputType = {
    id: bigint | null
    job_id: bigint | null
    client_id: bigint | null
    worker_id: bigint | null
    amount: number | null
    createdAt: Date | null
  }

  export type EscrowsCountAggregateOutputType = {
    id: number
    job_id: number
    client_id: number
    worker_id: number
    amount: number
    createdAt: number
    _all: number
  }


  export type EscrowsAvgAggregateInputType = {
    id?: true
    job_id?: true
    client_id?: true
    worker_id?: true
    amount?: true
  }

  export type EscrowsSumAggregateInputType = {
    id?: true
    job_id?: true
    client_id?: true
    worker_id?: true
    amount?: true
  }

  export type EscrowsMinAggregateInputType = {
    id?: true
    job_id?: true
    client_id?: true
    worker_id?: true
    amount?: true
    createdAt?: true
  }

  export type EscrowsMaxAggregateInputType = {
    id?: true
    job_id?: true
    client_id?: true
    worker_id?: true
    amount?: true
    createdAt?: true
  }

  export type EscrowsCountAggregateInputType = {
    id?: true
    job_id?: true
    client_id?: true
    worker_id?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type EscrowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which escrows to aggregate.
     */
    where?: escrowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of escrows to fetch.
     */
    orderBy?: escrowsOrderByWithRelationInput | escrowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: escrowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` escrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` escrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned escrows
    **/
    _count?: true | EscrowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscrowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscrowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscrowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscrowsMaxAggregateInputType
  }

  export type GetEscrowsAggregateType<T extends EscrowsAggregateArgs> = {
        [P in keyof T & keyof AggregateEscrows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscrows[P]>
      : GetScalarType<T[P], AggregateEscrows[P]>
  }




  export type escrowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: escrowsWhereInput
    orderBy?: escrowsOrderByWithAggregationInput | escrowsOrderByWithAggregationInput[]
    by: EscrowsScalarFieldEnum[] | EscrowsScalarFieldEnum
    having?: escrowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscrowsCountAggregateInputType | true
    _avg?: EscrowsAvgAggregateInputType
    _sum?: EscrowsSumAggregateInputType
    _min?: EscrowsMinAggregateInputType
    _max?: EscrowsMaxAggregateInputType
  }

  export type EscrowsGroupByOutputType = {
    id: bigint
    job_id: bigint
    client_id: bigint
    worker_id: bigint
    amount: number
    createdAt: Date
    _count: EscrowsCountAggregateOutputType | null
    _avg: EscrowsAvgAggregateOutputType | null
    _sum: EscrowsSumAggregateOutputType | null
    _min: EscrowsMinAggregateOutputType | null
    _max: EscrowsMaxAggregateOutputType | null
  }

  type GetEscrowsGroupByPayload<T extends escrowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscrowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscrowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscrowsGroupByOutputType[P]>
            : GetScalarType<T[P], EscrowsGroupByOutputType[P]>
        }
      >
    >


  export type escrowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_id?: boolean
    client_id?: boolean
    worker_id?: boolean
    amount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["escrows"]>



  export type escrowsSelectScalar = {
    id?: boolean
    job_id?: boolean
    client_id?: boolean
    worker_id?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type escrowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "job_id" | "client_id" | "worker_id" | "amount" | "createdAt", ExtArgs["result"]["escrows"]>

  export type $escrowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "escrows"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      job_id: bigint
      client_id: bigint
      worker_id: bigint
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["escrows"]>
    composites: {}
  }

  type escrowsGetPayload<S extends boolean | null | undefined | escrowsDefaultArgs> = $Result.GetResult<Prisma.$escrowsPayload, S>

  type escrowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<escrowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscrowsCountAggregateInputType | true
    }

  export interface escrowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['escrows'], meta: { name: 'escrows' } }
    /**
     * Find zero or one Escrows that matches the filter.
     * @param {escrowsFindUniqueArgs} args - Arguments to find a Escrows
     * @example
     * // Get one Escrows
     * const escrows = await prisma.escrows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends escrowsFindUniqueArgs>(args: SelectSubset<T, escrowsFindUniqueArgs<ExtArgs>>): Prisma__escrowsClient<$Result.GetResult<Prisma.$escrowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Escrows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {escrowsFindUniqueOrThrowArgs} args - Arguments to find a Escrows
     * @example
     * // Get one Escrows
     * const escrows = await prisma.escrows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends escrowsFindUniqueOrThrowArgs>(args: SelectSubset<T, escrowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__escrowsClient<$Result.GetResult<Prisma.$escrowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {escrowsFindFirstArgs} args - Arguments to find a Escrows
     * @example
     * // Get one Escrows
     * const escrows = await prisma.escrows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends escrowsFindFirstArgs>(args?: SelectSubset<T, escrowsFindFirstArgs<ExtArgs>>): Prisma__escrowsClient<$Result.GetResult<Prisma.$escrowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escrows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {escrowsFindFirstOrThrowArgs} args - Arguments to find a Escrows
     * @example
     * // Get one Escrows
     * const escrows = await prisma.escrows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends escrowsFindFirstOrThrowArgs>(args?: SelectSubset<T, escrowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__escrowsClient<$Result.GetResult<Prisma.$escrowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Escrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {escrowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escrows
     * const escrows = await prisma.escrows.findMany()
     * 
     * // Get first 10 Escrows
     * const escrows = await prisma.escrows.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escrowsWithIdOnly = await prisma.escrows.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends escrowsFindManyArgs>(args?: SelectSubset<T, escrowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$escrowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Escrows.
     * @param {escrowsCreateArgs} args - Arguments to create a Escrows.
     * @example
     * // Create one Escrows
     * const Escrows = await prisma.escrows.create({
     *   data: {
     *     // ... data to create a Escrows
     *   }
     * })
     * 
     */
    create<T extends escrowsCreateArgs>(args: SelectSubset<T, escrowsCreateArgs<ExtArgs>>): Prisma__escrowsClient<$Result.GetResult<Prisma.$escrowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Escrows.
     * @param {escrowsCreateManyArgs} args - Arguments to create many Escrows.
     * @example
     * // Create many Escrows
     * const escrows = await prisma.escrows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends escrowsCreateManyArgs>(args?: SelectSubset<T, escrowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Escrows.
     * @param {escrowsDeleteArgs} args - Arguments to delete one Escrows.
     * @example
     * // Delete one Escrows
     * const Escrows = await prisma.escrows.delete({
     *   where: {
     *     // ... filter to delete one Escrows
     *   }
     * })
     * 
     */
    delete<T extends escrowsDeleteArgs>(args: SelectSubset<T, escrowsDeleteArgs<ExtArgs>>): Prisma__escrowsClient<$Result.GetResult<Prisma.$escrowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Escrows.
     * @param {escrowsUpdateArgs} args - Arguments to update one Escrows.
     * @example
     * // Update one Escrows
     * const escrows = await prisma.escrows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends escrowsUpdateArgs>(args: SelectSubset<T, escrowsUpdateArgs<ExtArgs>>): Prisma__escrowsClient<$Result.GetResult<Prisma.$escrowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Escrows.
     * @param {escrowsDeleteManyArgs} args - Arguments to filter Escrows to delete.
     * @example
     * // Delete a few Escrows
     * const { count } = await prisma.escrows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends escrowsDeleteManyArgs>(args?: SelectSubset<T, escrowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {escrowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escrows
     * const escrows = await prisma.escrows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends escrowsUpdateManyArgs>(args: SelectSubset<T, escrowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Escrows.
     * @param {escrowsUpsertArgs} args - Arguments to update or create a Escrows.
     * @example
     * // Update or create a Escrows
     * const escrows = await prisma.escrows.upsert({
     *   create: {
     *     // ... data to create a Escrows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escrows we want to update
     *   }
     * })
     */
    upsert<T extends escrowsUpsertArgs>(args: SelectSubset<T, escrowsUpsertArgs<ExtArgs>>): Prisma__escrowsClient<$Result.GetResult<Prisma.$escrowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Escrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {escrowsCountArgs} args - Arguments to filter Escrows to count.
     * @example
     * // Count the number of Escrows
     * const count = await prisma.escrows.count({
     *   where: {
     *     // ... the filter for the Escrows we want to count
     *   }
     * })
    **/
    count<T extends escrowsCountArgs>(
      args?: Subset<T, escrowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscrowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscrowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EscrowsAggregateArgs>(args: Subset<T, EscrowsAggregateArgs>): Prisma.PrismaPromise<GetEscrowsAggregateType<T>>

    /**
     * Group by Escrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {escrowsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends escrowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: escrowsGroupByArgs['orderBy'] }
        : { orderBy?: escrowsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, escrowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscrowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the escrows model
   */
  readonly fields: escrowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for escrows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__escrowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the escrows model
   */
  interface escrowsFieldRefs {
    readonly id: FieldRef<"escrows", 'BigInt'>
    readonly job_id: FieldRef<"escrows", 'BigInt'>
    readonly client_id: FieldRef<"escrows", 'BigInt'>
    readonly worker_id: FieldRef<"escrows", 'BigInt'>
    readonly amount: FieldRef<"escrows", 'Float'>
    readonly createdAt: FieldRef<"escrows", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * escrows findUnique
   */
  export type escrowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
    /**
     * Filter, which escrows to fetch.
     */
    where: escrowsWhereUniqueInput
  }

  /**
   * escrows findUniqueOrThrow
   */
  export type escrowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
    /**
     * Filter, which escrows to fetch.
     */
    where: escrowsWhereUniqueInput
  }

  /**
   * escrows findFirst
   */
  export type escrowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
    /**
     * Filter, which escrows to fetch.
     */
    where?: escrowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of escrows to fetch.
     */
    orderBy?: escrowsOrderByWithRelationInput | escrowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for escrows.
     */
    cursor?: escrowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` escrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` escrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of escrows.
     */
    distinct?: EscrowsScalarFieldEnum | EscrowsScalarFieldEnum[]
  }

  /**
   * escrows findFirstOrThrow
   */
  export type escrowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
    /**
     * Filter, which escrows to fetch.
     */
    where?: escrowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of escrows to fetch.
     */
    orderBy?: escrowsOrderByWithRelationInput | escrowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for escrows.
     */
    cursor?: escrowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` escrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` escrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of escrows.
     */
    distinct?: EscrowsScalarFieldEnum | EscrowsScalarFieldEnum[]
  }

  /**
   * escrows findMany
   */
  export type escrowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
    /**
     * Filter, which escrows to fetch.
     */
    where?: escrowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of escrows to fetch.
     */
    orderBy?: escrowsOrderByWithRelationInput | escrowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing escrows.
     */
    cursor?: escrowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` escrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` escrows.
     */
    skip?: number
    distinct?: EscrowsScalarFieldEnum | EscrowsScalarFieldEnum[]
  }

  /**
   * escrows create
   */
  export type escrowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
    /**
     * The data needed to create a escrows.
     */
    data: XOR<escrowsCreateInput, escrowsUncheckedCreateInput>
  }

  /**
   * escrows createMany
   */
  export type escrowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many escrows.
     */
    data: escrowsCreateManyInput | escrowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * escrows update
   */
  export type escrowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
    /**
     * The data needed to update a escrows.
     */
    data: XOR<escrowsUpdateInput, escrowsUncheckedUpdateInput>
    /**
     * Choose, which escrows to update.
     */
    where: escrowsWhereUniqueInput
  }

  /**
   * escrows updateMany
   */
  export type escrowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update escrows.
     */
    data: XOR<escrowsUpdateManyMutationInput, escrowsUncheckedUpdateManyInput>
    /**
     * Filter which escrows to update
     */
    where?: escrowsWhereInput
    /**
     * Limit how many escrows to update.
     */
    limit?: number
  }

  /**
   * escrows upsert
   */
  export type escrowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
    /**
     * The filter to search for the escrows to update in case it exists.
     */
    where: escrowsWhereUniqueInput
    /**
     * In case the escrows found by the `where` argument doesn't exist, create a new escrows with this data.
     */
    create: XOR<escrowsCreateInput, escrowsUncheckedCreateInput>
    /**
     * In case the escrows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<escrowsUpdateInput, escrowsUncheckedUpdateInput>
  }

  /**
   * escrows delete
   */
  export type escrowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
    /**
     * Filter which escrows to delete.
     */
    where: escrowsWhereUniqueInput
  }

  /**
   * escrows deleteMany
   */
  export type escrowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which escrows to delete
     */
    where?: escrowsWhereInput
    /**
     * Limit how many escrows to delete.
     */
    limit?: number
  }

  /**
   * escrows without action
   */
  export type escrowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the escrows
     */
    select?: escrowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the escrows
     */
    omit?: escrowsOmit<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    escrow_id: number | null
    amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    escrow_id: bigint | null
    amount: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    escrow_id: bigint | null
    type: $Enums.transactions_type | null
    amount: number | null
    status: $Enums.transactions_status | null
    created_at: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    escrow_id: bigint | null
    type: $Enums.transactions_type | null
    amount: number | null
    status: $Enums.transactions_status | null
    created_at: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    user_id: number
    escrow_id: number
    type: number
    amount: number
    status: number
    created_at: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    escrow_id?: true
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    user_id?: true
    escrow_id?: true
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    user_id?: true
    escrow_id?: true
    type?: true
    amount?: true
    status?: true
    created_at?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    escrow_id?: true
    type?: true
    amount?: true
    status?: true
    created_at?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    user_id?: true
    escrow_id?: true
    type?: true
    amount?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: bigint
    user_id: bigint
    escrow_id: bigint
    type: $Enums.transactions_type
    amount: number
    status: $Enums.transactions_status | null
    created_at: Date | null
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    escrow_id?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["transactions"]>



  export type transactionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    escrow_id?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "escrow_id" | "type" | "amount" | "status" | "created_at", ExtArgs["result"]["transactions"]>

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      escrow_id: bigint
      type: $Enums.transactions_type
      amount: number
      status: $Enums.transactions_status | null
      created_at: Date | null
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", 'BigInt'>
    readonly user_id: FieldRef<"transactions", 'BigInt'>
    readonly escrow_id: FieldRef<"transactions", 'BigInt'>
    readonly type: FieldRef<"transactions", 'transactions_type'>
    readonly amount: FieldRef<"transactions", 'Float'>
    readonly status: FieldRef<"transactions", 'transactions_status'>
    readonly created_at: FieldRef<"transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    phone: 'phone',
    wilaya: 'wilaya',
    baladia: 'baladia',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WorkerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    availability: 'availability',
    rating: 'rating',
    completedJobs: 'completedJobs',
    genre: 'genre',
    bio: 'bio',
    picture: 'picture',
    nationalIDPicture: 'nationalIDPicture',
    businessDocumentPDF: 'businessDocumentPDF',
    verified: 'verified',
    createdAt: 'createdAt'
  };

  export type WorkerScalarFieldEnum = (typeof WorkerScalarFieldEnum)[keyof typeof WorkerScalarFieldEnum]


  export const ServiceRequestScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    category: 'category',
    description: 'description',
    budget: 'budget',
    urgency: 'urgency',
    status: 'status',
    createdAt: 'createdAt',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type ServiceRequestScalarFieldEnum = (typeof ServiceRequestScalarFieldEnum)[keyof typeof ServiceRequestScalarFieldEnum]


  export const ServiceRequestImageScalarFieldEnum: {
    id: 'id',
    serviceRequestId: 'serviceRequestId',
    url: 'url'
  };

  export type ServiceRequestImageScalarFieldEnum = (typeof ServiceRequestImageScalarFieldEnum)[keyof typeof ServiceRequestImageScalarFieldEnum]


  export const LobbyParticipantScalarFieldEnum: {
    serviceRequestId: 'serviceRequestId',
    workerId: 'workerId',
    source: 'source',
    bid: 'bid',
    status: 'status',
    createdAt: 'createdAt',
    clientCompleted: 'clientCompleted',
    workerCompleted: 'workerCompleted'
  };

  export type LobbyParticipantScalarFieldEnum = (typeof LobbyParticipantScalarFieldEnum)[keyof typeof LobbyParticipantScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    messages: 'messages',
    link: 'link',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const EscrowsScalarFieldEnum: {
    id: 'id',
    job_id: 'job_id',
    client_id: 'client_id',
    worker_id: 'worker_id',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type EscrowsScalarFieldEnum = (typeof EscrowsScalarFieldEnum)[keyof typeof EscrowsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    escrow_id: 'escrow_id',
    type: 'type',
    amount: 'amount',
    status: 'status',
    created_at: 'created_at'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    phone: 'phone',
    wilaya: 'wilaya',
    baladia: 'baladia'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const WorkerOrderByRelevanceFieldEnum: {
    genre: 'genre',
    bio: 'bio',
    picture: 'picture',
    nationalIDPicture: 'nationalIDPicture',
    businessDocumentPDF: 'businessDocumentPDF'
  };

  export type WorkerOrderByRelevanceFieldEnum = (typeof WorkerOrderByRelevanceFieldEnum)[keyof typeof WorkerOrderByRelevanceFieldEnum]


  export const ServiceRequestOrderByRelevanceFieldEnum: {
    category: 'category',
    description: 'description'
  };

  export type ServiceRequestOrderByRelevanceFieldEnum = (typeof ServiceRequestOrderByRelevanceFieldEnum)[keyof typeof ServiceRequestOrderByRelevanceFieldEnum]


  export const ServiceRequestImageOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type ServiceRequestImageOrderByRelevanceFieldEnum = (typeof ServiceRequestImageOrderByRelevanceFieldEnum)[keyof typeof ServiceRequestImageOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    title: 'title',
    messages: 'messages',
    link: 'link'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Urgency'
   */
  export type EnumUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Urgency'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'InvitationSource'
   */
  export type EnumInvitationSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationSource'>
    


  /**
   * Reference to a field of type 'ParticipantStatus'
   */
  export type EnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'transactions_type'
   */
  export type Enumtransactions_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transactions_type'>
    


  /**
   * Reference to a field of type 'transactions_status'
   */
  export type Enumtransactions_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transactions_status'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    wilaya?: StringFilter<"Users"> | string
    baladia?: StringFilter<"Users"> | string
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    notifications?: NotificationListRelationFilter
    serviceRequests?: ServiceRequestListRelationFilter
    worker?: XOR<WorkerNullableScalarRelationFilter, WorkerWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    wilaya?: SortOrder
    baladia?: SortOrder
    created_at?: SortOrderInput | SortOrder
    notifications?: NotificationOrderByRelationAggregateInput
    serviceRequests?: ServiceRequestOrderByRelationAggregateInput
    worker?: WorkerOrderByWithRelationInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    wilaya?: StringFilter<"Users"> | string
    baladia?: StringFilter<"Users"> | string
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    notifications?: NotificationListRelationFilter
    serviceRequests?: ServiceRequestListRelationFilter
    worker?: XOR<WorkerNullableScalarRelationFilter, WorkerWhereInput> | null
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    wilaya?: SortOrder
    baladia?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    wilaya?: StringWithAggregatesFilter<"Users"> | string
    baladia?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type WorkerWhereInput = {
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    id?: IntFilter<"Worker"> | number
    userId?: IntFilter<"Worker"> | number
    availability?: JsonFilter<"Worker">
    rating?: FloatFilter<"Worker"> | number
    completedJobs?: IntFilter<"Worker"> | number
    genre?: StringFilter<"Worker"> | string
    bio?: StringNullableFilter<"Worker"> | string | null
    picture?: StringNullableFilter<"Worker"> | string | null
    nationalIDPicture?: StringNullableFilter<"Worker"> | string | null
    businessDocumentPDF?: StringNullableFilter<"Worker"> | string | null
    verified?: BoolFilter<"Worker"> | boolean
    createdAt?: DateTimeFilter<"Worker"> | Date | string
    lobbyParticipations?: LobbyParticipantListRelationFilter
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type WorkerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    availability?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
    genre?: SortOrder
    bio?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    nationalIDPicture?: SortOrderInput | SortOrder
    businessDocumentPDF?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    lobbyParticipations?: LobbyParticipantOrderByRelationAggregateInput
    user?: UsersOrderByWithRelationInput
    _relevance?: WorkerOrderByRelevanceInput
  }

  export type WorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    availability?: JsonFilter<"Worker">
    rating?: FloatFilter<"Worker"> | number
    completedJobs?: IntFilter<"Worker"> | number
    genre?: StringFilter<"Worker"> | string
    bio?: StringNullableFilter<"Worker"> | string | null
    picture?: StringNullableFilter<"Worker"> | string | null
    nationalIDPicture?: StringNullableFilter<"Worker"> | string | null
    businessDocumentPDF?: StringNullableFilter<"Worker"> | string | null
    verified?: BoolFilter<"Worker"> | boolean
    createdAt?: DateTimeFilter<"Worker"> | Date | string
    lobbyParticipations?: LobbyParticipantListRelationFilter
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type WorkerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    availability?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
    genre?: SortOrder
    bio?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    nationalIDPicture?: SortOrderInput | SortOrder
    businessDocumentPDF?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    _count?: WorkerCountOrderByAggregateInput
    _avg?: WorkerAvgOrderByAggregateInput
    _max?: WorkerMaxOrderByAggregateInput
    _min?: WorkerMinOrderByAggregateInput
    _sum?: WorkerSumOrderByAggregateInput
  }

  export type WorkerScalarWhereWithAggregatesInput = {
    AND?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    OR?: WorkerScalarWhereWithAggregatesInput[]
    NOT?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Worker"> | number
    userId?: IntWithAggregatesFilter<"Worker"> | number
    availability?: JsonWithAggregatesFilter<"Worker">
    rating?: FloatWithAggregatesFilter<"Worker"> | number
    completedJobs?: IntWithAggregatesFilter<"Worker"> | number
    genre?: StringWithAggregatesFilter<"Worker"> | string
    bio?: StringNullableWithAggregatesFilter<"Worker"> | string | null
    picture?: StringNullableWithAggregatesFilter<"Worker"> | string | null
    nationalIDPicture?: StringNullableWithAggregatesFilter<"Worker"> | string | null
    businessDocumentPDF?: StringNullableWithAggregatesFilter<"Worker"> | string | null
    verified?: BoolWithAggregatesFilter<"Worker"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Worker"> | Date | string
  }

  export type ServiceRequestWhereInput = {
    AND?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    OR?: ServiceRequestWhereInput[]
    NOT?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    id?: IntFilter<"ServiceRequest"> | number
    clientId?: IntFilter<"ServiceRequest"> | number
    category?: StringFilter<"ServiceRequest"> | string
    description?: StringFilter<"ServiceRequest"> | string
    budget?: FloatFilter<"ServiceRequest"> | number
    urgency?: EnumUrgencyFilter<"ServiceRequest"> | $Enums.Urgency
    status?: EnumRequestStatusFilter<"ServiceRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    latitude?: FloatFilter<"ServiceRequest"> | number
    longitude?: FloatFilter<"ServiceRequest"> | number
    participants?: LobbyParticipantListRelationFilter
    client?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    images?: ServiceRequestImageListRelationFilter
  }

  export type ServiceRequestOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    participants?: LobbyParticipantOrderByRelationAggregateInput
    client?: UsersOrderByWithRelationInput
    images?: ServiceRequestImageOrderByRelationAggregateInput
    _relevance?: ServiceRequestOrderByRelevanceInput
  }

  export type ServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    OR?: ServiceRequestWhereInput[]
    NOT?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    clientId?: IntFilter<"ServiceRequest"> | number
    category?: StringFilter<"ServiceRequest"> | string
    description?: StringFilter<"ServiceRequest"> | string
    budget?: FloatFilter<"ServiceRequest"> | number
    urgency?: EnumUrgencyFilter<"ServiceRequest"> | $Enums.Urgency
    status?: EnumRequestStatusFilter<"ServiceRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    latitude?: FloatFilter<"ServiceRequest"> | number
    longitude?: FloatFilter<"ServiceRequest"> | number
    participants?: LobbyParticipantListRelationFilter
    client?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    images?: ServiceRequestImageListRelationFilter
  }, "id">

  export type ServiceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: ServiceRequestCountOrderByAggregateInput
    _avg?: ServiceRequestAvgOrderByAggregateInput
    _max?: ServiceRequestMaxOrderByAggregateInput
    _min?: ServiceRequestMinOrderByAggregateInput
    _sum?: ServiceRequestSumOrderByAggregateInput
  }

  export type ServiceRequestScalarWhereWithAggregatesInput = {
    AND?: ServiceRequestScalarWhereWithAggregatesInput | ServiceRequestScalarWhereWithAggregatesInput[]
    OR?: ServiceRequestScalarWhereWithAggregatesInput[]
    NOT?: ServiceRequestScalarWhereWithAggregatesInput | ServiceRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceRequest"> | number
    clientId?: IntWithAggregatesFilter<"ServiceRequest"> | number
    category?: StringWithAggregatesFilter<"ServiceRequest"> | string
    description?: StringWithAggregatesFilter<"ServiceRequest"> | string
    budget?: FloatWithAggregatesFilter<"ServiceRequest"> | number
    urgency?: EnumUrgencyWithAggregatesFilter<"ServiceRequest"> | $Enums.Urgency
    status?: EnumRequestStatusWithAggregatesFilter<"ServiceRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string
    latitude?: FloatWithAggregatesFilter<"ServiceRequest"> | number
    longitude?: FloatWithAggregatesFilter<"ServiceRequest"> | number
  }

  export type ServiceRequestImageWhereInput = {
    AND?: ServiceRequestImageWhereInput | ServiceRequestImageWhereInput[]
    OR?: ServiceRequestImageWhereInput[]
    NOT?: ServiceRequestImageWhereInput | ServiceRequestImageWhereInput[]
    id?: IntFilter<"ServiceRequestImage"> | number
    serviceRequestId?: IntFilter<"ServiceRequestImage"> | number
    url?: StringFilter<"ServiceRequestImage"> | string
    serviceRequest?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
  }

  export type ServiceRequestImageOrderByWithRelationInput = {
    id?: SortOrder
    serviceRequestId?: SortOrder
    url?: SortOrder
    serviceRequest?: ServiceRequestOrderByWithRelationInput
    _relevance?: ServiceRequestImageOrderByRelevanceInput
  }

  export type ServiceRequestImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceRequestImageWhereInput | ServiceRequestImageWhereInput[]
    OR?: ServiceRequestImageWhereInput[]
    NOT?: ServiceRequestImageWhereInput | ServiceRequestImageWhereInput[]
    serviceRequestId?: IntFilter<"ServiceRequestImage"> | number
    url?: StringFilter<"ServiceRequestImage"> | string
    serviceRequest?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
  }, "id">

  export type ServiceRequestImageOrderByWithAggregationInput = {
    id?: SortOrder
    serviceRequestId?: SortOrder
    url?: SortOrder
    _count?: ServiceRequestImageCountOrderByAggregateInput
    _avg?: ServiceRequestImageAvgOrderByAggregateInput
    _max?: ServiceRequestImageMaxOrderByAggregateInput
    _min?: ServiceRequestImageMinOrderByAggregateInput
    _sum?: ServiceRequestImageSumOrderByAggregateInput
  }

  export type ServiceRequestImageScalarWhereWithAggregatesInput = {
    AND?: ServiceRequestImageScalarWhereWithAggregatesInput | ServiceRequestImageScalarWhereWithAggregatesInput[]
    OR?: ServiceRequestImageScalarWhereWithAggregatesInput[]
    NOT?: ServiceRequestImageScalarWhereWithAggregatesInput | ServiceRequestImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceRequestImage"> | number
    serviceRequestId?: IntWithAggregatesFilter<"ServiceRequestImage"> | number
    url?: StringWithAggregatesFilter<"ServiceRequestImage"> | string
  }

  export type LobbyParticipantWhereInput = {
    AND?: LobbyParticipantWhereInput | LobbyParticipantWhereInput[]
    OR?: LobbyParticipantWhereInput[]
    NOT?: LobbyParticipantWhereInput | LobbyParticipantWhereInput[]
    serviceRequestId?: IntFilter<"LobbyParticipant"> | number
    workerId?: IntFilter<"LobbyParticipant"> | number
    source?: EnumInvitationSourceFilter<"LobbyParticipant"> | $Enums.InvitationSource
    bid?: FloatFilter<"LobbyParticipant"> | number
    status?: EnumParticipantStatusFilter<"LobbyParticipant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeFilter<"LobbyParticipant"> | Date | string
    clientCompleted?: BoolFilter<"LobbyParticipant"> | boolean
    workerCompleted?: BoolFilter<"LobbyParticipant"> | boolean
    serviceRequest?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
  }

  export type LobbyParticipantOrderByWithRelationInput = {
    serviceRequestId?: SortOrder
    workerId?: SortOrder
    source?: SortOrder
    bid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    clientCompleted?: SortOrder
    workerCompleted?: SortOrder
    serviceRequest?: ServiceRequestOrderByWithRelationInput
    worker?: WorkerOrderByWithRelationInput
  }

  export type LobbyParticipantWhereUniqueInput = Prisma.AtLeast<{
    serviceRequestId_workerId?: LobbyParticipantServiceRequestIdWorkerIdCompoundUniqueInput
    AND?: LobbyParticipantWhereInput | LobbyParticipantWhereInput[]
    OR?: LobbyParticipantWhereInput[]
    NOT?: LobbyParticipantWhereInput | LobbyParticipantWhereInput[]
    serviceRequestId?: IntFilter<"LobbyParticipant"> | number
    workerId?: IntFilter<"LobbyParticipant"> | number
    source?: EnumInvitationSourceFilter<"LobbyParticipant"> | $Enums.InvitationSource
    bid?: FloatFilter<"LobbyParticipant"> | number
    status?: EnumParticipantStatusFilter<"LobbyParticipant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeFilter<"LobbyParticipant"> | Date | string
    clientCompleted?: BoolFilter<"LobbyParticipant"> | boolean
    workerCompleted?: BoolFilter<"LobbyParticipant"> | boolean
    serviceRequest?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
  }, "serviceRequestId_workerId">

  export type LobbyParticipantOrderByWithAggregationInput = {
    serviceRequestId?: SortOrder
    workerId?: SortOrder
    source?: SortOrder
    bid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    clientCompleted?: SortOrder
    workerCompleted?: SortOrder
    _count?: LobbyParticipantCountOrderByAggregateInput
    _avg?: LobbyParticipantAvgOrderByAggregateInput
    _max?: LobbyParticipantMaxOrderByAggregateInput
    _min?: LobbyParticipantMinOrderByAggregateInput
    _sum?: LobbyParticipantSumOrderByAggregateInput
  }

  export type LobbyParticipantScalarWhereWithAggregatesInput = {
    AND?: LobbyParticipantScalarWhereWithAggregatesInput | LobbyParticipantScalarWhereWithAggregatesInput[]
    OR?: LobbyParticipantScalarWhereWithAggregatesInput[]
    NOT?: LobbyParticipantScalarWhereWithAggregatesInput | LobbyParticipantScalarWhereWithAggregatesInput[]
    serviceRequestId?: IntWithAggregatesFilter<"LobbyParticipant"> | number
    workerId?: IntWithAggregatesFilter<"LobbyParticipant"> | number
    source?: EnumInvitationSourceWithAggregatesFilter<"LobbyParticipant"> | $Enums.InvitationSource
    bid?: FloatWithAggregatesFilter<"LobbyParticipant"> | number
    status?: EnumParticipantStatusWithAggregatesFilter<"LobbyParticipant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeWithAggregatesFilter<"LobbyParticipant"> | Date | string
    clientCompleted?: BoolWithAggregatesFilter<"LobbyParticipant"> | boolean
    workerCompleted?: BoolWithAggregatesFilter<"LobbyParticipant"> | boolean
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    messages?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    messages?: SortOrder
    link?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    messages?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    messages?: SortOrder
    link?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    messages?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type escrowsWhereInput = {
    AND?: escrowsWhereInput | escrowsWhereInput[]
    OR?: escrowsWhereInput[]
    NOT?: escrowsWhereInput | escrowsWhereInput[]
    id?: BigIntFilter<"escrows"> | bigint | number
    job_id?: BigIntFilter<"escrows"> | bigint | number
    client_id?: BigIntFilter<"escrows"> | bigint | number
    worker_id?: BigIntFilter<"escrows"> | bigint | number
    amount?: FloatFilter<"escrows"> | number
    createdAt?: DateTimeFilter<"escrows"> | Date | string
  }

  export type escrowsOrderByWithRelationInput = {
    id?: SortOrder
    job_id?: SortOrder
    client_id?: SortOrder
    worker_id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type escrowsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: escrowsWhereInput | escrowsWhereInput[]
    OR?: escrowsWhereInput[]
    NOT?: escrowsWhereInput | escrowsWhereInput[]
    job_id?: BigIntFilter<"escrows"> | bigint | number
    client_id?: BigIntFilter<"escrows"> | bigint | number
    worker_id?: BigIntFilter<"escrows"> | bigint | number
    amount?: FloatFilter<"escrows"> | number
    createdAt?: DateTimeFilter<"escrows"> | Date | string
  }, "id">

  export type escrowsOrderByWithAggregationInput = {
    id?: SortOrder
    job_id?: SortOrder
    client_id?: SortOrder
    worker_id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: escrowsCountOrderByAggregateInput
    _avg?: escrowsAvgOrderByAggregateInput
    _max?: escrowsMaxOrderByAggregateInput
    _min?: escrowsMinOrderByAggregateInput
    _sum?: escrowsSumOrderByAggregateInput
  }

  export type escrowsScalarWhereWithAggregatesInput = {
    AND?: escrowsScalarWhereWithAggregatesInput | escrowsScalarWhereWithAggregatesInput[]
    OR?: escrowsScalarWhereWithAggregatesInput[]
    NOT?: escrowsScalarWhereWithAggregatesInput | escrowsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"escrows"> | bigint | number
    job_id?: BigIntWithAggregatesFilter<"escrows"> | bigint | number
    client_id?: BigIntWithAggregatesFilter<"escrows"> | bigint | number
    worker_id?: BigIntWithAggregatesFilter<"escrows"> | bigint | number
    amount?: FloatWithAggregatesFilter<"escrows"> | number
    createdAt?: DateTimeWithAggregatesFilter<"escrows"> | Date | string
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: BigIntFilter<"transactions"> | bigint | number
    user_id?: BigIntFilter<"transactions"> | bigint | number
    escrow_id?: BigIntFilter<"transactions"> | bigint | number
    type?: Enumtransactions_typeFilter<"transactions"> | $Enums.transactions_type
    amount?: FloatFilter<"transactions"> | number
    status?: Enumtransactions_statusNullableFilter<"transactions"> | $Enums.transactions_status | null
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    escrow_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    user_id?: BigIntFilter<"transactions"> | bigint | number
    escrow_id?: BigIntFilter<"transactions"> | bigint | number
    type?: Enumtransactions_typeFilter<"transactions"> | $Enums.transactions_type
    amount?: FloatFilter<"transactions"> | number
    status?: Enumtransactions_statusNullableFilter<"transactions"> | $Enums.transactions_status | null
    created_at?: DateTimeNullableFilter<"transactions"> | Date | string | null
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    escrow_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"transactions"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"transactions"> | bigint | number
    escrow_id?: BigIntWithAggregatesFilter<"transactions"> | bigint | number
    type?: Enumtransactions_typeWithAggregatesFilter<"transactions"> | $Enums.transactions_type
    amount?: FloatWithAggregatesFilter<"transactions"> | number
    status?: Enumtransactions_statusNullableWithAggregatesFilter<"transactions"> | $Enums.transactions_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at?: Date | string | null
    notifications?: NotificationCreateNestedManyWithoutUserInput
    serviceRequests?: ServiceRequestCreateNestedManyWithoutClientInput
    worker?: WorkerCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at?: Date | string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutClientInput
    worker?: WorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    serviceRequests?: ServiceRequestUpdateManyWithoutClientNestedInput
    worker?: WorkerUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutClientNestedInput
    worker?: WorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkerCreateInput = {
    availability: JsonNullValueInput | InputJsonValue
    rating: number
    completedJobs: number
    genre: string
    bio?: string | null
    picture?: string | null
    nationalIDPicture?: string | null
    businessDocumentPDF?: string | null
    verified?: boolean
    createdAt?: Date | string
    lobbyParticipations?: LobbyParticipantCreateNestedManyWithoutWorkerInput
    user: UsersCreateNestedOneWithoutWorkerInput
  }

  export type WorkerUncheckedCreateInput = {
    id?: number
    userId: number
    availability: JsonNullValueInput | InputJsonValue
    rating: number
    completedJobs: number
    genre: string
    bio?: string | null
    picture?: string | null
    nationalIDPicture?: string | null
    businessDocumentPDF?: string | null
    verified?: boolean
    createdAt?: Date | string
    lobbyParticipations?: LobbyParticipantUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUpdateInput = {
    availability?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIDPicture?: NullableStringFieldUpdateOperationsInput | string | null
    businessDocumentPDF?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbyParticipations?: LobbyParticipantUpdateManyWithoutWorkerNestedInput
    user?: UsersUpdateOneRequiredWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    availability?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIDPicture?: NullableStringFieldUpdateOperationsInput | string | null
    businessDocumentPDF?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbyParticipations?: LobbyParticipantUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerCreateManyInput = {
    id?: number
    userId: number
    availability: JsonNullValueInput | InputJsonValue
    rating: number
    completedJobs: number
    genre: string
    bio?: string | null
    picture?: string | null
    nationalIDPicture?: string | null
    businessDocumentPDF?: string | null
    verified?: boolean
    createdAt?: Date | string
  }

  export type WorkerUpdateManyMutationInput = {
    availability?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIDPicture?: NullableStringFieldUpdateOperationsInput | string | null
    businessDocumentPDF?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    availability?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIDPicture?: NullableStringFieldUpdateOperationsInput | string | null
    businessDocumentPDF?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRequestCreateInput = {
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
    participants?: LobbyParticipantCreateNestedManyWithoutServiceRequestInput
    client: UsersCreateNestedOneWithoutServiceRequestsInput
    images?: ServiceRequestImageCreateNestedManyWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateInput = {
    id?: number
    clientId: number
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
    participants?: LobbyParticipantUncheckedCreateNestedManyWithoutServiceRequestInput
    images?: ServiceRequestImageUncheckedCreateNestedManyWithoutServiceRequestInput
  }

  export type ServiceRequestUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    participants?: LobbyParticipantUpdateManyWithoutServiceRequestNestedInput
    client?: UsersUpdateOneRequiredWithoutServiceRequestsNestedInput
    images?: ServiceRequestImageUpdateManyWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    participants?: LobbyParticipantUncheckedUpdateManyWithoutServiceRequestNestedInput
    images?: ServiceRequestImageUncheckedUpdateManyWithoutServiceRequestNestedInput
  }

  export type ServiceRequestCreateManyInput = {
    id?: number
    clientId: number
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
  }

  export type ServiceRequestUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type ServiceRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type ServiceRequestImageCreateInput = {
    url: string
    serviceRequest: ServiceRequestCreateNestedOneWithoutImagesInput
  }

  export type ServiceRequestImageUncheckedCreateInput = {
    id?: number
    serviceRequestId: number
    url: string
  }

  export type ServiceRequestImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    serviceRequest?: ServiceRequestUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ServiceRequestImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceRequestId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceRequestImageCreateManyInput = {
    id?: number
    serviceRequestId: number
    url: string
  }

  export type ServiceRequestImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceRequestImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceRequestId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LobbyParticipantCreateInput = {
    source: $Enums.InvitationSource
    bid: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    clientCompleted?: boolean
    workerCompleted?: boolean
    serviceRequest: ServiceRequestCreateNestedOneWithoutParticipantsInput
    worker: WorkerCreateNestedOneWithoutLobbyParticipationsInput
  }

  export type LobbyParticipantUncheckedCreateInput = {
    serviceRequestId: number
    workerId: number
    source: $Enums.InvitationSource
    bid: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    clientCompleted?: boolean
    workerCompleted?: boolean
  }

  export type LobbyParticipantUpdateInput = {
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
    serviceRequest?: ServiceRequestUpdateOneRequiredWithoutParticipantsNestedInput
    worker?: WorkerUpdateOneRequiredWithoutLobbyParticipationsNestedInput
  }

  export type LobbyParticipantUncheckedUpdateInput = {
    serviceRequestId?: IntFieldUpdateOperationsInput | number
    workerId?: IntFieldUpdateOperationsInput | number
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LobbyParticipantCreateManyInput = {
    serviceRequestId: number
    workerId: number
    source: $Enums.InvitationSource
    bid: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    clientCompleted?: boolean
    workerCompleted?: boolean
  }

  export type LobbyParticipantUpdateManyMutationInput = {
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LobbyParticipantUncheckedUpdateManyInput = {
    serviceRequestId?: IntFieldUpdateOperationsInput | number
    workerId?: IntFieldUpdateOperationsInput | number
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateInput = {
    title: string
    messages: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    messages: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    messages: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type escrowsCreateInput = {
    id?: bigint | number
    job_id: bigint | number
    client_id: bigint | number
    worker_id: bigint | number
    amount: number
    createdAt?: Date | string
  }

  export type escrowsUncheckedCreateInput = {
    id?: bigint | number
    job_id: bigint | number
    client_id: bigint | number
    worker_id: bigint | number
    amount: number
    createdAt?: Date | string
  }

  export type escrowsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    worker_id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type escrowsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    worker_id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type escrowsCreateManyInput = {
    id?: bigint | number
    job_id: bigint | number
    client_id: bigint | number
    worker_id: bigint | number
    amount: number
    createdAt?: Date | string
  }

  export type escrowsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    worker_id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type escrowsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    worker_id?: BigIntFieldUpdateOperationsInput | bigint | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    escrow_id: bigint | number
    type: $Enums.transactions_type
    amount: number
    status?: $Enums.transactions_status | null
    created_at?: Date | string | null
  }

  export type transactionsUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    escrow_id: bigint | number
    type: $Enums.transactions_type
    amount: number
    status?: $Enums.transactions_status | null
    created_at?: Date | string | null
  }

  export type transactionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    escrow_id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
    amount?: FloatFieldUpdateOperationsInput | number
    status?: NullableEnumtransactions_statusFieldUpdateOperationsInput | $Enums.transactions_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    escrow_id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
    amount?: FloatFieldUpdateOperationsInput | number
    status?: NullableEnumtransactions_statusFieldUpdateOperationsInput | $Enums.transactions_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    escrow_id: bigint | number
    type: $Enums.transactions_type
    amount: number
    status?: $Enums.transactions_status | null
    created_at?: Date | string | null
  }

  export type transactionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    escrow_id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
    amount?: FloatFieldUpdateOperationsInput | number
    status?: NullableEnumtransactions_statusFieldUpdateOperationsInput | $Enums.transactions_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    escrow_id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
    amount?: FloatFieldUpdateOperationsInput | number
    status?: NullableEnumtransactions_statusFieldUpdateOperationsInput | $Enums.transactions_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ServiceRequestListRelationFilter = {
    every?: ServiceRequestWhereInput
    some?: ServiceRequestWhereInput
    none?: ServiceRequestWhereInput
  }

  export type WorkerNullableScalarRelationFilter = {
    is?: WorkerWhereInput | null
    isNot?: WorkerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    wilaya?: SortOrder
    baladia?: SortOrder
    created_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    wilaya?: SortOrder
    baladia?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    wilaya?: SortOrder
    baladia?: SortOrder
    created_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LobbyParticipantListRelationFilter = {
    every?: LobbyParticipantWhereInput
    some?: LobbyParticipantWhereInput
    none?: LobbyParticipantWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type LobbyParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkerOrderByRelevanceInput = {
    fields: WorkerOrderByRelevanceFieldEnum | WorkerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    availability?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
    genre?: SortOrder
    bio?: SortOrder
    picture?: SortOrder
    nationalIDPicture?: SortOrder
    businessDocumentPDF?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
  }

  export type WorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
    genre?: SortOrder
    bio?: SortOrder
    picture?: SortOrder
    nationalIDPicture?: SortOrder
    businessDocumentPDF?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
    genre?: SortOrder
    bio?: SortOrder
    picture?: SortOrder
    nationalIDPicture?: SortOrder
    businessDocumentPDF?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    completedJobs?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[]
    notIn?: $Enums.Urgency[]
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type ServiceRequestImageListRelationFilter = {
    every?: ServiceRequestImageWhereInput
    some?: ServiceRequestImageWhereInput
    none?: ServiceRequestImageWhereInput
  }

  export type ServiceRequestImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceRequestOrderByRelevanceInput = {
    fields: ServiceRequestOrderByRelevanceFieldEnum | ServiceRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ServiceRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    budget?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ServiceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ServiceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    category?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ServiceRequestSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    budget?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[]
    notIn?: $Enums.Urgency[]
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type ServiceRequestScalarRelationFilter = {
    is?: ServiceRequestWhereInput
    isNot?: ServiceRequestWhereInput
  }

  export type ServiceRequestImageOrderByRelevanceInput = {
    fields: ServiceRequestImageOrderByRelevanceFieldEnum | ServiceRequestImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServiceRequestImageCountOrderByAggregateInput = {
    id?: SortOrder
    serviceRequestId?: SortOrder
    url?: SortOrder
  }

  export type ServiceRequestImageAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceRequestId?: SortOrder
  }

  export type ServiceRequestImageMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceRequestId?: SortOrder
    url?: SortOrder
  }

  export type ServiceRequestImageMinOrderByAggregateInput = {
    id?: SortOrder
    serviceRequestId?: SortOrder
    url?: SortOrder
  }

  export type ServiceRequestImageSumOrderByAggregateInput = {
    id?: SortOrder
    serviceRequestId?: SortOrder
  }

  export type EnumInvitationSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationSource | EnumInvitationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationSource[]
    notIn?: $Enums.InvitationSource[]
    not?: NestedEnumInvitationSourceFilter<$PrismaModel> | $Enums.InvitationSource
  }

  export type EnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[]
    notIn?: $Enums.ParticipantStatus[]
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type WorkerScalarRelationFilter = {
    is?: WorkerWhereInput
    isNot?: WorkerWhereInput
  }

  export type LobbyParticipantServiceRequestIdWorkerIdCompoundUniqueInput = {
    serviceRequestId: number
    workerId: number
  }

  export type LobbyParticipantCountOrderByAggregateInput = {
    serviceRequestId?: SortOrder
    workerId?: SortOrder
    source?: SortOrder
    bid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    clientCompleted?: SortOrder
    workerCompleted?: SortOrder
  }

  export type LobbyParticipantAvgOrderByAggregateInput = {
    serviceRequestId?: SortOrder
    workerId?: SortOrder
    bid?: SortOrder
  }

  export type LobbyParticipantMaxOrderByAggregateInput = {
    serviceRequestId?: SortOrder
    workerId?: SortOrder
    source?: SortOrder
    bid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    clientCompleted?: SortOrder
    workerCompleted?: SortOrder
  }

  export type LobbyParticipantMinOrderByAggregateInput = {
    serviceRequestId?: SortOrder
    workerId?: SortOrder
    source?: SortOrder
    bid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    clientCompleted?: SortOrder
    workerCompleted?: SortOrder
  }

  export type LobbyParticipantSumOrderByAggregateInput = {
    serviceRequestId?: SortOrder
    workerId?: SortOrder
    bid?: SortOrder
  }

  export type EnumInvitationSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationSource | EnumInvitationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationSource[]
    notIn?: $Enums.InvitationSource[]
    not?: NestedEnumInvitationSourceWithAggregatesFilter<$PrismaModel> | $Enums.InvitationSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationSourceFilter<$PrismaModel>
    _max?: NestedEnumInvitationSourceFilter<$PrismaModel>
  }

  export type EnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[]
    notIn?: $Enums.ParticipantStatus[]
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    messages?: SortOrder
    link?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    messages?: SortOrder
    link?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    messages?: SortOrder
    link?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type escrowsCountOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    client_id?: SortOrder
    worker_id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type escrowsAvgOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    client_id?: SortOrder
    worker_id?: SortOrder
    amount?: SortOrder
  }

  export type escrowsMaxOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    client_id?: SortOrder
    worker_id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type escrowsMinOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    client_id?: SortOrder
    worker_id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type escrowsSumOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    client_id?: SortOrder
    worker_id?: SortOrder
    amount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Enumtransactions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeFilter<$PrismaModel> | $Enums.transactions_type
  }

  export type Enumtransactions_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_status | Enumtransactions_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.transactions_status[] | null
    notIn?: $Enums.transactions_status[] | null
    not?: NestedEnumtransactions_statusNullableFilter<$PrismaModel> | $Enums.transactions_status | null
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    escrow_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    escrow_id?: SortOrder
    amount?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    escrow_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    escrow_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    escrow_id?: SortOrder
    amount?: SortOrder
  }

  export type Enumtransactions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeWithAggregatesFilter<$PrismaModel> | $Enums.transactions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransactions_typeFilter<$PrismaModel>
    _max?: NestedEnumtransactions_typeFilter<$PrismaModel>
  }

  export type Enumtransactions_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_status | Enumtransactions_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.transactions_status[] | null
    notIn?: $Enums.transactions_status[] | null
    not?: NestedEnumtransactions_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.transactions_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtransactions_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumtransactions_statusNullableFilter<$PrismaModel>
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ServiceRequestCreateNestedManyWithoutClientInput = {
    create?: XOR<ServiceRequestCreateWithoutClientInput, ServiceRequestUncheckedCreateWithoutClientInput> | ServiceRequestCreateWithoutClientInput[] | ServiceRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutClientInput | ServiceRequestCreateOrConnectWithoutClientInput[]
    createMany?: ServiceRequestCreateManyClientInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type WorkerCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkerCreateWithoutUserInput, WorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutUserInput
    connect?: WorkerWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ServiceRequestUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ServiceRequestCreateWithoutClientInput, ServiceRequestUncheckedCreateWithoutClientInput> | ServiceRequestCreateWithoutClientInput[] | ServiceRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutClientInput | ServiceRequestCreateOrConnectWithoutClientInput[]
    createMany?: ServiceRequestCreateManyClientInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type WorkerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkerCreateWithoutUserInput, WorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutUserInput
    connect?: WorkerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ServiceRequestUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutClientInput, ServiceRequestUncheckedCreateWithoutClientInput> | ServiceRequestCreateWithoutClientInput[] | ServiceRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutClientInput | ServiceRequestCreateOrConnectWithoutClientInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutClientInput | ServiceRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServiceRequestCreateManyClientInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutClientInput | ServiceRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutClientInput | ServiceRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type WorkerUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkerCreateWithoutUserInput, WorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutUserInput
    upsert?: WorkerUpsertWithoutUserInput
    disconnect?: WorkerWhereInput | boolean
    delete?: WorkerWhereInput | boolean
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutUserInput, WorkerUpdateWithoutUserInput>, WorkerUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ServiceRequestUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutClientInput, ServiceRequestUncheckedCreateWithoutClientInput> | ServiceRequestCreateWithoutClientInput[] | ServiceRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutClientInput | ServiceRequestCreateOrConnectWithoutClientInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutClientInput | ServiceRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServiceRequestCreateManyClientInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutClientInput | ServiceRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutClientInput | ServiceRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type WorkerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkerCreateWithoutUserInput, WorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutUserInput
    upsert?: WorkerUpsertWithoutUserInput
    disconnect?: WorkerWhereInput | boolean
    delete?: WorkerWhereInput | boolean
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutUserInput, WorkerUpdateWithoutUserInput>, WorkerUncheckedUpdateWithoutUserInput>
  }

  export type LobbyParticipantCreateNestedManyWithoutWorkerInput = {
    create?: XOR<LobbyParticipantCreateWithoutWorkerInput, LobbyParticipantUncheckedCreateWithoutWorkerInput> | LobbyParticipantCreateWithoutWorkerInput[] | LobbyParticipantUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutWorkerInput | LobbyParticipantCreateOrConnectWithoutWorkerInput[]
    createMany?: LobbyParticipantCreateManyWorkerInputEnvelope
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutWorkerInput = {
    create?: XOR<UsersCreateWithoutWorkerInput, UsersUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWorkerInput
    connect?: UsersWhereUniqueInput
  }

  export type LobbyParticipantUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<LobbyParticipantCreateWithoutWorkerInput, LobbyParticipantUncheckedCreateWithoutWorkerInput> | LobbyParticipantCreateWithoutWorkerInput[] | LobbyParticipantUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutWorkerInput | LobbyParticipantCreateOrConnectWithoutWorkerInput[]
    createMany?: LobbyParticipantCreateManyWorkerInputEnvelope
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LobbyParticipantUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<LobbyParticipantCreateWithoutWorkerInput, LobbyParticipantUncheckedCreateWithoutWorkerInput> | LobbyParticipantCreateWithoutWorkerInput[] | LobbyParticipantUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutWorkerInput | LobbyParticipantCreateOrConnectWithoutWorkerInput[]
    upsert?: LobbyParticipantUpsertWithWhereUniqueWithoutWorkerInput | LobbyParticipantUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: LobbyParticipantCreateManyWorkerInputEnvelope
    set?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    disconnect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    delete?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    update?: LobbyParticipantUpdateWithWhereUniqueWithoutWorkerInput | LobbyParticipantUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: LobbyParticipantUpdateManyWithWhereWithoutWorkerInput | LobbyParticipantUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutWorkerNestedInput = {
    create?: XOR<UsersCreateWithoutWorkerInput, UsersUncheckedCreateWithoutWorkerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWorkerInput
    upsert?: UsersUpsertWithoutWorkerInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutWorkerInput, UsersUpdateWithoutWorkerInput>, UsersUncheckedUpdateWithoutWorkerInput>
  }

  export type LobbyParticipantUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<LobbyParticipantCreateWithoutWorkerInput, LobbyParticipantUncheckedCreateWithoutWorkerInput> | LobbyParticipantCreateWithoutWorkerInput[] | LobbyParticipantUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutWorkerInput | LobbyParticipantCreateOrConnectWithoutWorkerInput[]
    upsert?: LobbyParticipantUpsertWithWhereUniqueWithoutWorkerInput | LobbyParticipantUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: LobbyParticipantCreateManyWorkerInputEnvelope
    set?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    disconnect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    delete?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    update?: LobbyParticipantUpdateWithWhereUniqueWithoutWorkerInput | LobbyParticipantUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: LobbyParticipantUpdateManyWithWhereWithoutWorkerInput | LobbyParticipantUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
  }

  export type LobbyParticipantCreateNestedManyWithoutServiceRequestInput = {
    create?: XOR<LobbyParticipantCreateWithoutServiceRequestInput, LobbyParticipantUncheckedCreateWithoutServiceRequestInput> | LobbyParticipantCreateWithoutServiceRequestInput[] | LobbyParticipantUncheckedCreateWithoutServiceRequestInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutServiceRequestInput | LobbyParticipantCreateOrConnectWithoutServiceRequestInput[]
    createMany?: LobbyParticipantCreateManyServiceRequestInputEnvelope
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutServiceRequestsInput = {
    create?: XOR<UsersCreateWithoutServiceRequestsInput, UsersUncheckedCreateWithoutServiceRequestsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutServiceRequestsInput
    connect?: UsersWhereUniqueInput
  }

  export type ServiceRequestImageCreateNestedManyWithoutServiceRequestInput = {
    create?: XOR<ServiceRequestImageCreateWithoutServiceRequestInput, ServiceRequestImageUncheckedCreateWithoutServiceRequestInput> | ServiceRequestImageCreateWithoutServiceRequestInput[] | ServiceRequestImageUncheckedCreateWithoutServiceRequestInput[]
    connectOrCreate?: ServiceRequestImageCreateOrConnectWithoutServiceRequestInput | ServiceRequestImageCreateOrConnectWithoutServiceRequestInput[]
    createMany?: ServiceRequestImageCreateManyServiceRequestInputEnvelope
    connect?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
  }

  export type LobbyParticipantUncheckedCreateNestedManyWithoutServiceRequestInput = {
    create?: XOR<LobbyParticipantCreateWithoutServiceRequestInput, LobbyParticipantUncheckedCreateWithoutServiceRequestInput> | LobbyParticipantCreateWithoutServiceRequestInput[] | LobbyParticipantUncheckedCreateWithoutServiceRequestInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutServiceRequestInput | LobbyParticipantCreateOrConnectWithoutServiceRequestInput[]
    createMany?: LobbyParticipantCreateManyServiceRequestInputEnvelope
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
  }

  export type ServiceRequestImageUncheckedCreateNestedManyWithoutServiceRequestInput = {
    create?: XOR<ServiceRequestImageCreateWithoutServiceRequestInput, ServiceRequestImageUncheckedCreateWithoutServiceRequestInput> | ServiceRequestImageCreateWithoutServiceRequestInput[] | ServiceRequestImageUncheckedCreateWithoutServiceRequestInput[]
    connectOrCreate?: ServiceRequestImageCreateOrConnectWithoutServiceRequestInput | ServiceRequestImageCreateOrConnectWithoutServiceRequestInput[]
    createMany?: ServiceRequestImageCreateManyServiceRequestInputEnvelope
    connect?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
  }

  export type EnumUrgencyFieldUpdateOperationsInput = {
    set?: $Enums.Urgency
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type LobbyParticipantUpdateManyWithoutServiceRequestNestedInput = {
    create?: XOR<LobbyParticipantCreateWithoutServiceRequestInput, LobbyParticipantUncheckedCreateWithoutServiceRequestInput> | LobbyParticipantCreateWithoutServiceRequestInput[] | LobbyParticipantUncheckedCreateWithoutServiceRequestInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutServiceRequestInput | LobbyParticipantCreateOrConnectWithoutServiceRequestInput[]
    upsert?: LobbyParticipantUpsertWithWhereUniqueWithoutServiceRequestInput | LobbyParticipantUpsertWithWhereUniqueWithoutServiceRequestInput[]
    createMany?: LobbyParticipantCreateManyServiceRequestInputEnvelope
    set?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    disconnect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    delete?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    update?: LobbyParticipantUpdateWithWhereUniqueWithoutServiceRequestInput | LobbyParticipantUpdateWithWhereUniqueWithoutServiceRequestInput[]
    updateMany?: LobbyParticipantUpdateManyWithWhereWithoutServiceRequestInput | LobbyParticipantUpdateManyWithWhereWithoutServiceRequestInput[]
    deleteMany?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutServiceRequestsNestedInput = {
    create?: XOR<UsersCreateWithoutServiceRequestsInput, UsersUncheckedCreateWithoutServiceRequestsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutServiceRequestsInput
    upsert?: UsersUpsertWithoutServiceRequestsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutServiceRequestsInput, UsersUpdateWithoutServiceRequestsInput>, UsersUncheckedUpdateWithoutServiceRequestsInput>
  }

  export type ServiceRequestImageUpdateManyWithoutServiceRequestNestedInput = {
    create?: XOR<ServiceRequestImageCreateWithoutServiceRequestInput, ServiceRequestImageUncheckedCreateWithoutServiceRequestInput> | ServiceRequestImageCreateWithoutServiceRequestInput[] | ServiceRequestImageUncheckedCreateWithoutServiceRequestInput[]
    connectOrCreate?: ServiceRequestImageCreateOrConnectWithoutServiceRequestInput | ServiceRequestImageCreateOrConnectWithoutServiceRequestInput[]
    upsert?: ServiceRequestImageUpsertWithWhereUniqueWithoutServiceRequestInput | ServiceRequestImageUpsertWithWhereUniqueWithoutServiceRequestInput[]
    createMany?: ServiceRequestImageCreateManyServiceRequestInputEnvelope
    set?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
    disconnect?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
    delete?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
    connect?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
    update?: ServiceRequestImageUpdateWithWhereUniqueWithoutServiceRequestInput | ServiceRequestImageUpdateWithWhereUniqueWithoutServiceRequestInput[]
    updateMany?: ServiceRequestImageUpdateManyWithWhereWithoutServiceRequestInput | ServiceRequestImageUpdateManyWithWhereWithoutServiceRequestInput[]
    deleteMany?: ServiceRequestImageScalarWhereInput | ServiceRequestImageScalarWhereInput[]
  }

  export type LobbyParticipantUncheckedUpdateManyWithoutServiceRequestNestedInput = {
    create?: XOR<LobbyParticipantCreateWithoutServiceRequestInput, LobbyParticipantUncheckedCreateWithoutServiceRequestInput> | LobbyParticipantCreateWithoutServiceRequestInput[] | LobbyParticipantUncheckedCreateWithoutServiceRequestInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutServiceRequestInput | LobbyParticipantCreateOrConnectWithoutServiceRequestInput[]
    upsert?: LobbyParticipantUpsertWithWhereUniqueWithoutServiceRequestInput | LobbyParticipantUpsertWithWhereUniqueWithoutServiceRequestInput[]
    createMany?: LobbyParticipantCreateManyServiceRequestInputEnvelope
    set?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    disconnect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    delete?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    update?: LobbyParticipantUpdateWithWhereUniqueWithoutServiceRequestInput | LobbyParticipantUpdateWithWhereUniqueWithoutServiceRequestInput[]
    updateMany?: LobbyParticipantUpdateManyWithWhereWithoutServiceRequestInput | LobbyParticipantUpdateManyWithWhereWithoutServiceRequestInput[]
    deleteMany?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
  }

  export type ServiceRequestImageUncheckedUpdateManyWithoutServiceRequestNestedInput = {
    create?: XOR<ServiceRequestImageCreateWithoutServiceRequestInput, ServiceRequestImageUncheckedCreateWithoutServiceRequestInput> | ServiceRequestImageCreateWithoutServiceRequestInput[] | ServiceRequestImageUncheckedCreateWithoutServiceRequestInput[]
    connectOrCreate?: ServiceRequestImageCreateOrConnectWithoutServiceRequestInput | ServiceRequestImageCreateOrConnectWithoutServiceRequestInput[]
    upsert?: ServiceRequestImageUpsertWithWhereUniqueWithoutServiceRequestInput | ServiceRequestImageUpsertWithWhereUniqueWithoutServiceRequestInput[]
    createMany?: ServiceRequestImageCreateManyServiceRequestInputEnvelope
    set?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
    disconnect?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
    delete?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
    connect?: ServiceRequestImageWhereUniqueInput | ServiceRequestImageWhereUniqueInput[]
    update?: ServiceRequestImageUpdateWithWhereUniqueWithoutServiceRequestInput | ServiceRequestImageUpdateWithWhereUniqueWithoutServiceRequestInput[]
    updateMany?: ServiceRequestImageUpdateManyWithWhereWithoutServiceRequestInput | ServiceRequestImageUpdateManyWithWhereWithoutServiceRequestInput[]
    deleteMany?: ServiceRequestImageScalarWhereInput | ServiceRequestImageScalarWhereInput[]
  }

  export type ServiceRequestCreateNestedOneWithoutImagesInput = {
    create?: XOR<ServiceRequestCreateWithoutImagesInput, ServiceRequestUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutImagesInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type ServiceRequestUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutImagesInput, ServiceRequestUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutImagesInput
    upsert?: ServiceRequestUpsertWithoutImagesInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutImagesInput, ServiceRequestUpdateWithoutImagesInput>, ServiceRequestUncheckedUpdateWithoutImagesInput>
  }

  export type ServiceRequestCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ServiceRequestCreateWithoutParticipantsInput, ServiceRequestUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutParticipantsInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type WorkerCreateNestedOneWithoutLobbyParticipationsInput = {
    create?: XOR<WorkerCreateWithoutLobbyParticipationsInput, WorkerUncheckedCreateWithoutLobbyParticipationsInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutLobbyParticipationsInput
    connect?: WorkerWhereUniqueInput
  }

  export type EnumInvitationSourceFieldUpdateOperationsInput = {
    set?: $Enums.InvitationSource
  }

  export type EnumParticipantStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantStatus
  }

  export type ServiceRequestUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutParticipantsInput, ServiceRequestUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutParticipantsInput
    upsert?: ServiceRequestUpsertWithoutParticipantsInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutParticipantsInput, ServiceRequestUpdateWithoutParticipantsInput>, ServiceRequestUncheckedUpdateWithoutParticipantsInput>
  }

  export type WorkerUpdateOneRequiredWithoutLobbyParticipationsNestedInput = {
    create?: XOR<WorkerCreateWithoutLobbyParticipationsInput, WorkerUncheckedCreateWithoutLobbyParticipationsInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutLobbyParticipationsInput
    upsert?: WorkerUpsertWithoutLobbyParticipationsInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutLobbyParticipationsInput, WorkerUpdateWithoutLobbyParticipationsInput>, WorkerUncheckedUpdateWithoutLobbyParticipationsInput>
  }

  export type UsersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    upsert?: UsersUpsertWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotificationsInput, UsersUpdateWithoutNotificationsInput>, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type Enumtransactions_typeFieldUpdateOperationsInput = {
    set?: $Enums.transactions_type
  }

  export type NullableEnumtransactions_statusFieldUpdateOperationsInput = {
    set?: $Enums.transactions_status | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[]
    notIn?: $Enums.Urgency[]
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[]
    notIn?: $Enums.Urgency[]
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumInvitationSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationSource | EnumInvitationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationSource[]
    notIn?: $Enums.InvitationSource[]
    not?: NestedEnumInvitationSourceFilter<$PrismaModel> | $Enums.InvitationSource
  }

  export type NestedEnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[]
    notIn?: $Enums.ParticipantStatus[]
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type NestedEnumInvitationSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationSource | EnumInvitationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationSource[]
    notIn?: $Enums.InvitationSource[]
    not?: NestedEnumInvitationSourceWithAggregatesFilter<$PrismaModel> | $Enums.InvitationSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationSourceFilter<$PrismaModel>
    _max?: NestedEnumInvitationSourceFilter<$PrismaModel>
  }

  export type NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[]
    notIn?: $Enums.ParticipantStatus[]
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumtransactions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeFilter<$PrismaModel> | $Enums.transactions_type
  }

  export type NestedEnumtransactions_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_status | Enumtransactions_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.transactions_status[] | null
    notIn?: $Enums.transactions_status[] | null
    not?: NestedEnumtransactions_statusNullableFilter<$PrismaModel> | $Enums.transactions_status | null
  }

  export type NestedEnumtransactions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeWithAggregatesFilter<$PrismaModel> | $Enums.transactions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransactions_typeFilter<$PrismaModel>
    _max?: NestedEnumtransactions_typeFilter<$PrismaModel>
  }

  export type NestedEnumtransactions_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_status | Enumtransactions_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.transactions_status[] | null
    notIn?: $Enums.transactions_status[] | null
    not?: NestedEnumtransactions_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.transactions_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtransactions_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumtransactions_statusNullableFilter<$PrismaModel>
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    messages: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    messages: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServiceRequestCreateWithoutClientInput = {
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
    participants?: LobbyParticipantCreateNestedManyWithoutServiceRequestInput
    images?: ServiceRequestImageCreateNestedManyWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutClientInput = {
    id?: number
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
    participants?: LobbyParticipantUncheckedCreateNestedManyWithoutServiceRequestInput
    images?: ServiceRequestImageUncheckedCreateNestedManyWithoutServiceRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutClientInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutClientInput, ServiceRequestUncheckedCreateWithoutClientInput>
  }

  export type ServiceRequestCreateManyClientInputEnvelope = {
    data: ServiceRequestCreateManyClientInput | ServiceRequestCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type WorkerCreateWithoutUserInput = {
    availability: JsonNullValueInput | InputJsonValue
    rating: number
    completedJobs: number
    genre: string
    bio?: string | null
    picture?: string | null
    nationalIDPicture?: string | null
    businessDocumentPDF?: string | null
    verified?: boolean
    createdAt?: Date | string
    lobbyParticipations?: LobbyParticipantCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutUserInput = {
    id?: number
    availability: JsonNullValueInput | InputJsonValue
    rating: number
    completedJobs: number
    genre: string
    bio?: string | null
    picture?: string | null
    nationalIDPicture?: string | null
    businessDocumentPDF?: string | null
    verified?: boolean
    createdAt?: Date | string
    lobbyParticipations?: LobbyParticipantUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerCreateOrConnectWithoutUserInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutUserInput, WorkerUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    messages?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type ServiceRequestUpsertWithWhereUniqueWithoutClientInput = {
    where: ServiceRequestWhereUniqueInput
    update: XOR<ServiceRequestUpdateWithoutClientInput, ServiceRequestUncheckedUpdateWithoutClientInput>
    create: XOR<ServiceRequestCreateWithoutClientInput, ServiceRequestUncheckedCreateWithoutClientInput>
  }

  export type ServiceRequestUpdateWithWhereUniqueWithoutClientInput = {
    where: ServiceRequestWhereUniqueInput
    data: XOR<ServiceRequestUpdateWithoutClientInput, ServiceRequestUncheckedUpdateWithoutClientInput>
  }

  export type ServiceRequestUpdateManyWithWhereWithoutClientInput = {
    where: ServiceRequestScalarWhereInput
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyWithoutClientInput>
  }

  export type ServiceRequestScalarWhereInput = {
    AND?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
    OR?: ServiceRequestScalarWhereInput[]
    NOT?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
    id?: IntFilter<"ServiceRequest"> | number
    clientId?: IntFilter<"ServiceRequest"> | number
    category?: StringFilter<"ServiceRequest"> | string
    description?: StringFilter<"ServiceRequest"> | string
    budget?: FloatFilter<"ServiceRequest"> | number
    urgency?: EnumUrgencyFilter<"ServiceRequest"> | $Enums.Urgency
    status?: EnumRequestStatusFilter<"ServiceRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"ServiceRequest"> | Date | string
    latitude?: FloatFilter<"ServiceRequest"> | number
    longitude?: FloatFilter<"ServiceRequest"> | number
  }

  export type WorkerUpsertWithoutUserInput = {
    update: XOR<WorkerUpdateWithoutUserInput, WorkerUncheckedUpdateWithoutUserInput>
    create: XOR<WorkerCreateWithoutUserInput, WorkerUncheckedCreateWithoutUserInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutUserInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutUserInput, WorkerUncheckedUpdateWithoutUserInput>
  }

  export type WorkerUpdateWithoutUserInput = {
    availability?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIDPicture?: NullableStringFieldUpdateOperationsInput | string | null
    businessDocumentPDF?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbyParticipations?: LobbyParticipantUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    availability?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIDPicture?: NullableStringFieldUpdateOperationsInput | string | null
    businessDocumentPDF?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbyParticipations?: LobbyParticipantUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type LobbyParticipantCreateWithoutWorkerInput = {
    source: $Enums.InvitationSource
    bid: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    clientCompleted?: boolean
    workerCompleted?: boolean
    serviceRequest: ServiceRequestCreateNestedOneWithoutParticipantsInput
  }

  export type LobbyParticipantUncheckedCreateWithoutWorkerInput = {
    serviceRequestId: number
    source: $Enums.InvitationSource
    bid: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    clientCompleted?: boolean
    workerCompleted?: boolean
  }

  export type LobbyParticipantCreateOrConnectWithoutWorkerInput = {
    where: LobbyParticipantWhereUniqueInput
    create: XOR<LobbyParticipantCreateWithoutWorkerInput, LobbyParticipantUncheckedCreateWithoutWorkerInput>
  }

  export type LobbyParticipantCreateManyWorkerInputEnvelope = {
    data: LobbyParticipantCreateManyWorkerInput | LobbyParticipantCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutWorkerInput = {
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at?: Date | string | null
    notifications?: NotificationCreateNestedManyWithoutUserInput
    serviceRequests?: ServiceRequestCreateNestedManyWithoutClientInput
  }

  export type UsersUncheckedCreateWithoutWorkerInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at?: Date | string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutClientInput
  }

  export type UsersCreateOrConnectWithoutWorkerInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutWorkerInput, UsersUncheckedCreateWithoutWorkerInput>
  }

  export type LobbyParticipantUpsertWithWhereUniqueWithoutWorkerInput = {
    where: LobbyParticipantWhereUniqueInput
    update: XOR<LobbyParticipantUpdateWithoutWorkerInput, LobbyParticipantUncheckedUpdateWithoutWorkerInput>
    create: XOR<LobbyParticipantCreateWithoutWorkerInput, LobbyParticipantUncheckedCreateWithoutWorkerInput>
  }

  export type LobbyParticipantUpdateWithWhereUniqueWithoutWorkerInput = {
    where: LobbyParticipantWhereUniqueInput
    data: XOR<LobbyParticipantUpdateWithoutWorkerInput, LobbyParticipantUncheckedUpdateWithoutWorkerInput>
  }

  export type LobbyParticipantUpdateManyWithWhereWithoutWorkerInput = {
    where: LobbyParticipantScalarWhereInput
    data: XOR<LobbyParticipantUpdateManyMutationInput, LobbyParticipantUncheckedUpdateManyWithoutWorkerInput>
  }

  export type LobbyParticipantScalarWhereInput = {
    AND?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
    OR?: LobbyParticipantScalarWhereInput[]
    NOT?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
    serviceRequestId?: IntFilter<"LobbyParticipant"> | number
    workerId?: IntFilter<"LobbyParticipant"> | number
    source?: EnumInvitationSourceFilter<"LobbyParticipant"> | $Enums.InvitationSource
    bid?: FloatFilter<"LobbyParticipant"> | number
    status?: EnumParticipantStatusFilter<"LobbyParticipant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeFilter<"LobbyParticipant"> | Date | string
    clientCompleted?: BoolFilter<"LobbyParticipant"> | boolean
    workerCompleted?: BoolFilter<"LobbyParticipant"> | boolean
  }

  export type UsersUpsertWithoutWorkerInput = {
    update: XOR<UsersUpdateWithoutWorkerInput, UsersUncheckedUpdateWithoutWorkerInput>
    create: XOR<UsersCreateWithoutWorkerInput, UsersUncheckedCreateWithoutWorkerInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutWorkerInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutWorkerInput, UsersUncheckedUpdateWithoutWorkerInput>
  }

  export type UsersUpdateWithoutWorkerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    serviceRequests?: ServiceRequestUpdateManyWithoutClientNestedInput
  }

  export type UsersUncheckedUpdateWithoutWorkerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutClientNestedInput
  }

  export type LobbyParticipantCreateWithoutServiceRequestInput = {
    source: $Enums.InvitationSource
    bid: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    clientCompleted?: boolean
    workerCompleted?: boolean
    worker: WorkerCreateNestedOneWithoutLobbyParticipationsInput
  }

  export type LobbyParticipantUncheckedCreateWithoutServiceRequestInput = {
    workerId: number
    source: $Enums.InvitationSource
    bid: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    clientCompleted?: boolean
    workerCompleted?: boolean
  }

  export type LobbyParticipantCreateOrConnectWithoutServiceRequestInput = {
    where: LobbyParticipantWhereUniqueInput
    create: XOR<LobbyParticipantCreateWithoutServiceRequestInput, LobbyParticipantUncheckedCreateWithoutServiceRequestInput>
  }

  export type LobbyParticipantCreateManyServiceRequestInputEnvelope = {
    data: LobbyParticipantCreateManyServiceRequestInput | LobbyParticipantCreateManyServiceRequestInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutServiceRequestsInput = {
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at?: Date | string | null
    notifications?: NotificationCreateNestedManyWithoutUserInput
    worker?: WorkerCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutServiceRequestsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at?: Date | string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    worker?: WorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutServiceRequestsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutServiceRequestsInput, UsersUncheckedCreateWithoutServiceRequestsInput>
  }

  export type ServiceRequestImageCreateWithoutServiceRequestInput = {
    url: string
  }

  export type ServiceRequestImageUncheckedCreateWithoutServiceRequestInput = {
    id?: number
    url: string
  }

  export type ServiceRequestImageCreateOrConnectWithoutServiceRequestInput = {
    where: ServiceRequestImageWhereUniqueInput
    create: XOR<ServiceRequestImageCreateWithoutServiceRequestInput, ServiceRequestImageUncheckedCreateWithoutServiceRequestInput>
  }

  export type ServiceRequestImageCreateManyServiceRequestInputEnvelope = {
    data: ServiceRequestImageCreateManyServiceRequestInput | ServiceRequestImageCreateManyServiceRequestInput[]
    skipDuplicates?: boolean
  }

  export type LobbyParticipantUpsertWithWhereUniqueWithoutServiceRequestInput = {
    where: LobbyParticipantWhereUniqueInput
    update: XOR<LobbyParticipantUpdateWithoutServiceRequestInput, LobbyParticipantUncheckedUpdateWithoutServiceRequestInput>
    create: XOR<LobbyParticipantCreateWithoutServiceRequestInput, LobbyParticipantUncheckedCreateWithoutServiceRequestInput>
  }

  export type LobbyParticipantUpdateWithWhereUniqueWithoutServiceRequestInput = {
    where: LobbyParticipantWhereUniqueInput
    data: XOR<LobbyParticipantUpdateWithoutServiceRequestInput, LobbyParticipantUncheckedUpdateWithoutServiceRequestInput>
  }

  export type LobbyParticipantUpdateManyWithWhereWithoutServiceRequestInput = {
    where: LobbyParticipantScalarWhereInput
    data: XOR<LobbyParticipantUpdateManyMutationInput, LobbyParticipantUncheckedUpdateManyWithoutServiceRequestInput>
  }

  export type UsersUpsertWithoutServiceRequestsInput = {
    update: XOR<UsersUpdateWithoutServiceRequestsInput, UsersUncheckedUpdateWithoutServiceRequestsInput>
    create: XOR<UsersCreateWithoutServiceRequestsInput, UsersUncheckedCreateWithoutServiceRequestsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutServiceRequestsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutServiceRequestsInput, UsersUncheckedUpdateWithoutServiceRequestsInput>
  }

  export type UsersUpdateWithoutServiceRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    worker?: WorkerUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutServiceRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    worker?: WorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ServiceRequestImageUpsertWithWhereUniqueWithoutServiceRequestInput = {
    where: ServiceRequestImageWhereUniqueInput
    update: XOR<ServiceRequestImageUpdateWithoutServiceRequestInput, ServiceRequestImageUncheckedUpdateWithoutServiceRequestInput>
    create: XOR<ServiceRequestImageCreateWithoutServiceRequestInput, ServiceRequestImageUncheckedCreateWithoutServiceRequestInput>
  }

  export type ServiceRequestImageUpdateWithWhereUniqueWithoutServiceRequestInput = {
    where: ServiceRequestImageWhereUniqueInput
    data: XOR<ServiceRequestImageUpdateWithoutServiceRequestInput, ServiceRequestImageUncheckedUpdateWithoutServiceRequestInput>
  }

  export type ServiceRequestImageUpdateManyWithWhereWithoutServiceRequestInput = {
    where: ServiceRequestImageScalarWhereInput
    data: XOR<ServiceRequestImageUpdateManyMutationInput, ServiceRequestImageUncheckedUpdateManyWithoutServiceRequestInput>
  }

  export type ServiceRequestImageScalarWhereInput = {
    AND?: ServiceRequestImageScalarWhereInput | ServiceRequestImageScalarWhereInput[]
    OR?: ServiceRequestImageScalarWhereInput[]
    NOT?: ServiceRequestImageScalarWhereInput | ServiceRequestImageScalarWhereInput[]
    id?: IntFilter<"ServiceRequestImage"> | number
    serviceRequestId?: IntFilter<"ServiceRequestImage"> | number
    url?: StringFilter<"ServiceRequestImage"> | string
  }

  export type ServiceRequestCreateWithoutImagesInput = {
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
    participants?: LobbyParticipantCreateNestedManyWithoutServiceRequestInput
    client: UsersCreateNestedOneWithoutServiceRequestsInput
  }

  export type ServiceRequestUncheckedCreateWithoutImagesInput = {
    id?: number
    clientId: number
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
    participants?: LobbyParticipantUncheckedCreateNestedManyWithoutServiceRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutImagesInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutImagesInput, ServiceRequestUncheckedCreateWithoutImagesInput>
  }

  export type ServiceRequestUpsertWithoutImagesInput = {
    update: XOR<ServiceRequestUpdateWithoutImagesInput, ServiceRequestUncheckedUpdateWithoutImagesInput>
    create: XOR<ServiceRequestCreateWithoutImagesInput, ServiceRequestUncheckedCreateWithoutImagesInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutImagesInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutImagesInput, ServiceRequestUncheckedUpdateWithoutImagesInput>
  }

  export type ServiceRequestUpdateWithoutImagesInput = {
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    participants?: LobbyParticipantUpdateManyWithoutServiceRequestNestedInput
    client?: UsersUpdateOneRequiredWithoutServiceRequestsNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    participants?: LobbyParticipantUncheckedUpdateManyWithoutServiceRequestNestedInput
  }

  export type ServiceRequestCreateWithoutParticipantsInput = {
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
    client: UsersCreateNestedOneWithoutServiceRequestsInput
    images?: ServiceRequestImageCreateNestedManyWithoutServiceRequestInput
  }

  export type ServiceRequestUncheckedCreateWithoutParticipantsInput = {
    id?: number
    clientId: number
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
    images?: ServiceRequestImageUncheckedCreateNestedManyWithoutServiceRequestInput
  }

  export type ServiceRequestCreateOrConnectWithoutParticipantsInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutParticipantsInput, ServiceRequestUncheckedCreateWithoutParticipantsInput>
  }

  export type WorkerCreateWithoutLobbyParticipationsInput = {
    availability: JsonNullValueInput | InputJsonValue
    rating: number
    completedJobs: number
    genre: string
    bio?: string | null
    picture?: string | null
    nationalIDPicture?: string | null
    businessDocumentPDF?: string | null
    verified?: boolean
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutWorkerInput
  }

  export type WorkerUncheckedCreateWithoutLobbyParticipationsInput = {
    id?: number
    userId: number
    availability: JsonNullValueInput | InputJsonValue
    rating: number
    completedJobs: number
    genre: string
    bio?: string | null
    picture?: string | null
    nationalIDPicture?: string | null
    businessDocumentPDF?: string | null
    verified?: boolean
    createdAt?: Date | string
  }

  export type WorkerCreateOrConnectWithoutLobbyParticipationsInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutLobbyParticipationsInput, WorkerUncheckedCreateWithoutLobbyParticipationsInput>
  }

  export type ServiceRequestUpsertWithoutParticipantsInput = {
    update: XOR<ServiceRequestUpdateWithoutParticipantsInput, ServiceRequestUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ServiceRequestCreateWithoutParticipantsInput, ServiceRequestUncheckedCreateWithoutParticipantsInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutParticipantsInput, ServiceRequestUncheckedUpdateWithoutParticipantsInput>
  }

  export type ServiceRequestUpdateWithoutParticipantsInput = {
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    client?: UsersUpdateOneRequiredWithoutServiceRequestsNestedInput
    images?: ServiceRequestImageUpdateManyWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    images?: ServiceRequestImageUncheckedUpdateManyWithoutServiceRequestNestedInput
  }

  export type WorkerUpsertWithoutLobbyParticipationsInput = {
    update: XOR<WorkerUpdateWithoutLobbyParticipationsInput, WorkerUncheckedUpdateWithoutLobbyParticipationsInput>
    create: XOR<WorkerCreateWithoutLobbyParticipationsInput, WorkerUncheckedCreateWithoutLobbyParticipationsInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutLobbyParticipationsInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutLobbyParticipationsInput, WorkerUncheckedUpdateWithoutLobbyParticipationsInput>
  }

  export type WorkerUpdateWithoutLobbyParticipationsInput = {
    availability?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIDPicture?: NullableStringFieldUpdateOperationsInput | string | null
    businessDocumentPDF?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateWithoutLobbyParticipationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    availability?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIDPicture?: NullableStringFieldUpdateOperationsInput | string | null
    businessDocumentPDF?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutNotificationsInput = {
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at?: Date | string | null
    serviceRequests?: ServiceRequestCreateNestedManyWithoutClientInput
    worker?: WorkerCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: string
    phone: string
    wilaya: string
    baladia: string
    created_at?: Date | string | null
    serviceRequests?: ServiceRequestUncheckedCreateNestedManyWithoutClientInput
    worker?: WorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
  }

  export type UsersUpsertWithoutNotificationsInput = {
    update: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsersUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceRequests?: ServiceRequestUpdateManyWithoutClientNestedInput
    worker?: WorkerUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    wilaya?: StringFieldUpdateOperationsInput | string
    baladia?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceRequests?: ServiceRequestUncheckedUpdateManyWithoutClientNestedInput
    worker?: WorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    messages: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type ServiceRequestCreateManyClientInput = {
    id?: number
    category: string
    description: string
    budget: number
    urgency: $Enums.Urgency
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    latitude: number
    longitude: number
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    messages?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRequestUpdateWithoutClientInput = {
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    participants?: LobbyParticipantUpdateManyWithoutServiceRequestNestedInput
    images?: ServiceRequestImageUpdateManyWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    participants?: LobbyParticipantUncheckedUpdateManyWithoutServiceRequestNestedInput
    images?: ServiceRequestImageUncheckedUpdateManyWithoutServiceRequestNestedInput
  }

  export type ServiceRequestUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type LobbyParticipantCreateManyWorkerInput = {
    serviceRequestId: number
    source: $Enums.InvitationSource
    bid: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    clientCompleted?: boolean
    workerCompleted?: boolean
  }

  export type LobbyParticipantUpdateWithoutWorkerInput = {
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
    serviceRequest?: ServiceRequestUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type LobbyParticipantUncheckedUpdateWithoutWorkerInput = {
    serviceRequestId?: IntFieldUpdateOperationsInput | number
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LobbyParticipantUncheckedUpdateManyWithoutWorkerInput = {
    serviceRequestId?: IntFieldUpdateOperationsInput | number
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LobbyParticipantCreateManyServiceRequestInput = {
    workerId: number
    source: $Enums.InvitationSource
    bid: number
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    clientCompleted?: boolean
    workerCompleted?: boolean
  }

  export type ServiceRequestImageCreateManyServiceRequestInput = {
    id?: number
    url: string
  }

  export type LobbyParticipantUpdateWithoutServiceRequestInput = {
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
    worker?: WorkerUpdateOneRequiredWithoutLobbyParticipationsNestedInput
  }

  export type LobbyParticipantUncheckedUpdateWithoutServiceRequestInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LobbyParticipantUncheckedUpdateManyWithoutServiceRequestInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    source?: EnumInvitationSourceFieldUpdateOperationsInput | $Enums.InvitationSource
    bid?: FloatFieldUpdateOperationsInput | number
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCompleted?: BoolFieldUpdateOperationsInput | boolean
    workerCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceRequestImageUpdateWithoutServiceRequestInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceRequestImageUncheckedUpdateWithoutServiceRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceRequestImageUncheckedUpdateManyWithoutServiceRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}