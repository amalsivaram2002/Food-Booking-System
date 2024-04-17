class Customer
{
    public static int n=0;
    public void newCustomer()
    {
        n++;
        System.out.println("hello="+n+"customer");
    }
}
public class Stat
{
    public static void main(String[] args)
    {
        Customer n1=new Customer();
        n1.newCustomer();
        Customer n2=new Customer();
        n2.newCustomer();
    }
}