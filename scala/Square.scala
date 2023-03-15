import scala.io.StdIn.readInt

object Square extends App{
  println("Type an integer")
  val input = readInt()
  val square = (x: Int) => x * x
  println(s"Square = ${square(input)}")
}
