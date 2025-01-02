
exercice 4 SQ2 S2.py
#programme exercice 4
# produit de 2 matrices
# date: 13-03-2024

import os # pour accedeer à la commande qui efface l'écran
# boucle sur la saisie dunombre de lignes de la matrice A
m = 5
while m > 4:
    n = int(input("Entrez le nombre de lignes de A (maximum 4) ="))
# boucle sur la saisie du nombre de lignes de la matrice B
p = 5
while p > 4:
    p = int(input("Entrez le nombre de colonnes de B (maximum 4) ="))
# déclaration et initialisation des matrices
A = [[0] * m for _ in range(n)]
B = [[0] * n for _ in range(p)]
C = [[0] * m for _ in range(p)]
# constantes de positionnement
L = 6 # largeur de case
H = 2 # hauteur de case
# affichage de la structure des matrices
for x in range(0, n) :
    for y in range(0, m) :
      print(f"\033[{y*H+1};{x*L+1}H.")
    for x in range(0, p) :
      for y in range(0, n) :
       print(f"\033[{y*H+1};{(x+n+1)*L}H.")
    print(f"\033[{(m*H)//2};{n*L}Hx")
    print(f"\033[{(m*H)//2};{(n+p+1)*L}H=")
# saisie de la 1ère matrice : A
for x in range(0, n) :
    for y in range(0, m) :
      A[x][y] = float(input(f"\033[{y*H+1};{x*L+1}H"))
# saisie de la 2ème matrice : B
for x in range(0, p) :
    for y in range(0, n) :
       B[x][y] = float(input(f"\033[{y*H+1};{(x+n+1)*L}H"))
# remplissage de C avec le produit de A et B
for x in range(0, p) :
    for y in range(0, m) :
        C[x][y] = 0
        for i in range(0, n):
            C[x][y] += A[i][y] * B[x][i]
        # affichage de la matrice C
        for x in range(0, p):
            for y in range(0, m):
              print(f"\033[{y * H + 1};{x * L + (n + p + 2) * L}H{C[x][y]}")
