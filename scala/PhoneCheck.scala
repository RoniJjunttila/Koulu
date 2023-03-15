object PhoneCheck extends App {

  def checkNumber(number: String): Boolean = {
    val testNum = """^\+[\d]{3}-[\d]{2}-[\d]{5,7}$""".r
    testNum.findFirstIn(number).isDefined
  }


  println(checkNumber("+358-40-123324"))  // true
  println(checkNumber("-358-40-123324"))  // false
  println(checkNumber("+358-40-123789757"))  // false
  println(checkNumber("+358-40-12A3324"))  // false
}
