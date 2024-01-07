import turtle
import time
import math

currentTime = time.time()

totalSeconds = int(currentTime)

currentSecond = totalSeconds % 60

totalMinutes = totalSeconds // 60

currentMinute = totalMinutes % 60

totalHours = totalMinutes // 60

currentHour = totalHours % 24

#print("Current time is", currentHour, ":", currentMinute, ":", currentSecond, "GMT")

#x2, y2 = eval(input("Enter x2 and y2 for Point2: "))

#distance = ((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) ** 0.5

#print("The distance between the two points is", distance)

a1, b1, c1 = eval(input("Enter a, b and c: "))

#a2, b2 = eval(input("Enter x2 and y2 for Point2: "))

info = b1 * b1 -(4 * a1 * c1)

x1 = (- b1 + math.sqrt(info)) / 2 * a1

x2 = (- b1 - math.sqrt(info)) / 2 * a1

print("x =", x1, "or x =", x2 )

'''
turtle.penup()
turtle.goto(x1, y1)
turtle.pendown()
turtle.write("Point 1")
turtle.goto(x2, y2)
turtle.write("Point 2")

turtle.penup()
turtle.goto((x1 + x2) / 2, (y1 + y2) / 2)
turtle.write(distance)

turtle.done()

ch ="a"
ord(ch)'''
'''turtle.showturtle()
turtle.write("Welcome")
turtle.forward(100)
turtle.right(90)
turtle.color("red")
turtle.forward(50)'''
#radius = eval(input("Enter a value for radius: "))
#area = radius * radius *3.14159
'''print("The area for the cicle of radius", radius, "is", area)
print("FFFFFFF   U     U   NN    NN")
print("FF        U     U   NNN   NN")
print("FFFFFFF   U     U   NN N  NN")
print("FF         U   U    NN  N NN")
print("FF          UUU     NN   NNN")'''

def game_guesser(random_number):
    wrong_input_count = 0

    while True:
        guessed_number = input("Guess the number: ")

        if not guessed_number:
            print("Invalid input. Please enter a number.")
        else:
            guessed_number = int(guessed_number)

            if guessed_number == random_number:
                print('Correct')
                break
            else:
                print('Wrong')
                wrong_input_count += 1

                if wrong_input_count == 5:
                    print('Sorry, too many wrong attempts.')
                    break

if __name__ == "__main__":
    random_number = 42  # Replace with your actual random number
    game_guesser(random_number)
