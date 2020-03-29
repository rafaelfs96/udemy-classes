from random import randint

board = []

#create a 5x5 board
for x in range(0, 5):
    board.append(['O'] * 5)

def print_board(board):
    for row in board:
        print("  ".join(row))

#randomize row position
def random_row(board):
    return randint(0, len(board) - 1)

#randomize col position
def random_col(board):
    return randint(0, len(board[0]) - 1)

#ship's localization
ship_row = random_row(board)
ship_col = random_col(board)

print(ship_row, ship_col)

print ("\nWelcome to battleship")
turn = 1
while True:
    print ("\nTurn", turn)
    guess_row = int(input('Guess Row: '))
    guess_col = int(input('Guess Col: '))

    if guess_row == ship_row and guess_col == ship_col:
        print ("\nYOU WIN!\n")
        break
    else:
        if guess_row not in range(5) or guess_col not in range(5):
            print ("\nThat's not even the ocean\n")
        elif board[guess_row][guess_col] == "X":
            print ("\nYou've already tried this one.\n")
        else:
            print ("\nYou missed\n")
            board[guess_row][guess_col] = "X"
            turn += 1
            print_board(board)
    if turn == 4:
        print ("\nYOU LOSE!\n")
        break
