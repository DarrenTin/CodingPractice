# Implement a Complex Number Class with Arithmetic Operations


class ComplexNumber:

    def __init__(self, real, imaginary):
        self.real = real
        self.imaginary = imaginary
        # self.complex = complex(real, imaginary)

    def __str__(self):
        return f'{self.real} + {self.imaginary}'

    def add(complex1, complex2):
        real = complex1.real + complex2.real
        imaginary = complex1.imaginary + complex2.imaginary
        return f'{real} + {imaginary}i'
        # return complex1.complex + complex2.complex

    def sub(complex1, complex2):
        real = complex1.real - complex2.real
        imaginary = complex1.imaginary - complex2.imaginary
        if imaginary > 0:
            return f'{real} + {imaginary}i'
        else:
            return f'{real} - {-imaginary}i'
        # return complex1.complex - complex2.complex
            
    def mul(complex1, complex2):
        # formula: (a + ib) (c + id) = (ac - bd) + i(ad + bc).
        real = complex1.real * complex2.real - complex1.imaginary * complex2.imaginary
        imaginary = complex1.real * complex2.imaginary + complex1.imaginary * complex2.real
        if imaginary > 0:
            return f'{real} + {imaginary}i'
        else:
            return f'{real} - {-imaginary}i'
        # return complex1.complex * complex2.complex

    def div(complex1, complex2):
        #  formula: (a + ib) / (c + id) = ((ac + bd) / (c2 + d2)) + i (bc – ad / c2 + d2)
        real = (complex1.real * complex2.real + complex1.imaginary * complex2.imaginary) / (complex2.real * complex2.real + complex2.imaginary * complex2.imaginary)
        imaginary = (complex1.imaginary * complex2.real - complex1.real * complex2.imaginary) / (complex2.real * complex2.real + complex2.imaginary * complex2.imaginary)
        if imaginary > 0:
            return f'{real} + {imaginary}i'
        else:
            return f'{real} - {-imaginary}i'
        # return complex1.complex / complex2.complex

    def __eq__(complex1, complex2):
        return complex1.complex == complex2.complex

if __name__ == '__main__':
    cn1 = ComplexNumber(3, 4)
    cn2 = ComplexNumber(4, 5)
    
    print(cn1.__str__())
    print(ComplexNumber.add(cn1, cn2))
    print(ComplexNumber.sub(cn1, cn2))
    print(ComplexNumber.mul(cn1, cn2))
    print(ComplexNumber.div(cn1, cn2))

    print(cn1 == cn2)
    print(cn1 == ComplexNumber(3, 4))