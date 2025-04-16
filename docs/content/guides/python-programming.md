---
layout: base.njk
title: Python Programming Guide
---

# Python Programming Guide

## Introduction to Python

Python is a high-level, interpreted programming language known for its simplicity and readability. It emphasizes code readability with its notable use of significant whitespace and supports multiple programming paradigms.

## Core Features

### 1. Basic Syntax and Data Types

```python
# Variables and basic types
name = "Alice"        # str
age = 25             # int
height = 1.75        # float
is_student = True    # bool

# Lists
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
first_three = numbers[:3]  # Slicing

# Dictionaries
person = {
    "name": "Alice",
    "age": 25,
    "skills": ["Python", "Data Science"]
}
```

### 2. Functions and Lambda Expressions

```python
# Function definition
def greet(name: str, greeting: str = "Hello") -> str:
    """
    Greet a person with a custom greeting.
    
    Args:
        name (str): Person's name
        greeting (str): Greeting to use (default: "Hello")
    
    Returns:
        str: Complete greeting message
    """
    return f"{greeting}, {name}!"

# Lambda function
square = lambda x: x ** 2

# Higher-order functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(square, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

### 3. Classes and Objects

```python
from dataclasses import dataclass
from typing import List, Optional

@dataclass
class Student:
    name: str
    age: int
    grades: List[float]
    email: Optional[str] = None
    
    def average_grade(self) -> float:
        return sum(self.grades) / len(self.grades)
    
    @property
    def is_passing(self) -> bool:
        return self.average_grade() >= 60

# Class inheritance
class GraduateStudent(Student):
    def __init__(self, name: str, age: int, grades: List[float], 
                 research_topic: str):
        super().__init__(name, age, grades)
        self.research_topic = research_topic
```

### 4. Context Managers

```python
# Using with statement
with open('data.txt', 'r') as file:
    content = file.read()

# Custom context manager
from contextlib import contextmanager

@contextmanager
def timer():
    import time
    start = time.time()
    yield
    end = time.time()
    print(f"Execution time: {end - start} seconds")

with timer():
    # Code to measure
    result = sum(range(1000000))
```

## Modern Python Features

### 1. Type Hints and Type Checking

```python
from typing import List, Dict, TypeVar, Generic

T = TypeVar('T')

class Stack(Generic[T]):
    def __init__(self) -> None:
        self.items: List[T] = []
    
    def push(self, item: T) -> None:
        self.items.append(item)
    
    def pop(self) -> T:
        return self.items.pop()

# Type checking with mypy
def process_data(data: Dict[str, int]) -> List[int]:
    return [value * 2 for value in data.values()]
```

### 2. Async Programming

```python
import asyncio
from aiohttp import ClientSession

async def fetch_data(url: str) -> dict:
    async with ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

async def process_urls(urls: List[str]) -> List[dict]:
    tasks = [fetch_data(url) for url in urls]
    return await asyncio.gather(*tasks)

# Running async code
async def main():
    urls = [
        "https://api.example.com/data1",
        "https://api.example.com/data2"
    ]
    results = await process_urls(urls)
    print(results)

asyncio.run(main())
```

### 3. Pattern Matching (Python 3.10+)

```python
def process_command(command):
    match command.split():
        case ["quit"]:
            return "Exiting..."
        case ["load", filename]:
            return f"Loading {filename}"
        case ["save", filename, "as", format]:
            return f"Saving {filename} as {format}"
        case _:
            return "Unknown command"
```

## Best Practices

### 1. Code Style (PEP 8)

```python
# Good variable names
user_name = "Alice"
total_count = 0

# List comprehension (preferred over map/filter)
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Proper function spacing
def complex_function(
        arg1: str,
        arg2: int,
        *args: tuple,
        **kwargs: dict
) -> dict:
    """Docstring explaining function purpose."""
    return {"result": arg1 * arg2}
```

### 2. Testing with pytest

```python
import pytest

def test_addition():
    assert 1 + 1 == 2

@pytest.fixture
def sample_data():
    return {"name": "Test", "value": 42}

def test_with_fixture(sample_data):
    assert sample_data["value"] == 42

@pytest.mark.parametrize("input,expected", [
    (2, 4),
    (3, 6),
    (4, 8),
])
def test_multiplication(input, expected):
    assert input * 2 == expected
```

### 3. Error Handling

```python
class CustomError(Exception):
    """Custom error class"""
    pass

def process_data(data: dict) -> None:
    try:
        value = data["key"]
    except KeyError as e:
        raise CustomError(f"Missing required key: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        raise
    else:
        print("Processing successful")
    finally:
        print("Cleanup code")