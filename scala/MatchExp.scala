object MatchExp extends App{
  def direction(i: Int): String = i match {
      case 0 => "North"
      case 1 => "West"
      case 2 => "South"
      case 3 => "East"
      case _ => "Invalid direction"
  }
  println(direction(2))
  println(direction(0))
  println(direction(7))
}
