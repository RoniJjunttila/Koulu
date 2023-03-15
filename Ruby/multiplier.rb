puts "Anna luku: "
input = gets.to_i
i = 0
while true
    i += 1
    result = input ** i
    puts i.to_s + ". potenssi on " + result.to_s
    if i == 10
        break
    end
end
