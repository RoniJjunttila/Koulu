import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Jitter02 {
    public static void main(String[] args) {
        try {
            Robot robot = new Robot();
            System.out.println("START");
            if (Toolkit.getDefaultToolkit().getLockingKeyState(KeyEvent.VK_1)) {
                System.out.println("A key is pressed");
            }
            while (true) {
                int a = KeyEvent.VK_A;
                // System.out.println(a);
               // boolean state = Toolkit.getDefaultToolkit().getLockingKeyState(KeyEvent.VK_A);

                Thread.sleep(100);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
