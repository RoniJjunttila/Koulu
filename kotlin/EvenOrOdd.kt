import java.util.Scanner
// My main function
fun main(agrs: Array<String>) {
    val scanner = Scanner(System.`in`)
    print("Type an integer:\n")
    var input = scanner.nextInt()
    print(isEven(input))
}

fun isEven(input: Int): String {
    return if (input % 2 == 0)
        "Even\n"
    else
        "Odd\n"
}