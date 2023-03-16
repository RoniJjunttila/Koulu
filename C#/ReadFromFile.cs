using System;
using System.IO;

class file_reader {
    static void Main(string[] args) {
        string fileName, content;
        if(args.Length == 0) {
            Console.WriteLine("No filename provided!"); 
            return;
        } else {
            fileName = args[0];
            if(File.Exists(fileName)) {
                content = File.ReadAllText(fileName);
                Console.WriteLine(content);
            } else {
                Console.WriteLine("File does not exist!");
            }
        }
    }
}