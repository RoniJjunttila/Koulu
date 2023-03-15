class Dog {
    int age;
    String name, race, sound;

    public Dog(int DogAge, String DogName, String DogRace, String DogSound) {
        age = DogAge;
        name = DogName;
        race = DogRace;
        sound = DogSound;
    }
    public void printInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Race: " + race);
    }
    public String makeSound() {
       return sound;
    }
}

public class Objects05 {
    public static void main(String[] args) {
        Dog rover = new Dog (2, "Rover", "Dalmatian", "Woof!!!");
        Dog rex = new Dog (4, "Rex", "Australian terrier", "woofwoof");

        System.out.println("Dog info:");
        rover.printInfo();
        System.out.println("Dog says: " + rover.makeSound());
        System.out.println();
        rex.printInfo();
        System.out.println("Dog says: " + rex.makeSound());
    }
}

