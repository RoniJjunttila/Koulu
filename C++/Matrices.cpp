#include <iostream>
#include <fstream>
using namespace std;

void print_matrix(int matrix[5][5]);
int calculate_sum(int matrix[5][5]);

int main(void)
{
  int matrix[5][5];
  int sum;
  ifstream file("matrix.txt");
  if (!file){
        cout << "File cannot be opened!";
  }
  else {
    for (int y=0; y<5;y++){
          for (int x=0;x<5;x++){
            file >> matrix[y][x];
          }
    }
    file.close();
    cout << "Matrix:" << endl;
    print_matrix(matrix);
    sum = count_sum(matrix);
    cout << "Sum of elements: " << sum << endl;
  }
} 

}

int count_sum(int matrix[5][5]) 
{
	for(y = 0; y < 5; y++) {
		for(x = 0; x < 5; x++) {
			sum[y][x] = matrix[y[x] + matrix[x[y];

			if(x == 4) {
				cout << sum[y][x] << "\n";
			} else {
				cout << sum[y][x] << "\t";
			}
		}
	return sum;
}

											 /*
int print_matrix(int matrix[5][5]) 
{
	for(y = 0; y < 5; y++) {
		for(x = 0; x < 5; x++) {
			matrix = matrix[y][x] + matrix[y][x];

			if(x == 4) {
				cout << sum_matrix[y][x] << "\n";
			} else {
				cout << sum_matrix[y][x] << "\t";
			}
		}
	}
	return matrix;
}