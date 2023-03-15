object Sorting extends App {
  val names = List("Elisabeth", "Mike", "Lisa", "Annie", "John", "Layla")
  val sort = names.sortBy(name => name.charAt(1))
  print(sort)
}
