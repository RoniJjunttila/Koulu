fun main(args: Array<String>) {
    var shp = Circle()
    shp.radius = 5.5
    print("The area = " + shp.getArea())
}

class Circle() {
    var radius: Double = 0.0

    fun getArea():Double {
        return radius * radius * 3.14159
    }
}