fun main(args: Array<String>) {
    var shp = Shape()
    shp.print()
}

class Shape(){
    var xPos: Int = 0
    var yPos: Int = 0

    fun print() {
        print("Position: x=$xPos,y=$yPos")
    }
}