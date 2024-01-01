namespace BOL;
public class JobListing{
    public int Jobid{get;set;}
    public string Title{get;set;}
    public string Requiredskill{get;set;}
    public string Description{get;set;}
    public string Location{get;set;}
    public string Deadline{get;set;}

    public JobListing(int id,string titleName,string skills,string desc,string loc,string lastdate){
        Jobid=id;
        Title=titleName;
        Requiredskill=skills;
        Description=desc;
        Location=loc;
        Deadline=lastdate;
    }
}