import java.util.Scanner;

public class Objects01 {
    public static void main(String args[]) {
        String characterString;
        Scanner reader =  new Scanner(System.in);
        PrintingClass printer = new PrintingClass();

        System.out.print("Type in the character string for printing: ");
        characterString = reader.nextLine();
        printer.Print(characterString);
    }
}

class PrintingClass {
    public void Print(String characterString) {
         System.out.println(characterString + " is here");
    }
}