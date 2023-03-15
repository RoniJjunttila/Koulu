class Sailio   
    def initialize
        @sisus = "tyhjää!"
    end
   
    def tutki
        puts "Säiliössä on #{@sisus}"
    end
 
    def laita(arvo)
        @sisus = arvo
    end
end

class Parempisailio < Sailio
    def initialize (omistajannimi)
        @sisus = "tyhjää"
        @omistaa = omistajannimi
    end
   
    def omistaja
        puts "Säiliön omistaa #{@omistaa}."
    end
end

varasto = Parempisailio.new("Schröndinger")
varasto.laita("kissa.")
varasto.tutki
varasto.omistaja