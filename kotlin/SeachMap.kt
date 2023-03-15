fun main(args: Array<String>) {
    val languages = mapOf(1 to "Kotlin", 2 to "Java", 3 to "C#", 4 to "Javascript")
    print("Enter a programming language:\n")
    var input = readLine()
    if(input == languages.get(1) ||input == languages.get(2) ||input == languages.get(3) ||input == languages.get(4)){print("Value found")}
    else {print("Value not found")}
}