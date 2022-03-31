#Steve Fiolic
#3/31/22


#################################################################
# Functions
#################################################################
#Assumptions: The only valid input of the to the isPali function are
#               alphabetic letters. I will treat mix cases the same by
#               checking on the lower case letters only.
def isPali(input_string):
    #check if string type
    if type(input_string) == str:
        #check if input is same reversed
        return input_string.lower() == input_string.lower()[::-1]
    return False

#Assumptions: The string check happens in the inner functions. It would
#               it would make more sense to have it in allPalis. I am assuming
#               that all the inputs into allPalis are valid strings.
def allPalis(input_string):
    res = []
    # if input is empty then append empty list
    if not input_string:
        res.append([])

    return res

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

def test_allpali_6():
    expected = [ [] ]
    return allPalis("") == expected


#################################################################
# MAIN
#################################################################
def main():
    print("test 1, not a string, should be False:  ",
            "Pass" if not test_pali_1() else "Fail")
    print("test 2, text not pali, should be False: ",
            "Pass" if not test_pali_2() else "Fail")
    print("test 3, text is pali, should be True:   ",
            "Pass" if test_pali_3() else "Fail")
    print("test 4, list equals, should be True:    ",
            "Pass" if test_allpali_4() else "Fail")
    print("test 5, list equals, should be True:    ",
            "Pass" if test_allpali_5() else "Fail")
    print("test 6, list equals, should be True:    ",
            "Pass" if test_allpali_6() else "Fail")

if __name__ == '__main__':
    main()
