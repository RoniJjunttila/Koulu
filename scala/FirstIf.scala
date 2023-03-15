import scala.io.StdIn.readInt

object FirstIf extends App{
  println("What is your age?")
  val age = readInt()
  def checkAge(x: Int): Unit = {
    if (x > 18) {
      println("Welcome")
    } else {
      println("You are too young")
    }
  }
  checkAge(age)
}
