/*
 * @author Brandon Ramirez <brandon@brr.dev>
 * @copyright Copyright (c) 2024
 */

export type RequiredKeys<T, K extends keyof T> = Omit<T, K> &
    Required<Pick<T, K>>;
