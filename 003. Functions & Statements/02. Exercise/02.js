function print(first, second, third) {

    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    const result = subtract(sum(first, second), third);
    console.log(result);
}

print(23, 6, 10);   //* 19
print(1, 17, 30);   //* -12
print(42, 58, 100); //* 0

