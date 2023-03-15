import java.util.Scanner;

public class Objects07 {
        public static void main(String args[]) {

            System.out.print("How many objects do you want to create:");
                    Scanner reader = new Scanner(System.in);
            int amount = reader.nextInt();

            Thing[] things = new Thing[amount];

            for(int i = 0; i<amount; i++) {
                things[i] = new Thing();
            }

            Thing.numberOfObjects();
        }
}

class Thing{
    static int number = 0;

    public Thing(){
        number ++;
    }

    public static void numberOfObjects() {
        System.out.println(number + " objects were created.");
    }
}

