public class TestIntBST {
    public static void main(String[] args) {
        IntBST bst = new IntBST();

        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);
        bst.add(11);

        System.out.println("\n\nin:");
        bst.inOrderPrintTraversal();

        System.out.println("\n\npre:");
        bst.preOrderPrintTraversal();

        System.out.println("\n\npost:");
        bst.postOrderPrintTraversal();

    }
}
