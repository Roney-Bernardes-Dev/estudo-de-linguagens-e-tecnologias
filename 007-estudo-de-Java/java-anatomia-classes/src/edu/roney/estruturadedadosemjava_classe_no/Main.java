package edu.roney.estruturadedadosemjava_classe_no;

public class Main {
    public static void main(String[] args) {
        
        Fila minhaFila = new Fila();

        minhaFila.enqueue(new No("primeiro"));
        minhaFila.enqueue(new No("segundo"));
        minhaFila.enqueue(new No("terceiro"));
        minhaFila.enqueue(new No("quarto"));
        minhaFila.enqueue(new No("quinto"));

        System.out.println(minhaFila);

        System.out.println(minhaFila.dequieue());
    }
}
