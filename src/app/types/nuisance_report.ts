export interface Location{
    latitude:number;
    longitude:number;
    placeName:string;
}
export default interface NuisanceReport {
    reportingPerson: string;
    troubleMakerInfo: string;
    location: Location;
    pictureLink?: string;
    extraInfo: string;
    date: Date;
    status: string;
    phoneNumber?:number;
    id:string;
}

