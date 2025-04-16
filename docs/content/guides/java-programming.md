---
layout: base.njk
title: Java Programming Guide
---

# Java Programming Guide

## Introduction to Java

Java is a class-based, object-oriented programming language designed to be platform-independent through the Java Virtual Machine (JVM). It follows the principle of "Write Once, Run Anywhere."

## Core Concepts

### 1. Object-Oriented Programming

```java
// Class definition with inheritance
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some sound");
    }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
}
```

### 2. Interfaces and Abstract Classes

```java
// Interface
public interface Flyable {
    void fly();
    default void glide() {
        System.out.println("Gliding...");
    }
}

// Abstract class
public abstract class Bird implements Flyable {
    protected String species;
    
    public Bird(String species) {
        this.species = species;
    }
    
    abstract void sing();
}
```

### 3. Collections Framework

```java
import java.util.*;

// List example
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

// Map example
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);

// Stream API usage
int totalScore = scores.values().stream()
    .mapToInt(Integer::intValue)
    .sum();

// Using Optional
Optional<String> topStudent = scores.entrySet().stream()
    .max(Map.Entry.comparingByValue())
    .map(Map.Entry::getKey);
```

### 4. Exception Handling

```java
public class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public void processFile(String path) throws CustomException {
    try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
        String line;
        while ((line = reader.readLine()) != null) {
            // Process line
        }
    } catch (IOException e) {
        throw new CustomException("Error reading file: " + e.getMessage());
    }
}
```

## Modern Java Features

### 1. Lambda Expressions

```java
// Function interface
@FunctionalInterface
interface Calculator {
    int calculate(int x, int y);
}

// Using lambda
Calculator add = (x, y) -> x + y;
Calculator multiply = (x, y) -> x * y;

// With collections
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(name -> System.out.println("Hello, " + name));
```

### 2. Records (Java 16+)

```java
public record Person(String name, int age) {
    // Compact constructor
    public Person {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
    }
    
    // Additional methods
    public boolean isAdult() {
        return age >= 18;
    }
}
```

### 3. Pattern Matching (Java 17+)

```java
public String getTypeDescription(Object obj) {
    return switch (obj) {
        case String s -> "Text of length " + s.length();
        case Integer i -> "Number: " + i;
        case Person p -> "Person named " + p.name();
        case null -> "Null object";
        default -> "Unknown type";
    };
}
```

## Concurrency

### 1. Thread Management

```java
// Using Runnable
Runnable task = () -> {
    System.out.println("Running in thread: " + 
        Thread.currentThread().getName());
};
new Thread(task).start();

// Using ExecutorService
ExecutorService executor = Executors.newFixedThreadPool(4);
Future<String> future = executor.submit(() -> "Task result");
```

### 2. Synchronization

```java
public class SafeCounter {
    private AtomicInteger count = new AtomicInteger(0);
    
    public void increment() {
        count.incrementAndGet();
    }
    
    public synchronized void synchronizedMethod() {
        // Thread-safe code
    }
    
    public void lockExample() {
        Lock lock = new ReentrantLock();
        lock.lock();
        try {
            // Critical section
        } finally {
            lock.unlock();
        }
    }
}
```

## Best Practices

1. Follow naming conventions
   - Classes: PascalCase
   - Methods/Variables: camelCase
   - Constants: UPPER_SNAKE_CASE

2. Use proper access modifiers
   - private for implementation details
   - protected for inheritance
   - public for API

3. Handle resources properly
   ```java
   try (Resource resource = new Resource()) {
       // Use resource
   } // Auto-closed
   ```

4. Use builders for complex objects
   ```java
   Person person = Person.builder()
       .name("John")
       .age(25)
       .address("123 Street")
       .build();
   ```

## Testing with JUnit

```java
@Test
void testAddition() {
    Calculator calc = new Calculator();
    assertEquals(4, calc.add(2, 2), "2 + 2 should equal 4");
}

@Test
void testExceptionThrown() {
    assertThrows(IllegalArgumentException.class, () -> {
        new Person("Test", -1);
    });
}