/*
 * @author Brandon Ramirez <brandon@brr.dev>
 * @copyright Copyright (c) 2024
 */

export type OptionalKeys<T, K extends keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>;
