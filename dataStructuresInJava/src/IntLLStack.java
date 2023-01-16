public class IntLLStack {
    IntLinkedList data;

    public IntLLStack () {
        data = new IntLinkedList();
    }

    public boolean push (Integer el) {
        return data.addFront(el);
    }

    public Integer pop () {
        return data.removeFront();
        
    }

    public Integer peek () {
        Integer temp = data.removeFront();
        data.addFront(temp);

        return temp;
    }

    public boolean isEmpty() {
        return data.isEmpty();
    }

    public int search(Integer term) {
        return data.searchy(term);


    }


}
