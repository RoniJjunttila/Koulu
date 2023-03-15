fun main(args: Array<String>) {
    val words = mutableListOf("Kotlin", "Programming", "String", "List")
    print("[")
    for (i in 0 until listToArray(words).size) {
        print(listToArray(words)[i])
        if(i != listToArray(words).size - 1) {print(", ")}
    }
    print("]\n")
}

fun listToArray (words: MutableList<String>): Array<String> {
    return words.filter { word -> word.length < 7 }.toTypedArray()
}
