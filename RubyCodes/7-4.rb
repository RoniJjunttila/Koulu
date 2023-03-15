module MuuntajaModuuli
    def muunna(word)
        word = word.gsub("i","*")
        word = word.gsub("h","-")
        word = word.gsub("s","_")
        puts word
     end

    def parillinen?(val)
        if (val % 2) == 0
            return true
        else
            return false
        end
    end
end