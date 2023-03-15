class Elain
    @@edellinen = ""
    @@maara = 0

    def initialize(rotu, nimi)
        @@maara += 1
        @@rotu = @@edellinen
        #@nimi = nimi
    end

    def tiedot 
        puts "Olen #{@@edellinen} ja nimeni on nimi #{@@edellinen}."
    end

    def poista(val = "nil")
        @edellinen = val
        @@maara -= 1
    end

    def tilanne
        puts "Eläimiä tällä hetkellä " + @@maara.to_s + " kappaletta. Viimeisin rekisteröity eläin oli #{@@edellinen}."
    end
end

#Tester
koira = Elain.new("koira","Rekku")
kissa = Elain.new("kissa","Raatelija")
lintu = Elain.new("kanarialintu","Tirppa")
#koira.tiedot()
kissa.poista()
lintu.tilanne()
