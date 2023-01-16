public class IntLLQueue {
    private IntLinkedList data;

    public IntLLQueue() {
        data = new IntLinkedList();
    }

    public boolean enqueue(Integer el) {
        return data.add(el);
    }
}
