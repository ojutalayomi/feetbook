import random


levels = [
    {
        'level': 1,
        'tries': 10,
        'min': 0,
        'max': 20
    },
    {
        'level': 2,
        'tries': 10,
        'min': 0,
        'max': 50
    },
    {
        'level': 3,
        'tries': 10,
        'min': 0,
        'max': 100
    },
    {
        'level': 4,
        'tries': 5,
        'min': 0,
        'max': 100
    },
    {
        'level': 5,
        'tries': 3,
        'min': 0,
        'max': 6
    }
]

l = 0

def prev_level():
   global l
   if l != 0:
        l -= 1

    
def getRandomInt():
    global random_Number
    random_Number = random.randint(levels[l]['min'], levels[l]['max'])
    print(f"getRandomInt, Level {l + 1}, Random Number: {random_Number}")

getRandomInt()

def getRandomInt_():
        global l
        l += 1
        global random__Number
        if l < len(levels):
            random__Number = random.randint(levels[l]['min'], levels[l]['max'])
            global randomNumber
            randomNumber = random__Number
            tries_left = levels[l]['tries']
            print(f"getRandomInt_, Level {l + 1}, Random Number: {random__Number}")
            print(levels[l]['min'])
            print(levels[l]['max'])
            print(levels[l]['tries'])
        else:
             print('You have come to the end of the game. Thank you.')      



print(levels[l]['min'])
print(levels[l]['max'])
print(levels[l]['tries'])
tries_left = levels[l]['tries']

randomNumber = random_Number

level_length = len(levels) + 1

while levels[l]['level'] < level_length:

    #print(f"Level {current_level + 1}, Random Number: {random_Number}")

    #for _ in range(tries_left):

            if levels[l]['tries'] != 0:
        
                        
                        guessedNumber = input(f"Guess the number between {levels[l]['min']} and {levels[l]['max']}: ")
                        if not guessedNumber:
                            print("Invalid input. Please enter a number: ")
                            #print(tries_left)
                            continue

                        guessedNumber = int(guessedNumber)

                        if guessedNumber == randomNumber:
                                if levels[l]['level'] < len(levels):
                                    print('Correct! Moving to the next level.')
                                    getRandomInt_()
                                else:
                                    print('You have come to the end of the game. Thank you.')
                                    break
                                    
                        else:
                                print('Wrong')
                                levels[l]['tries'] -= 1
                                print(f"Tries left: {levels[l]['tries']}")

            else:
                    print("Sorry, you've exceeded the maximum number of wrong attempts.")
                    _response = input(f"Enter S to start from Level 1 or P to go to the previous level : ")
                    if _response == "S":
                        l = 0
                        getRandomInt()
                    elif _response == "P":
                        print("Letter P")
                        prev_level()
                    else:
                          print("Error") 

                    
            
'''if levels[l]['tries'] == 0:
    print("Sorry, you've exceeded the maximum number of wrong attempts.")
    _response = input(f"Enter S to start from Level 1 or P to go to the previous level : ")
    break'''

'''if levels[l]['level'] > level_length:
    break  # End the game loop'''    




#guessedNumber = input("Guess the number: ")

'''def guess_number():
    tries_left = levels[l]['tries']

    while True:
        guessedNumber = input(f"Guess the number between {levels[l]['min']} and {levels[l]['max']}: ")

        if not guessedNumber:
            print("Invalid input. Please enter a number.")
            print(tries_left)
            continue

        guessedNumber = int(guessedNumber)

        if guessedNumber == randomNumber:
            print('Correct! Moving to the next level.')
            print(randomNumber)
            next_level()
            #l += 1
            tries_left = levels[l]['tries']
            break
        else:
            print('Wrong')
            tries_left -= 1
            if tries_left == 0:
                print("Sorry, you've exceeded the maximum number of wrong attempts.")
                break

guess_number()'''
#or    
#print('Correct') if guessedNumber == randomNumber else print('Wrong')
