class Laatikkko
    def initialized(alkuarvo = "nil")
        @sisus = alkuarvo
    end

    def sisus
         @sisus
    end
    def sisus= (val)
        @sisus = val
    end
end

Varasto = Laatikkko.new()
Varasto.initialized
Varasto.sisus = "puuhapakki"

puts "Varastossa on sisällä #{Varasto.sisus}."
