package edu.roney.fixationexercises;

import java.util.Scanner;

/*
 * Desenvolva um gerador de tabuada
 * capaz de gerar tabuadas de qualquer número de 1 a 10
 * o usuario deve informar qual o número da tabuada ele deseja ver
 * a saida deve ser coforme o exemplo abaixo
 
 Tabuada de 5:

 5 x 1 = 5
 5 x 1 = 10
...
 5 x 10 = 50
 */


public class Exercises_05_Tabuada {

    public static void main(String[] args) {
        try(Scanner scan = new Scanner(System.in)) {

            System.out.println("Qual tabuada você quer ver: ");
            int tabuada = scan.nextInt();

            System.out.println("Tabueada de " + tabuada);

            for (int i = 1; i <= 10; i++) {
                System.out.println(tabuada + " X " + i + " = " + (tabuada * 1));
      
            }
            
        }
        
    }
    
}
