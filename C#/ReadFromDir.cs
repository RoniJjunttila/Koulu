using System;
using System.IO;

class file_read {
	static void Main() {
		string path = ".";
		string[] dirlist = Directory.GetFiles(path, "*.*");
		
		if(dirlist.Length > 0) {
			foreach(string fileName in dirlist) {
				Console.WriteLine(fileName);
			}
		}
	}
}