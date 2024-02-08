namespace BOL;
public class User{
    private int UserId{get;set;}
    public string UserName{get;set;}
    public string Password{get;set;}
    public string Email{get;set;}
    public string MobileNumber{get;set;}
    public User(){
        
    }

    public User(string username,string password){
        this.UserName=username;
        this.Password=password;
    }

    // public User(string username,string password,string email,string mobnumber){
    //     this.UserName=username;
    //     this.Password=password;
    //     this.Email=email;
    //     this.MobileNumber=mobnumber;
    // }
}