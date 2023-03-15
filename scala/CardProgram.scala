object CardProgram extends App {
  var arr = Array[String]()
  val program01 = new Card("Heart", 5)
  arr = arr :+ program01.toString
  val program02 = new Card("Clubs", 2)
  arr = arr :+ program02.toString
  val program03 = new Card("Spade", 9)
  arr = arr :+ program03.toString
  val program04 = new Card("Heart", 8)
  arr = arr :+ program04.toString
  val program05 = new Card("Spade", 3)
  arr = arr :+ program05.toString
  val program06 = new Card("Clubs", 4)
  arr = arr :+ program06.toString
  val filteredArr = arr.filter(x => x.takeRight(5) == "Heart")
  println(s"Card: " +  filteredArr(0))
  println(s"Card: " + filteredArr(1))
}

class Card(var suit: String, var num: Int) {
  override def toString: String = {
    s"$num $suit"
  }
}
