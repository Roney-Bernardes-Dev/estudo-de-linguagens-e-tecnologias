package edu.roney.fixationexercises;

import java.util.Random;

/*
 * Faça um programa que leia 20 números interiros aleatorio (entre 0 e 100) armazenane-os num vetor
 * ao final mostre os números e seus sucessores.
 */
public class Exercises_09_For_NumerosAleatorios {
    public static void main(String[] args) {
        Random random = new Random();

        int[] numerosAleatores = new int[20];

        for (int i = 0; i < numerosAleatores.length; i++) {
            int numero = random.nextInt(100);
            numerosAleatores[i] = numero;
        }
        
        System.out.println("Números aleatótios: ");
        for (int numero : numerosAleatores) {
            System.out.print(numero + " ");
            
        }

        System.out.println("\nSucessores do números aleatótios: ");
        for (int numero : numerosAleatores) {
            System.out.print((numero + 1) + " ");
            
        }
    }
    
}
