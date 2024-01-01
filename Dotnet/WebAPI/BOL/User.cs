namespace BOL;
public class User{
    private int Uid{get;set;}
    public string Uname{get;set;}
    public string Pwd{get;set;}
    private string Email{get;set;}

    public User(string username,string password){
        this.Uname=username;
        this.Pwd=password;
    }
}