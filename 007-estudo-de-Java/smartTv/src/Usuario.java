public class Usuario {
    public static void main(String[] args) throws Exception {
        
        SmartTv smartTv = new SmartTv();

        System.out.println("Estado da Televisão: " + smartTv.ligada);
        System.out.println("Canal inicial: " + smartTv.canal);
        System.out.println("Volume inicial: " + smartTv.volume);
        System.out.println(""); //Separa dos metodos para melhor visualização

        // Ligando a tv
        smartTv.ligar();
        System.out.println("Estado da Televisão: " + smartTv.ligada);

        // Desligando a tv
        smartTv.desligar();
        System.out.println("Estado da Televisão: " + smartTv.ligada);
        System.out.println(""); //Separa dos metodos para melhor visualização

        // Aumentando e diminuindo o volume
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.aumentarVolume();
        System.out.println(""); //Separa dos metodos para melhor visualização

        // Subindo e Descendo Canais
        System.out.println("Canal Atual: " + smartTv.canal);
        smartTv.subirCanal();
        smartTv.subirCanal();
        smartTv.descerCanal();
        smartTv.mudarCanal(14);
        System.out.println(""); //Separa dos metodos para melhor visualização
        



    }
}
