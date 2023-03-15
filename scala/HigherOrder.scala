object Message extends App {
  def msgFunc(f: String => String, s: String): String = f(s) + "Lisa"

  def goodbyeMsg(y: String): String = s"Hello $y"

  def helloMsg(z: String): String = s"Goodnight $z"

  println(msgFunc(helloMsg, ""))
  println(msgFunc(goodbyeMsg, ""))
}