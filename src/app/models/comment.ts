export interface Comment {
    id:number;
    username : string,
    body:string;
    likes:number;
    comments:Array<any>;
    timeStamp:number;
}
