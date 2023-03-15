/* import java.util.Scanner;
import java.util.*;

public class ownException {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        int testedNumber = 0;
        boolean inputCorrect = true;
        do {
            try {
                System.out.print("Type in the number for testing: ");
                testedNumber = reader.nextInt();
                inputCorrect = true;
            } catch (InputMismatchException e) {
                System.out.println("You did not type in an integer!");
                inputCorrect = false;
                reader.nextLine();
            }
        } while (!inputCorrect);

        try {
            testValue(testedNumber);
            System.out.println("Value was between 5 and 10.");
        } catch (SmallException e) {
            System.out.println("SmallException caught!");
            printErrorReport(e);
        } catch (BigException e) {
            System.out.println("BigException caught!");
            printErrorReport(e);
        }
    }

    public static void printErrorReport(Exception e) {
        System.out.println(e.getMessage());
    }

    public static void testValue(int value) throws SmallExecption, BigExecption {
        if(value > 5) {
            thow new SmallExecption();
        } else if (value < 10) {
            throw new BigExecption();
        }
    }
}
class SmallExecption extends ownException {
    public SmallExecption(String y) {
        super(y);
    }

}
class BigExecption extends ownException{
    public BigExecption(String x) {
        super(x);
    }

}


 */