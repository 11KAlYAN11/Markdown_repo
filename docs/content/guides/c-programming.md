---
layout: base.njk
title: C Programming Guide
---

# C Programming Guide

## Introduction to C

C is a general-purpose, procedural programming language that provides low-level access to system memory and hardware. It's widely used in system programming, embedded systems, and developing operating systems.

## Key Concepts

### 1. Basic Structure

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### 2. Data Types

```c
// Basic data types
int number = 42;              // Integer
float decimal = 3.14f;        // Single precision floating point
double pi = 3.14159265359;    // Double precision floating point
char letter = 'A';            // Single character
char name[] = "John";         // String (character array)
```

### 3. Control Structures

```c
// If-else statement
if (number > 0) {
    printf("Positive number\n");
} else if (number < 0) {
    printf("Negative number\n");
} else {
    printf("Zero\n");
}

// For loop
for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}

// While loop
int j = 0;
while (j < 5) {
    printf("%d ", j);
    j++;
}
```

### 4. Functions

```c
// Function declaration
int add(int a, int b);

// Function definition
int add(int a, int b) {
    return a + b;
}

// Using pointers in functions
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
```

### 5. Memory Management

```c
#include <stdlib.h>

// Dynamic memory allocation
int *arr = (int*)malloc(5 * sizeof(int));
if (arr != NULL) {
    // Use the allocated memory
    for (int i = 0; i < 5; i++) {
        arr[i] = i + 1;
    }
    
    // Free the allocated memory
    free(arr);
}
```

## Advanced Topics

### 1. Structures

```c
struct Person {
    char name[50];
    int age;
    float height;
};

// Using structures
struct Person person1 = {"John", 25, 1.75};
printf("Name: %s, Age: %d\n", person1.name, person1.age);
```

### 2. File Handling

```c
// Writing to a file
FILE *file = fopen("data.txt", "w");
if (file != NULL) {
    fprintf(file, "Hello, File!\n");
    fclose(file);
}

// Reading from a file
char buffer[100];
file = fopen("data.txt", "r");
if (file != NULL) {
    while (fgets(buffer, sizeof(buffer), file) != NULL) {
        printf("%s", buffer);
    }
    fclose(file);
}
```

## Best Practices

1. Always initialize variables before use
2. Free allocated memory to prevent memory leaks
3. Check return values from functions
4. Use meaningful variable and function names
5. Comment your code appropriately

## Common Pitfalls

1. Buffer overflows
2. Memory leaks
3. Null pointer dereferences
4. Array index out of bounds
5. Uninitialized variables

## Debugging Tips

```c
// Using printf for debugging
printf("Debug: x = %d, y = %d\n", x, y);

// Using assert
#include <assert.h>
assert(pointer != NULL);

// Using preprocessor directives
#ifdef DEBUG
    printf("Debug information\n");
#endif
```