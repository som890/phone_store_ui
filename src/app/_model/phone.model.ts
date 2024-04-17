import { FileHandle } from "./file-handle.model";

export interface Phone {
    phoneName: string, 
    phoneDescription: string,
    phoneDiscountedPrice: number,
    phoneActualPrice: number,
    phoneImages: FileHandle[]

}