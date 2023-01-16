public class TestLinkedList {   public static void main(String[] args) {
    // testAddNodes();
    // testRemoveNodes();

    System.out.println("Test testAddNodes passed: (T/F) " + testAddNodes()); 
    System.out.println("Test testRemoveNodes passed: (T/F) " + testRemoveNodes()); 
    System.out.println("Test testGetNodes passed: (T/F) " + testGetNodes()); 


 }

 private static IntLinkedList prepareLinkedList() {
    IntLinkedList list = new IntLinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    return list;
 }

 private static boolean testGetNodes() {
    IntLinkedList list = prepareLinkedList();

    Integer i = list.get(0);
    if (i != 1) return false;

    i = list.get(list.size() -1);
    if (i != 5) return false;

    i = list.get(2);
    if (i != 3) return false;

    try {  

        i = list.get(-1);
        return false;
    } catch (IndexOutOfBoundsException ex) {}

    try {  

        i = list.get(-1);
        return false;
    } catch (IndexOutOfBoundsException ex) {}

    return true;

}

private static boolean testRemoveNodes() {
    IntLinkedList list = new IntLinkedList();
    Integer temp = list.remove(6);
    if (temp != null) return false;    

    list = prepareLinkedList();
    if (list.get(0) != 1 || list.size() != 5 || list.get(4) != 5) return false;
    
    

    temp = list.remove(3);
    if (temp != 3 || list.size() != 4) return false;

    temp = list.remove(23);
    if (temp != null) return false;

    list = prepareLinkedList();

    temp = list.removeFront();
    if (temp != 1 || list.size() != 4) return false;

    return true;
    

 }

 private static boolean testAddNodes() {
    IntLinkedList list = prepareLinkedList();

    list.add(6);

    if (list.get(5) != 6 || list.size() != 6) return false;

    list.addFront(4);
    list.addFront(5);
    if (list.get(0) != 5 || list.get(1) != 4 || list.size() != 8) return false;

    list.add(1, 6);
    if (list.get(0) != 5 || list.get(1) != 6 || list.size() != 9) return false;

    list.add(0, 7);
    if (list.get(0) != 7 || list.get(1) != 5 || list.size() != 10) return false;

    list.add(list.size(), 8);
    if (list.get(list.size() -1) != 8) return false;

    return true;
 }


}
