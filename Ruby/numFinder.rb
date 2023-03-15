puts "Anna aloituspaikka:"
val = gets.to_i
while(true)
    if val % 3 == 0 && val % 5 == 0 && val % 7 == 0
        puts "Sopiva luku löytyi: " + val.to_s
        break
    else 
        puts val.to_s + " ei kelpaa..."
        val += 1
    end
end
