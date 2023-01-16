public class IntArrayStack {
    Integer[] data;
    int top = 0;
    int length = 10;



    public IntArrayStack () {
        data = new Integer[10];
        top = -1;
    }

    public Integer push (Integer el) {
        if (top >= length) {
            Integer newArr[] = new Integer[length * 2];
            for (int i = 0; i < data.length; i++) {
                newArr[i] = data[i];
            }
            length = length * 2;
            data = newArr;
        }


        top++;
        data[top] = el;
        return data[top];
    
    }

    public Integer pop() {
        Integer temp = data[0];

        if (data[0] != null) {
            data = removeFirstElement(data);
        }

        return temp;
    }

    public int search (Integer param) {
        for (int i = 0; i < top; i ++) {
            if (data[i] == param) {
                return top - i;
            }
        }
        return -1;
    }

    public Integer peek () {
        return data[top];
    }

    public boolean isEmpty () {
        return data[0] == null;
    }

    public Integer[] removeFirstElement(Integer[] arr) {
        arr[top] = null;
        top--;
        return arr;
    }
}
