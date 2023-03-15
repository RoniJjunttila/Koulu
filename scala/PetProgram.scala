object PetProgram extends App {
  val call = new Cat("Garfield")
  call.sayHello()
  call.eat()
  call.sleep()
}

trait Pet {
  def sleep(): Unit = {
    println("I am sleeping")
  }

  def eat(): Unit = {
    println("I am not hungry anymore")
  }
}

class Cat(val name: String) extends Pet {
  def sayHello(): Unit = {
    println(s"Hello, my name is $name")
  }
}
