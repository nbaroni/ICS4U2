public class testArrayLLStack {
    public static void main(String[] args) {
        System.out.println("Test testArrayStack passed: (T/F) " + testArrayStack()); 
    }

    private static String testArrayStack() {
        IntArrayStack stack = new IntArrayStack();

        stack.push(2);
        stack.push(3);
        if (stack.peek() != 3 ) return "false test 1";   

        stack.pop();
        if (stack.peek() != 2) return "false test 2"; 

        if (stack.isEmpty()) return "false test 3";
        stack.pop();
        
        if (stack.isEmpty() == false) return "false test 4";

        
        if (stack.search(1) != -1) return "false test 5";

        stack.push(2);
        stack.push(3);
        stack.push(2);
        stack.push(5);
        stack.push(2);
        stack.push(3);
        stack.push(2);
        stack.push(3);

        
        if (stack.search(5) != 4) return "false test 6";

        return "true; test passed";


    }
}
