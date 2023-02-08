import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { SaleService } from "./sale.service";

@Controller("/api/v1/brand_sales_daily")
export class SaleController {
  constructor(private readonly saleservice: SaleService) {}
  @Post()
  create(@Body() creatSaleDto) {
    return this.saleservice.create(creatSaleDto);
  }

  @Get()
  findAll() {
    return this.saleservice.findAll();
  }
  @Get("/totalordervalue")
  totalSordervalue() {
    return this.saleservice.totalordervalue();
  }
  @Get("/totalorder")
  totalorder() {
    return this.saleservice.totalorder();
  }
}
