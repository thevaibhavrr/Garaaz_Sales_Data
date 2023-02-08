import { SaleService } from "./sale.service";
export declare class SaleController {
    private readonly saleservice;
    constructor(saleservice: SaleService);
    create(creatSaleDto: any): Promise<import("../Schema/Sale.schema").Sale & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("../Schema/Sale.schema").Sale & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    totalSordervalue(): Promise<number>;
    totalorder(): Promise<number>;
}
