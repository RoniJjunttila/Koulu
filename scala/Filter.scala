object Filter extends App{
  var number = Array(1, 4, 6, 13, 16, 17, 22, 31, 33, 37)
  val evens = number.filter(_ % 2 == 0).length
  println(s"The number of evens is $evens")
  println(s"The number of odds is ${number.length - evens}")
}
