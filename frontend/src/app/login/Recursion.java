public class Recursion
{
    public static int recursi(int n)
    {
        System.out.println("hai");
        int sums=0;
        if (n>1)
        {
            recursi(n-1);
            sums=sums+n;
        }
        System.out.println("hai");
        return sums;
    }
    public static void main(String[] args)
    {
        // int a=recursi(10);
        // System.out.println(a);
    }
}