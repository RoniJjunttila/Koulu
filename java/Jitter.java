import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Point;
import java.awt.PointerInfo;
import java.awt.MouseInfo;

public class Jitter {
    public static void main(String[] args) throws AWTException {
        Robot robot = new Robot();
        PointerInfo pointerInfo = MouseInfo.getPointerInfo();
        Point point = pointerInfo.getLocation();
        int x = 0;
        int y = 0;
        long startTime = System.currentTimeMillis();
        int z = 0;

        while (System.currentTimeMillis() - startTime < 5000) {
            if (x == -1070) {
                if (z == 0) {
                    x = -1073;
                } else {
                    x = -1072;
                }
                z = (z + 1) % 2;
            } else {
                x = -1070;
            }
            robot.mouseMove(x, y);
            try {
                Thread.sleep(15);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

}