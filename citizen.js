class Citizen {
    constructor(firstName, lastName, age, registered) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.registered = registered;
    }
    register(adress) {
        this.adress = adress;
    };
};
export default Citizen;
