import scala.io.StdIn.readLine

object FirstArray extends App {
  var names = new Array[String](0)
  for(i <- 1 to 3) {
      println("Enter name:")
      var name = readLine()
      names = names :+ name
  }
  names.sortInPlace()
  println("The first in alphabetical order is: " + names(0))

}
