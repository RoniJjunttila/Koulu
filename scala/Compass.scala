import scala.io.StdIn.readLine

object Compass extends App {
  println("Where are you going (N/W/S/E)?")
  val input = readLine()
  val values = Map("N" -> "North", "S" -> "South", "W" -> "West", "E" -> "East")
  println("You are going to " + values(input))
} 
