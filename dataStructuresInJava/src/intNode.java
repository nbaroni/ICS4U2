public class intNode {
    private Integer data;
    private intNode link;
    public Integer getData() {
        
        return data;
    }
    public intNode getLink() {
        
        return link;
    }
    public void setData(Integer data) {
        this.data = data;
    }
    public void setLink(intNode link) {
        this.link = link;
    }
    public intNode(Integer data, intNode link) {
        this.data = data;
        this.link = link;
    }
    public intNode(Integer data) {
        this.data = data;
    }

}


