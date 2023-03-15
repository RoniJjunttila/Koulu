print "Valitse x-akselin arvo väliltä 0-9: "
x = gets.to_i
print "Valitse y-akselin arvo väliltä 0-9: "
y = gets.to_i

if x < 0 || y < 0
    puts("Annoit negatiivisen arvon.")
elsif x < 5 && y < 5
    puts("Olet vasemmassa alakulmassa.")
elsif x < 5 && x >= y
    puts("Olet vasemmassa yläkulmassa.")
elsif(x >= 5 && y < 5)
    puts("Olet oikeassa alakulmassa")
elsif(x > 4 && y > 4)
    puts "Olet oikeassa yläkulmassa."
end