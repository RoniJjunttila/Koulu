fun main(args: Array<String>) {
    val names = mutableListOf("Jim", "Mary", "Matt", "Pricilla", "Mike", "Kelly")
    print(counter(names))
}

fun counter(names: MutableList<String>):Int{
    return names.count{name -> name.startsWith("M")}
}
