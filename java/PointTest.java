/* import java.util.Scanner;
 
public class PointTest {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.println("Type in the first values of the coordinates:");
        System.out.print("x: ");
        int x = reader.nextInt();
        System.out.print("y: ");
        int y = reader.nextInt();

        Point point = new Point(x, y);

        System.out.println("Point is now at : " + point);
        System.out.println("Type in the change of x and y coordinates");
        System.out.print("x: ");
        x = reader.nextInt();
        System.out.print("y: ");
        y = reader.nextInt();

        point.move(x, y);
        System.out.println("Point is now at: " + point);
    }
}

class Point {
    private int x;
    private int y;

    public Point(int x, int y) {
        if(x > 100) {
            this.x = 100;
        } else if (x < 0) {
            this.x = 0;
        } else {
            this.x = x;
        }

        if(y > 100) {
            this.y = 100;
        } else if (y < 0) {
            this.y = 0;
        } else {
            this.y = y;
        }

    }

    public String toString() {
        return "(" + Integer.toString(x) + "," + Integer.toString(y) + ")";
    }
    public String move(int x, int y) {
        return "(" + Integer.toString(x) + "," + Integer.toString(y) + ")";
    }
}

 */