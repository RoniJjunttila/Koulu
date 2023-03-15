import scala.util.matching.Regex

object ReplaceString extends App {

  val str = "Dolor aute irure dolor in reprehenderit in voluptate esse cillum dolor eu fugiat nulla pariatur."
  val p = new Regex("(?i)or")
  val s = "(?i)dolor".r
  val find = s.findAllIn(str).length

  println(s"There are $find + Dolor or dolor words")

}
