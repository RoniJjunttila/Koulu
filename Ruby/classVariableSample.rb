class Asiakas
    @@raja = 150 
    @@nimi = ""

    def initialize(nimi)
    #@nimi = nimi
    @@nimi = nimi
    end

    def saldoraja 
    puts "Asiakkaan #{@nimi} saldoraja on #{@@raja}."
    end

    def korota
    puts "Nostetaan kaikkien saldorajaa."
    @@raja += 100
    end

    def viimeisin
    puts "Viimeisin lisätty asiakas on #{@@nimi}."
    end
end


mikko = Asiakas.new("Mikko")
maija = Asiakas.new("Maija")
mikko.saldoraja
mikko.korota
maija.saldoraja
mikko.viimeisin