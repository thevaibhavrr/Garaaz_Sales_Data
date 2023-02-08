class UserStore {
    constructor() {
        this.store = new Map();
    }
    addUser(user) {
        this.store.set(user.id, user);
    }
    getUser(id) {
        return this.store.get(id);
    }
}
//# sourceMappingURL=users.store.js.map