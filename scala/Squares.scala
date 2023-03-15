object Squares extends App {
  val numbers = Array(2, 6, 1, 4, 3, 7)
  var sum = 0
  var squares = numbers.map(x => x * x)
  sum = squares.sum
  println(s"The sum of squares is $sum")
}
