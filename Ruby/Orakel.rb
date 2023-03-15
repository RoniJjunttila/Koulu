puts "Oraakkeli vastaa kyllä/ei-muodossa"
puts "Kirjoita kysymyksesi Oraakkelille:"
input = gets
puts "Kysymyksesi oli: " + input
puts "Tähän Oraakkeli vastasi:"
val = rand(100)
case val
when 0..19 then print "Ei missään nimessä!"
when 20..44 then print "Ei varmaankaan"
when 45..54 then print "En osaa sanoa."
when 55..79 then print "Luultavasti kyllä."
when 80..99 then print "Ehdottomasti kyllä."
end