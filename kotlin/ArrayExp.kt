import java.lang.Exception

fun main(args: Array<String>) {
    var array = arrayOf(1,2,3,4)
    try{
        print(array[7])
    }
    catch(e: Exception) {
        print("Element not found. Index out of bounds")
    }
}