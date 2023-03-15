/* import java.util.*;

public class RevisionExercise {
    public static void main(String[] args) {

        int[] tempArray = new int[100];
        System.out.println("Type in numbers. Type zero to quit.");
        int amountOfNumbers = askInfo(tempArray);

        int[] realArray = new int[amountOfNumbers];
        copyInfo(realArray, tempArray);

        setArray(realArray);

        printArray(realArray);
    }


    public static void askInfo(int tempArray) {
        if(tempArray < 0 && tempArray > 100) {

        } else {
            System.out.println("Number is too low or high");
        }
    }

    public static void copyInfo() {
    }

    public static void setArray() {

    }

    public static void printArray(int[] realArray ) {
        System.out.println("\Ordered array: ");
        for(int i = 0; i < realArray .length; i++) {
            System.out.println(realArray [i]);
        }
    }

    */