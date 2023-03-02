package edu.roney.fixationexercises;

import java.util.Random;

/*
 * Gere e imprima um matriz M 4x4 com valores aleatrorios entre 0-9
 */

public class Exercises_10_Array_Multidimensional {
    public static void main(String[] args) {
        Random random = new Random();

        int[][] M = new int[4][4];

        for (int i = 0; i < M.length; i++) {
            for (int j = 0; j < M[1].length; j++) {
                M[i][j] = random.nextInt(9);
                
            }
            
        }

        System.out.println("Matriz: ");
        for (int[] linha : M) {
            for (int coluna : linha) {
                System.out.print(coluna + " ");
                
            }
            System.out.println(" ");
            
        }

    }
    
}
