interface User {
    name: string;
    age: number;
    id: number;
}
declare class UserStore {
    private store;
    addUser(user: User): void;
    getUser(id: number): User;
}
