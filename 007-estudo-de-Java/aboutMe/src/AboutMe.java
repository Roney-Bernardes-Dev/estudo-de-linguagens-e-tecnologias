import java.util.Locale;
import java.util.Scanner;

public class AboutMe {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.println("Digite seu nome");
        String nome = scanner.next();

        System.out.println("Digite seu Sobrenome");
        String Sobrenome = scanner.next();

        System.out.println("Digite sua Idade");
        int idade = scanner.nextInt();

        System.out.println("Digite seu Altura");
        double altura = scanner.nextDouble();

        //Imprimindo os dados obtidos
        System.out.println("");
        System.out.println("Olá, me chamo " + nome + " " + Sobrenome);
        System.out.println("Tenho " + idade + " Anos");
        System.out.println("Minha altura é " + altura + " cm");
    }
}
