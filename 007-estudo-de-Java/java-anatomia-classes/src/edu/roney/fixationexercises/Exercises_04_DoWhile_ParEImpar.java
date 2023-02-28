package edu.roney.fixationexercises;

import java.util.Scanner;

/*
 * Faça um programa que peça N números inteiro
 * calcule e mostre a quantidade de números pares
 * e a quantidade de números impares.
 */

public class Exercises_04_DoWhile_ParEImpar {

    public static void main(String[] args) {
        try (Scanner scan = new Scanner(System.in)) {
            
            int quantidadeNumero;
            int numero;
            int quantidadePares = 0, quantidadeImpares = 0;

            System.out.println("Quantos laços você quer fazer: ");
            quantidadeNumero = scan.nextInt();

            int count = 0;
            do {
                System.out.println("Número: ");
                numero = scan.nextInt();

                if (numero % 2 == 0) quantidadePares++;
                else quantidadeImpares++;

                count++;
            } while(count < quantidadeNumero);

            System.out.println("Quantidade de números pares: " + quantidadePares);
            System.out.println("Quantidade de números impares: " + quantidadeImpares);
        }

    }
    
}
