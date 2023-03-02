package edu.roney.estruturadedadosemjava_classe_no;

public class No {
    
    private Object object;
    private No refNo;

    public No() {
    }

    public No(Object object) {
        this.refNo = null;
        this.object = object;
    }
}
