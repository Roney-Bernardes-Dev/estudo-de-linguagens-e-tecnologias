package edu.roney.fixationexercises;

import java.util.Scanner;

/*
 * faça um programa que que leia um vetor de 6 caracteres
 * digite quantas consoantes foram lidas
 * imprima as consoantes
 */

public class Exercises_08_Foreach_consoantes {
    public static void main(String[] args) {
       try (Scanner scan = new Scanner(System.in)) {

        String[] consoantes = new String[6];
        int quantidadeConsoantes = 0;

        int count = 0;

        do {
            System.out.println("Letras: ");
            String letrtas = scan.next();

            if ( !(letrtas.equalsIgnoreCase("a") |
                   letrtas.equalsIgnoreCase("e") |
                   letrtas.equalsIgnoreCase("i") |
                   letrtas.equalsIgnoreCase("o") |
                   letrtas.equalsIgnoreCase("u")) ) {
                consoantes[count] = letrtas;
                quantidadeConsoantes++;
            }

            count++;
            
        } while(count < consoantes.length);

        System.out.println("Consoantes: ");
        for (String consoante : consoantes) {
            if (consoante != null) {
                System.out.println(consoante + " ");  
            }
        
        }
        System.out.println("Quantidade de consoantes: " + quantidadeConsoantes);
        
        }
    }
    
}
