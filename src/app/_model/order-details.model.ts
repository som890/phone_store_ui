import { OrderQuantity } from "./order-quantity.model";

export interface OrderDetails {
    orderFullName: string,
    orderFullAddress: string,
    orderContactNumber: string,
    orderAlternateNumber: string,
    orderQuantityList: OrderQuantity[]
}