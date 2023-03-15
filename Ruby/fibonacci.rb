print "Montako kierrosta lasketaan?: "
    val = gets.to_i
    num = 0
    newNum = 1
    for i in 1..val 
        puts num
        temp = num
        num = newNum
        newNum = temp + newNum
        puts "Seuraava Fibonaccin luku on " + newNum.to_s + "."
end