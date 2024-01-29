fun main() {
    val prodPrices = intArrayOf(10, 14, 22, 33, 44, 13, 22, 55, 66, 77)
    var prodNbr: Int
    var totalSum = 0

    println("Supermarket")
    println("===========")

    do {
        print("Please select product (1-10) 0 to Quit: ")
        prodNbr = readLine()!!.toInt()

        if (prodNbr in 1..10) {
            println("Product: $prodNbr Price: ${prodPrices[prodNbr - 1]}")
            totalSum += prodPrices[prodNbr - 1]
        } else if (prodNbr != 0) {
            println("Please select correct product (1-10)")
        }

    } while (prodNbr != 0)

    println("Total: $totalSum")

    print("Payment: ")
    val payment = readLine()!!.toInt()

    val change = payment - totalSum
    println("Change: $change")
}
