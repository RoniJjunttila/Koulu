import scala.io.StdIn.readInt

object Greatest extends App {
  println("Enter integer 1")
  var first = readInt()
  println("Enter integer 2")
  var second = readInt()
  println("Enter integer 3")
  var third = readInt()

  if(first > second && first > third) {
    println(s"Greatest = $first")
  }
  else if(second > first && second > third) {
    println(s"Greatest = $second")
  }
  else {
    println(s"Greatest = $third")
  }
}
