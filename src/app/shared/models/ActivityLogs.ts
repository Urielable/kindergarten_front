export class ActivityLogs
{
    baby_name:string;
    assistant_name:string;
    activity_name:string;
    start_time:string;
    status:string;
    duration:string;

    constructor(baby_name,assistant_name, activity_name, start_time, status, duration)
    {
        this.baby_name = baby_name;
        this.assistant_name = assistant_name;
        this.activity_name = activity_name;
        this.start_time = start_time;
        this.status = status;
        this.duration = duration;
    }
}