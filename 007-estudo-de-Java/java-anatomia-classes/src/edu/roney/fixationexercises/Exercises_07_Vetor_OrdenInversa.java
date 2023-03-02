package edu.roney.fixationexercises;

/*
 * Crie um vetor de 6 números inteiros
 * mostre-os na ordem inversa.
 */

public class Exercises_07_Vetor_OrdenInversa {
    public static void main(String[] args) {
        
        int[] vetor = {-5, -5, 15, 50, 8, 4};
        
        System.out.println("Vetor: ");
        int count = 0;
        while(count < (vetor.length)) {
            System.out.println(vetor[count]);
            count++;
        }

        System.out.println("\nVetor Inverso: ");
        for(int i =  (vetor.length -1); i >= 0; i--) {
            System.out.println(vetor[i]);
        }

    }

}
