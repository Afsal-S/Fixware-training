# int
int myNum = 1000;
printf("%d", myNum);
# float
float myNum = 5.75;
printf("%f", myNum);
# double
double myNum = 19.99;
printf("%lf", myNum);
# implicit conversion
float myFloat = 9;

printf("%f", myFloat); 
# explicit conversion
float sum = (float) 5 / 2;

printf("%f", sum); 
# c arithmetic operators
#include <stdio.h>

int main() {
  int x = 5;
  int y = 3;
  printf("%d", x + y);
  return 0;
}
#include <stdio.h>

int main() {
  int x = 5;
  int y = 3;
  printf("%d", x - y);
  return 0;
}
#include <stdio.h>

int main() {
  int x = 5;
  int y = 3;
  printf("%d", x * y);
  return 0;
}
#include <stdio.h>

int main() {
  int x = 12;
  int y = 3;
  printf("%d", x / y);
  return 0;
}
#include <stdio.h>

int main() {
  int x = 5;
  int y = 2;
  printf("%d", x % y);
  return 0;
}
#include <stdio.h>

int main() {
  int x = 5;
  printf("%d", ++x);
  return 0;
}
