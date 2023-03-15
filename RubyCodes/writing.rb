tiedosto = File.open("5-1_tiedosto.txt", "w+")

while(true)
	puts "Kirjoita jotain (lopeta lopettaa):"
	input = gets.chomp!
	if(input != "lopeta")
		tiedosto.puts(input)
	else
        tiedosto.rewind
		puts "Tiedostoon kirjoitettiin: "
		tiedosto.each{|i| print i}
		tiedosto.close
		break
	end
end