object ShapeProgram extends App {

  sealed trait Shape

  case class Squares(height: Int, Width: Int) extends Shape
  case class Circle(radius: Int) extends Shape

  def shapeInfo(shape: Shape): Unit = {
    shape match {
      case Squares(height, width) => println("This is a square")
      case Circle(radius) => println("This is circle")
      case _ => println("Unknown shape")
    }
  }
  val shape01 = Squares(5, 2)
  val shape02 = Circle(10)
  shapeInfo(shape01)
  shapeInfo(shape02)
}
