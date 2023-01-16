public class IntLinkedList {
    private intNode head;
    private int manyItems;
 
    public IntLinkedList() {
       this.head = null;
       this.manyItems = 0;
    }
 
    public boolean add(Integer data) {
       intNode temp = new intNode(data);
 
       if (head == null) {
          head = temp;
          manyItems++;
       } else {
          intNode curr = head;
          while (curr.getLink() != null)
             curr = curr.getLink();
 
          curr.setLink(temp);
          manyItems++;
       }
 
       return true;
    }
 
    public boolean addFront(Integer data) {
       head = new intNode(data, head);
       manyItems++;
       return true;
    }
 
    public boolean add(int index, Integer data) {
       if (index > manyItems)
          throw new IndexOutOfBoundsException("Index " + index + " is not allowed, maz index is " + manyItems);
 
       if (index == 0)
          addFront(data);
       else {
          intNode curr = head;
          for (int i = 0; i < index - 1; i++) {
             curr = curr.getLink();
          }
 
          curr.setLink(new intNode(data, curr.getLink()));
          manyItems++;
       }
 
       return true;
    }
 
    public int size() {
       return manyItems;
    }

    public Integer removeFront() {
        Integer removenum;
        if(head == null) {return null;}
        else {
            removenum = head.getData();
            head = head.getLink();
            manyItems--;
            return removenum;
        }
    }
 
    public boolean isEmpty() {
       return head == null;
    }
 
    public Integer remove(Integer data) {
       if (head == null) {
          return null;
       }
 
       if (head != null && head.getData() == data) {
          head = head.getLink();
          manyItems--;
          return data;
       } else {
          intNode curr = head;
          while (curr.getLink() != null && curr.getLink().getData() != data) {
             curr = curr.getLink();
          }
 
          if (curr.getLink() != null) {
             curr.setLink(curr.getLink().getLink());
             manyItems--;
             return data;
          }
          return null;
       }
    }
 
    public String toString() {
       String result = "{";
       intNode curr = head;
 
       while (curr != null) {
          result += curr.getData() + ", ";
          curr = curr.getLink();
       }
 
       if (!isEmpty()) {
          result = result.substring(0, result.length() - 2);
       }
       result += "}";
 
       return result;
    }

    public int searchy(Integer term) {
        if (head == null)
        {throw new IllegalStateException("Can't get an element from an empty list");}
        intNode curr = head;
        for (int i = 0; i < manyItems; i ++) {
            if (curr.getData() == term) {
                return i;
            }
            curr = curr.getLink();
         }
         return -1;
    }

    public Integer get (int index) {
        if (head == null)
        {throw new IllegalStateException("Can't get an element from an empty list");}
        else if (index > size() || index < 0) {
            throw new IndexOutOfBoundsException("Invalid index " + index + " max index is " + (size( ) -1));
        }
        else {
            intNode curr = head;
            for (int i = 0; i < index; i ++) {
                curr = curr.getLink();
            }

            return curr.getData();
        }
    }
}
