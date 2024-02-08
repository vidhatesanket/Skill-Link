using System.Reflection.Metadata.Ecma335;
using BOL;
namespace DAL;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
public class DBManager{
    public static string connString=@"server=127.0.0.1;port=3306;user=root;password=Sanket@01;database=projectdb";
    
     
    public static List<User> getAllUsers(){
        List<User> userlist=new List<User>();
        string query="select Username,Password from users";
        MySqlConnection conn=new MySqlConnection();
        conn.ConnectionString=connString;
        MySqlCommand cmd=new MySqlCommand();
        cmd.Connection=conn;
        conn.Open();
        cmd.CommandText=query;
        MySqlDataReader reader=cmd.ExecuteReader();
        while (reader.Read()){
            string username=reader["Username"].ToString();
            string password=reader["Password"].ToString();
            User u=new User(username,password);
            userlist.Add(u);
        }
        conn.Close();
        return userlist;
    }


    public static List<JobListing> jobList(){
        List<JobListing> jobList=new List<JobListing>();
        string query="select * from jobListings";

        MySqlConnection conn=new MySqlConnection();
        conn.ConnectionString=connString;

        MySqlCommand cmd=new MySqlCommand();
        cmd.Connection=conn;
        conn.Open();
        cmd.CommandText=query;
        MySqlDataReader reader=cmd.ExecuteReader();
        while(reader.Read()){

            int jobid=int.Parse(reader["JobId"].ToString());
            string title=reader["Title"].ToString();
            string desc=reader["Description"].ToString();
            string skills=reader["RequiredSkills"].ToString();
            string location=reader["Location"].ToString();
            string deadline=reader["Deadline"].ToString();
            

            JobListing job=new JobListing(jobid,title,desc,skills,location,deadline);
            jobList.Add(job);
        }
        conn.Close();

        return jobList;
    }



    public static int addUser(User u){
        string uname=u.UserName;
        string password=u.Password;
        string email=u.Email;
        string moNumber=u.MobileNumber;
        string query="insert into Users(Username,Password,Email,PhoneNumber) values(@uname,@pwd,@email,@mobnumber)";

        int rowsAffected;
        using (MySqlConnection connection = new MySqlConnection(connString))
        {
            MySqlCommand command = new MySqlCommand(query, connection);
            command.Parameters.AddWithValue("@uname",uname);
            command.Parameters.AddWithValue("@pwd", password);
            command.Parameters.AddWithValue("@email",email);
            command.Parameters.AddWithValue("@mobnumber",moNumber);
            connection.Open();
            rowsAffected = command.ExecuteNonQuery();
            connection.Close();
        }
        return rowsAffected;
    }

}