def muuntaja(syote)
    # a -> y 
    # l -> g 
    syote = syote.gsub("a", "y")
    syote = syote.gsub("l", "g")
    syote = syote.upcase
    puts "Käsittelyn jälkeen tulos on: " + syote
end

puts "Kirjoita jotain: "
syote = gets.chomp!
muuntaja(syote)

