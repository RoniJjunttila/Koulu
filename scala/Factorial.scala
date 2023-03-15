import scala.io.StdIn.readInt

object Factorial extends App {
  println("Type the integer: ")
  val input = readInt()
  var total: Int = 1
  for (i <- 1 to input) {
    total = total * i
  }
  println(s"The factorial of $input is $total")
}
