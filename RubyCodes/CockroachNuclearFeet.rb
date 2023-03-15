pelaaja = 0
tietokone = 0

array = ["", "torakan", "jalan", "ydinpommin"]
while true
  puts "1: Torakka 2: Jalka 3: Ydinpommi 4: lopeta"
  puts "Valitse (1-4):"
  val = gets.to_i
  if val == 4
    break
  end
  rnd = rand(3) + 1
  #pelaaja voitto ehdot
  if (val == 1 && rnd == 3) || (val == 2 && rnd == 1) || (val == 3 && rnd == 2) #Torakka - Ydinpommi
    puts "Valitsit " + array[val] + ", tietokone valitsi " + array[rnd] + "."
    puts "Voitit!"
    pelaaja += 1
  elsif (val == 1 && rnd == 1) || (val == 2 && rnd == 2) || (val == 3 && rnd == 3)
    puts "Valitsitte saman, tasapeli." 
 else
    puts "Valitsit " + array[val] + ", tietokone valitsi " + array[rnd] + "."
    puts "Tietokone voitti."
    tietokone += 1
  end
  puts "Peli on pelaaja " + pelaaja.to_s + " : tietokone " + tietokone.to_s
end