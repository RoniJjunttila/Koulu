class Elain
    @@edellinen = ""
    @@maara = 0
    
    def initialize(rotu, nimi)
        @@maara += 1
        @@edellinen = rotu
        @nimi = nimi
        @rotu = rotu
    end

    def tiedot 
        puts "Olen #{@rotu} ja nimeni on #{@nimi}!"
    end

    def poista(val = "nil")
        puts "#{@nimi} poistettu!"
        @@maara -= 1
    end

    def tilanne
        puts "Eläimiä on tällä hetkellä " + @@maara.to_s + " kappaletta.\nViimeisin rekisteröity eläin oli #{@@edellinen}."
    end
end

#Tester
koira = Elain.new("koira","Rekku")
kissa = Elain.new("kissa","Raatelija")
lintu = Elain.new("kanarialintu","Tirppa")
koira.tiedot()
kissa.poista()
lintu.tilanne()
