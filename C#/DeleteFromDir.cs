using System;
using System.IO;

class file_delete {
	static void Main() {
		
		string path = ".";
		string[] dirList = Directory.GetFiles(path, "*.dat");	
		
			foreach(string fileName in dirList) {
				if(File.Exists(fileName)){
			File.Delete(fileName);
			
			}
		}
		Console.WriteLine(dirList.Length + " file(s) deleted.");
	}
}

