export interface Transaction {
    type: string,
    _id: string,
    amount: number,
    name: {
        first: string,
        last: string,
    },
    company: string,
    email: string,
    phone: string,
    address: string,
}