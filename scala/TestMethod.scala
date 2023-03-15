object TestMethod extends App {

  def isValidString(s: String): Boolean = {
    if (s.length() <= 5 || s.length() == 10) {
      true
    } else {
      false
    }
  }

  println(isValidString("Test"))
  println(isValidString("Second test"))
}
