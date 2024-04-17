class Person {
    private String name;
    private int age;

    // Regular constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Copy constructor
    public Person(Person other) {
        // Copying values using the `this` keyword
        this.name = other.name;
        this.age = other.age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

public class Main {
    public static void main(String[] args) {
        Person originalPerson = new Person("Alice", 30);

        // Create a copy using the copy constructor
        Person copiedPerson = new Person(originalPerson);

        // Modify the original object
        // originalPerson.setName("Bob");

        System.out.println("Original name: " + originalPerson.getName());
        System.out.println("Copied name: " + copiedPerson.getName());
    }
}
