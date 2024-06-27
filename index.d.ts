// index.d.ts
declare module 'countries-list-json' {
    export interface Country {
        name: string
        code: string
        dial_code: string
        flag: string
    }

    export const countries: Country[];
}
