"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleSchema = exports.Sale = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Sale = class Sale {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now() }),
    __metadata("design:type", Date)
], Sale.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Sale.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ["Trading", "Facilitation"] }),
    __metadata("design:type", String)
], Sale.prototype, "transactionType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: "Trading" }),
    __metadata("design:type", Number)
], Sale.prototype, "totalOrders", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Sale.prototype, "totalOrderValue", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Sale.prototype, "grossMarginPercentage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now() }),
    __metadata("design:type", Date)
], Sale.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now() }),
    __metadata("design:type", Date)
], Sale.prototype, "updatedAt", void 0);
Sale = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: "SaleData" })
], Sale);
exports.Sale = Sale;
const schema = mongoose_1.SchemaFactory.createForClass(Sale);
exports.SaleSchema = schema;
//# sourceMappingURL=Sale.schema.js.map