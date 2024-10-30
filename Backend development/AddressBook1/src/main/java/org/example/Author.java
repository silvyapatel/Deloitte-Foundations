package org.example;

public class Author {
    private String name;

    private int numOfPub;

    @Override
    public String toString() {
        return "Author{" +
                "name='" + name + '\'' +
                ", numOfPub=" + numOfPub +
                '}';
    }

    public Author(String name, int numOfPub) {
        this.name = name;
        this.numOfPub = numOfPub;
    }

    public Author(){

    }

    public int getNumOfPub() {
        return numOfPub;
    }

    public void setNumOfPub(int numOfPub) {
        this.numOfPub = numOfPub;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
