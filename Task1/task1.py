#Steve Fiolic
#3/31/22
#Assumptions: The only valid input of the to the isPali function are
#               alphabetic letters. I will treat mix cases the same by
#               checking on the lower case letters only.

#################################################################
# Functions
#################################################################
def isPali(input_string):
    if type(input_string) == str:
        return input_string.lower() == input_string.lower()[::-1]
    return False

def allPalis(input_string):
    return 0

#################################################################
# TEST
#################################################################
def test_pali_1():
    return isPali(324324)

def test_pali_2():
    return isPali("iudbfius")

def test_pali_3():
    return isPali("anavolimilovana")

def test_allpali_4():
    expected = [ [ 0, 3, 'ana' ],
                [ 1, 14, 'navolimilovan' ],
                [ 2, 13,'avolimilova' ],
                [ 3, 12, 'volimilov' ],
                [ 4, 11, 'olimilo' ],
                [ 5, 10, 'limil' ],
                [ 6, 9, 'imi' ] ]
    return allPalis("anavolimilovana") == expected

def test_allpali_5():
    expected = [ [ 5, 8, 'ana' ] ]
    return allPalis("anavolimilovana") == expected


#################################################################
# MAIN
#################################################################
def main():
    print("test 1, not a string, should be False:  ",test_pali_1())
    print("test 2, text not pali, should be False: ",test_pali_2())
    print("test 3, text is pali, should be True:   ",test_pali_3())
    print("test 4, list equals, should be True:    ",test_allpali_4())
    print("test 5, list equals, should be True:    ",test_allpali_5())

if __name__ == '__main__':
    main()
