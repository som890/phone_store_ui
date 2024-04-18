import { FileHandle } from "./file-handle.model";

export interface Phone {
    phoneId?: number,
    phoneName: string, 
    phoneDescription: string,
    phoneDiscountedPrice: number,
    phoneActualPrice: number,
    phoneImageSet: FileHandle[]

}