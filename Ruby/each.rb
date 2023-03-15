array = []
print "Kirjoita jotain: "
input = gets
words = input.split(" ")
words.each do |word|
  array << word
end
puts "Tässä sanat aakkosjärjestyksessä:"
array.uniq!
array.sort!
array.each {|i| puts i}
