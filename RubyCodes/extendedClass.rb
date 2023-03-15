class Laatikkko
    def sisus
        @sisus
    end

    def sisus=(val)
        @sisus = val
    end

    def lisää
        if sisus == ""
            sisus.lenght = 0
        end
    end

    def nollaa(val = "nil")
        @sisus = val
    end

    def suuri?
        if(@sisus.length > 25)
            return true
        else
            return false
        end
    end

end


Varasto = Laatikkko.new()
Varasto.sisus = "hirviömeikkilaukkutelinetukijalka"
tulos = Varasto.suuri?
puts "Kokotestin tulos oli: #{tulos}."
Varasto.nollaa
tulos = Varasto.suuri?
puts "Kokotestin tulos oli: #{tulos}."