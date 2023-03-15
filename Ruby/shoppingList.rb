array = []
while true 
    puts "Ostoslistalla on seuraavaa;"
    if array.length == 0
        puts "\n"
    else
        puts array.to_s.gsub(/[\[\]",]/,'') + " \n"
    end
    puts "(1) Lisää tuote (2) Poista listan viimeinen tuote (3) Lopeta:"
    val = gets.to_i
    case val 
    when 1 then puts "Mitä lisätään?: "
        input = gets
        array << input.chomp! 
    when 2
        puts "Poistetaan " + array[0]
        array.delete_at(0)
    else 
        puts "Koriin jäi " + array.length.to_s + " tuotetta:"
		if array.length != 0
			puts array.to_s.gsub(/[\[\]",]/,'') + "\n"  # gsub(/[\[\]",]/,'')
		end
        break
    end
end