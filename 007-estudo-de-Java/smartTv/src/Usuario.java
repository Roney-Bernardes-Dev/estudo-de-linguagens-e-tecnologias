public class Usuario {
    public static void main(String[] args) throws Exception {
        
        SmartTv smartTv = new SmartTv();

        System.out.println("Estado da Televisão: " + smartTv.lingada);
        System.out.println("Canal inicial: " + smartTv.canal);
        System.out.println("Volume inicial: " + smartTv.volume);
    }
}
