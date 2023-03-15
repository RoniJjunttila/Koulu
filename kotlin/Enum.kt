fun main(){
    for(i in Priority.values()) {
        print("${i.ordinal} : ${i.name}\n")
    }
}

enum class Priority{
    LOW,
    MEDIUM,
    HIGH,
}