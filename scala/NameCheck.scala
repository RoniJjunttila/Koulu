import scala.io.StdIn.readLine

object NameCheck extends App {
  println("Enter your firstname")
  val name = readLine()
  val p = "^[A-Z][a-z]+$".r

  if (p.matches(name)) {
    println("Hello " + name)
  } else {
    println("Name is invalid")
  }
}
