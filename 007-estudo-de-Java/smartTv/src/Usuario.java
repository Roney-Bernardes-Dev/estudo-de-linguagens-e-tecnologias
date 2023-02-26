public class Usuario {
    public static void main(String[] args) throws Exception {
        
        SmartTv smartTv = new SmartTv();

        
        System.out.println("Estado da Televisão: " + smartTv.ligada);
        System.out.println("Canal inicial: " + smartTv.canal);
        System.out.println("Volume inicial: " + smartTv.volume);
        System.out.println(""); //Separa dos metodos para melhor visualização

        smartTv.ligar();
        System.out.println("Estado da Televisão: " + smartTv.ligada);
    }
}
