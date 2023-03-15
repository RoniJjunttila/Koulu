object Filtering extends App {
  val arr = Array(2, 6, 1, 9, 3, 12, 21, 5, 16)

  val filtered = for {ar <- arr if ar > 6}
  yield arr

  println(filtered.mkString(", "))
}
