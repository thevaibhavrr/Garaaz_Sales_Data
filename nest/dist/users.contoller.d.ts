export declare class UsersController {
    addUser(creatUserDto: any): string;
    GetUsers(): any[];
    getUser(id: number): Promise<any>;
    UpdateUser(id: number, updatadata: any): void;
    DeleteUser(id: number): any[];
}
