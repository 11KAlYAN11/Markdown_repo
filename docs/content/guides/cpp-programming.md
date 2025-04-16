---
layout: base.njk
title: C++ Programming Guide
---

# C++ Programming Guide

## Introduction to C++

C++ is a powerful general-purpose programming language that extends C with object-oriented features. It's widely used in game development, system programming, and performance-critical applications.

## Core Features

### 1. Classes and Objects

```cpp
// Class definition
class Person {
private:
    string name;
    int age;
    
public:
    // Constructor
    Person(string n, int a) : name(n), age(a) {}
    
    // Member functions
    void displayInfo() const {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
    
    // Getter and setter
    int getAge() const { return age; }
    void setAge(int a) { age = a; }
};

// Using the class
Person person("Alice", 25);
person.displayInfo();
```

### 2. Templates

```cpp
// Function template
template<typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Class template
template<typename T>
class Stack {
private:
    vector<T> elements;
    
public:
    void push(T const& elem) {
        elements.push_back(elem);
    }
    
    T pop() {
        T top = elements.back();
        elements.pop_back();
        return top;
    }
};
```

### 3. STL Containers

```cpp
#include <vector>
#include <map>
#include <string>

// Vector usage
vector<int> numbers = {1, 2, 3, 4, 5};
numbers.push_back(6);

// Map usage
map<string, int> ages;
ages["Alice"] = 25;
ages["Bob"] = 30;

// Range-based for loop
for (const auto& pair : ages) {
    cout << pair.first << ": " << pair.second << endl;
}
```

### 4. Smart Pointers

```cpp
#include <memory>

// Unique pointer
unique_ptr<Person> person1(new Person("Alice", 25));
person1->displayInfo();

// Shared pointer
shared_ptr<Person> person2 = make_shared<Person>("Bob", 30);
shared_ptr<Person> person3 = person2;  // Reference count = 2
```

## Modern C++ Features (C++11 and beyond)

### 1. Auto Type Inference

```cpp
auto number = 42;        // int
auto text = "Hello";     // const char*
auto pi = 3.14159;       // double

// With lambda expressions
auto lambda = [](int x) { return x * x; };
```

### 2. Lambda Expressions

```cpp
vector<int> numbers = {1, 2, 3, 4, 5};

// Using lambda with algorithms
auto sum = accumulate(numbers.begin(), numbers.end(), 0,
    [](int total, int current) {
        return total + current;
    });

// Capturing variables
int multiplier = 10;
auto multiply = [multiplier](int x) { return x * multiplier; };
```

### 3. Move Semantics

```cpp
class Buffer {
private:
    int* data;
    size_t size;

public:
    // Move constructor
    Buffer(Buffer&& other) noexcept 
        : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
    }
    
    // Move assignment operator
    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            size = other.size;
            other.data = nullptr;
            other.size = 0;
        }
        return *this;
    }
};
```

## Best Practices

1. Use RAII (Resource Acquisition Is Initialization)
2. Prefer smart pointers over raw pointers
3. Use const whenever possible
4. Leverage STL algorithms and containers
5. Follow the Rule of Five/Zero

## Common Idioms

### 1. RAII Pattern

```cpp
class FileHandler {
private:
    FILE* file;
    
public:
    FileHandler(const char* filename) {
        file = fopen(filename, "r");
    }
    
    ~FileHandler() {
        if (file) {
            fclose(file);
        }
    }
};
```

### 2. Pimpl Idiom

```cpp
// Header file
class Widget {
private:
    class Impl;
    unique_ptr<Impl> pimpl;
    
public:
    Widget();
    ~Widget();
    void doSomething();
};

// Implementation file
class Widget::Impl {
    // Implementation details
};
```

## Exception Handling

```cpp
try {
    vector<int> vec;
    vec.at(5) = 10;  // Will throw out_of_range
} catch (const out_of_range& e) {
    cerr << "Out of range error: " << e.what() << endl;
} catch (...) {
    cerr << "Unknown error occurred" << endl;
}