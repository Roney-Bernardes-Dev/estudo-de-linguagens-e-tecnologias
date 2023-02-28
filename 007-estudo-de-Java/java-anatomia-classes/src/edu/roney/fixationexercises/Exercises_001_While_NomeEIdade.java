package edu.roney.fixationexercises;

import java.util.Scanner;

public class Exercises_001_While_NomeEIdade {
    public static void main(String[] args) {
        
        try (Scanner scan = new Scanner(System.in)) {
            String nome;
            int idade;
            

            while(true) {

                System.out.println("Nome: ");
                nome = scan.next();
                System.out.println("Seu nome nome é: " + nome);
                if (nome.equals("0")) break;

                System.out.println(" ");

                System.out.println("Idade: ");
                idade = scan.nextInt();
                System.out.println("Seu nome nome é: " + idade);
            }
        }
    }
}
