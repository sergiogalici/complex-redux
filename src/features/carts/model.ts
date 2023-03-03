import { ProductType } from "../products/model"
import { UserType } from "../users/model"

export type CartsState = {
    carts: CartType[]
}

export type CartType = {
    products: ProductType[],
    owner: UserType
}