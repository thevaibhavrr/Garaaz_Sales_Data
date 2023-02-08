import { Model } from "mongoose";
import { UserDocument } from "src/Schema/Sale.schema";
export declare class SaleService {
    private readonly SaleModel;
    constructor(SaleModel: Model<UserDocument>);
    create(creatSaleDto: any): Promise<import("src/Schema/Sale.schema").Sale & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("src/Schema/Sale.schema").Sale & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    totalordervalue(): Promise<number>;
    totalorder(): Promise<number>;
}
