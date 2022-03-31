def isPali(input_string):
    return 0


def test_Pali_1():
    return isPali(324324)

def test_pali_2():
    return isPali("iudbfius")

def test_pali_3():
    return isPali("anavolimilovana")


def main():
    print("test 1, not a string, should be false:  ",test_Pali_1())
    print("test 2, text not pali, should be false: ",test_Pali_2())
    print("test 3, text is pali, should be false:  ",test_Pali_3())

if __name__ == '__main__':
    main()
