import java.util.Scanner
// My main function
fun main(agrs: Array<String>) {
    val firstName = "John"
    val lastName = "Johnson"
    printGreeting(firstName)
    printGreeting(firstName, lastName)
}

fun printGreeting(firstName: String) {
    return print("Hello $firstName\n")
}

fun printGreeting(firstName: String, lastName: String) {
    return print("Hello $firstName $lastName\n")
}