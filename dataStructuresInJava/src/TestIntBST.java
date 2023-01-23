public class TestIntBST {
    public static void main(String[] args) {
        System.out.println("Test testTraversal passed: " + testTraversal());
        System.out.println("Test testBasic passed: " + testBasic());

    }

    private static boolean testBasic() {
        IntBST bst = new IntBST();

        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);

        bst.add(11);

        if (bst.find(1).getValue() != 1)
            return false;

        if (bst.find(2) != null)
            return false;

        bst.remove(11);

        if (bst.find(11) != null)
            return false;

        return true;
    }

    private static boolean testTraversal() {
        IntBST bst = new IntBST();

        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);
        bst.add(11);

        if (!bst.inOrderTraversal().equals("1 3 6 7 8 9 11 13 "))
            return false;

        if (!bst.preOrderTraversal().equals("6 3 1 8 7 13 9 11 "))
            return false;

        if (!bst.postOrderTraversal().equals("1 3 7 11 9 13 8 6 "))
            return false;

        return true;

    }

}
