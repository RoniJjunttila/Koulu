object Company extends App {
  val employee = new Employee(name = "Lisa Smith")
  val manager = new Manager(name2 = "Mary Popping", managerId = 12345)
  employee.paySalary(2000)
  manager.payBonus(500)
  println(employee.toString)


  println(manager.toString)
}

class Employee(val name: String) {
  def paySalary(amount: Int): Unit = {
    println(s"Salary paid: $amount")
  }

  override def toString: String = {
    s"Hello $name"
  }
}

class Manager(name2: String, managerId: Int) extends Employee(name2) {
  def payBonus(amount: Int): Unit = {
    println(s"Bonus paid $amount")
    println(s"Manager $managerId")
  }
}