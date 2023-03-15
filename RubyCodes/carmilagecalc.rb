while(true)
    print "Anna autolla ajetut kilometrit: "
    distance = gets.to_f
    print "Anna bensanhinta: "
    price = gets.to_f
    print "Onko matka (1) maantieajoa vai (2) kaupunkiajoa?: "
    input = gets.to_i
    case input
        when 1
            print "Matka maksoi "
            print distance * 0.05 * price
            print " euroa" + "\n"
        when 2
            print "Matka maksoi "
            print distance * 0.09 * price
            print " euroa" + "\n"
        end
    print "Lasketaanko toinen matka? (k/e)?: "
    looper = gets.chomp!
    if looper == "e"
        break
    end
end