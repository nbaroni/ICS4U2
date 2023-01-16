public class intArrayQueue {
    private IntArrayList data;

    public intArrayQueue() {
        data = new IntArrayList();
    }

    public boolean isEmpty() {
        return data.isEmpty();
    }

    public void clear() {
        data = new IntArrayList();
    }

    public boolean enqueue(Integer el) {
        return data.add(el);
    }
    
    public Integer dequeue() {
        return data.removeFront();
    }

    public Integer peek() {
        return data.getFront();
    }
}
