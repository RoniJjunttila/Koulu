def test(word)
    rev = word.reverse
    if(word.length < 5)
       puts word + " ei ole kelvollinen sana."
    else
        if(word.downcase.gsub(" ", "") == rev.downcase.gsub(" ", "")) 
            puts word + " on palindromi."
        else
            puts word + " ei ole palindromi; se on väärinpäin " + rev + "."
        end
    end
end

while(true)
    print "Kirjoita testattava lause: "
    input = gets.chomp!
    test(input)

    print "Testataanko lisää? (k/e): "
    val = gets.chomp!
    if(val != "k") then break end
end