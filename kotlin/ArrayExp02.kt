import java.lang.Exception

fun main(args: Array<String>) {
    var array = arrayOf(2,3,4)
    print("Type an index:\n")
    var input: Int
    try{
        input = readLine()!!.toInt()
        print(array[input])
        print("\n")
    }
    catch (e: NumberFormatException) {
        print("Type an integer\n")
    }
    catch(e: Exception) {
        print("Element not found. Index out of bounds\n")
    }
}