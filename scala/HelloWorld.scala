object Initials extends App {
  val firstName: String = "John"
  val lastName: String = "Smith"
  def printInitials(firstName: String, lastName: String) = {
    println(s"${firstName.charAt(0)}.${lastName.charAt(0)}.")
  }
  printInitials(firstName, lastName)
}



// import scala.io.StdIn.readLine