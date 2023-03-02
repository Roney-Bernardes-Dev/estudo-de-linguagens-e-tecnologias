package edu.roney.fixationexercises;

import java.util.Scanner;

public class Exercises_06_For_Fatorial {
    
    public static void main(String[] args) {
        try(Scanner scan = new Scanner(System.in)) {
            
            System.out.println("Digite um número para ver o fatorial: ");
            int fatorial = scan.nextInt();

            int multiplicacao = 1;

            System.out.println(fatorial + "! = ");
            for (int i = fatorial; i >= 1; i--) {
                multiplicacao = multiplicacao * i;

            }
            
            System.out.println(multiplicacao);
        }
    }
}
