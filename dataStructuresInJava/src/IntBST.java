public class IntBST {
    private IntBSTNode root;

    public IntBST() {
        this.root = null;
    }

    public IntBSTNode add(Integer val) {
        if (root == null) {
            root = new IntBSTNode(val);
        }
        return addRecursive(root, val);
    }

    public IntBSTNode find(Integer val) {
        return findRecursive(root, val);
    }

    private IntBSTNode findRecursive(IntBSTNode root, Integer val) {
        if (root.hasLeftChild() && root.getValue() > val) {
            return findRecursive(root.getLeftChild(), val);
        } else if (root.hasRightChild() && root.getValue() < val) {
            return findRecursive(root.getRightChild(), val);
        } else if (root.getValue() == val) {
            return root;
        } else 
            return null;
    }

    private IntBSTNode addRecursive(IntBSTNode root, Integer val) {
        if (val < root.getValue()) {
            if (root.hasLeftChild())
                return addRecursive(root.getLeftChild(), val);
            else {
                IntBSTNode child = new IntBSTNode(val);
                root.setLeftChild(child);
                return child;
            }
        } else if (val > root.getValue()) {
            if (root.hasRightChild())
                return addRecursive(root.getRightChild(), val);
            else {
                IntBSTNode child = new IntBSTNode(val);
                root.setRightChild(child);
                return child;
            }
        } else {
            return root;
        }
    }




    
   public void preOrderPrintTraversal() {
    preOrderPrintTraversal(root);
 }

 private void preOrderPrintTraversal(IntBSTNode root) {
    System.out.println(root.getValue());
    if (root.hasLeftChild()) {
       preOrderPrintTraversal(root.getLeftChild());
    }

    if (root.hasRightChild()) {
       preOrderPrintTraversal(root.getRightChild());
    }
 }

 public void postOrderPrintTraversal() {
    postOrderPrintTraversal(root);
 }

 private void postOrderPrintTraversal(IntBSTNode root) {
    if (root.hasLeftChild()) {
        postOrderPrintTraversal(root.getLeftChild());
    }

    if (root.hasRightChild()) {
        postOrderPrintTraversal(root.getRightChild());
    }

    System.out.println(root.getValue());

 }

 public void inOrderPrintTraversal() {
    inOrderPrintTraversal(root);
 }

 private void inOrderPrintTraversal(IntBSTNode root) {
    if (root.hasLeftChild()) {
        inOrderPrintTraversal(root.getLeftChild());
    }

    System.out.println(root.getValue());

    if (root.hasRightChild()) {
        inOrderPrintTraversal(root.getRightChild());
    }

 }
}
