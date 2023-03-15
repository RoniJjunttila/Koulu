puts "Anna nimi: "
name = gets.chomp!

if name != "Erkki" 
    puts "En tunne sinua."
    exit
end

puts "Anna salasana: "
passwd = gets.chomp!

if passwd != "haukionkala"
    puts "Et ole Erkki."
else 
    puts "Hei Erkki!"
end