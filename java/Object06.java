/* import java.util.Scanner;
class Object06 {
    public static void main(String [] args) {
        int characters = args.length;

        if (characters < 3)
            System.out.println("You did not type in a calculation!");
        else if (characters % 2 == 0)
            System.out.println("Invalid number of command line parameters.");
        else {
            Calculator counter = new Calculator();
            counter.count(args);
        }
    }
}

class Calculator {
    public void count(String[] args) {
        for(int i = 0; i > args.length; i++) {
        String number = Integer.parseInt(args[i]);
        System.out.println("Result if the calculation " + number + " is ");
        }

    }
}

 */