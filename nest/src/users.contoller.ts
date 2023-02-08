import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

let USER = [];

@Controller('/users')
export class UsersController {
  @Post()
  addUser(@Body() creatUserDto: any) {
    USER.push(creatUserDto);
    return 'User Added';
  }
  @Get()
  GetUsers() {
    return USER;
  }
  @Get(':id')
  async getUser(@Param('id') id: number) {
    const usern = await USER.find((user) => +user.id === +id);
    console.log(id, usern);
    return usern;
  }
  @Put('id')
  UpdateUser(@Param('id') id: number, @Body() updatadata: any) {
    const user = USER.findIndex((user) => user.id == +id);
    if (!user) {
      return;
    }
    USER[user] = updatadata;
  }

  @Delete('id')
  DeleteUser(@Param('id') id: number) {
    USER = USER.filter((user) => user.id == +id);
    return USER;
  }
}
