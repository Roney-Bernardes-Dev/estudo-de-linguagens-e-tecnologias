public class SmartTv {
    
    boolean ligada = false;
    int canal = 1;
    int volume = 25;

    public void aumentarVolume() {
        volume++;
        System.out.println("Aumentando o volume para: " + volume);
    }

    public void diminuirVolume() {
        volume--;
        System.out.println("Diminuindo o volume para: " + volume);
    }

    public void mudarCanal(int novoCanal) {
        canal = novoCanal;
        System.out.println("Mudando canal para: " + novoCanal);
    }

    public void subirCanal() {
        canal++;
        System.out.println("Mudando Canal para: " + canal);
    }

    public void descerCanal() {
        canal--;
        System.out.println("Mudando Canal para: " + canal);
    }

    public void ligar() {
        ligada = true;
    }

    public void desligar() {
        ligada = false;
    }

}
