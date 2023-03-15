require "7-4"

include MuuntajaModuuli

MuuntajaModuuli::muunna("Vesihiisi sihisee")
tulos = MuuntajaModuuli::parillinen?(1024)

if tulos == true
  puts "Testattu luku oli parillinen!"
end