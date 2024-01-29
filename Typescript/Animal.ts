// classes.ts
class Animal {
    constructor(public name: string) {}
    makeSound(): void {
        console.log('Some generic sound');
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Woof! Woof!');
    }
}

const myDog: Dog = new Animal('Buddy');
myDog.makeSound();
