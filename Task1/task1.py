#Steve Fiolic
#3/31/22
#Assumptions: The only valid input of the to the isPali function are
#               alphabetic letters. I will treat mix cases the same by
#               checking on the lower case letters only.


def isPali(input_string):
    if input_string.isalpha():
        return input_string == input_string[::-1]
    return false


def test_pali_1():
    return isPali(324324)

def test_pali_2():
    return isPali("iudbfius")

def test_pali_3():
    return isPali("anavolimilovana")


def main():
    print("test 1, not a string, should be False:  ",test_pali_1())
    print("test 2, text not pali, should be False: ",test_pali_2())
    print("test 3, text is pali, should be True:  ",test_pali_3())

if __name__ == '__main__':
    main()
