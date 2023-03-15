fun main(agrs: Array<String>) {
    print("Type the first integer:\n")
    var first = readLine()!!.toInt()
    print("Type the second integer:\n")
    var second = readLine()!!.toInt()
    print("Type the third integer:\n")
    var third = readLine()!!.toInt()

    print("The largest one is: " + findMax(first, second, third))
}

fun findMax(first: Int, second: Int, third: Int): Int{
    if(first > second && first > third) {
        return first
    } else if (second > first && second > third) {
        return second
    } else {
        return third
    }
}