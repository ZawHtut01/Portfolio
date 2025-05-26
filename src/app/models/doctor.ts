// doctor.model.ts

export class Doctor {
    public doctorID: number;
    public firstName: string= "";
    public lastName: string = "";
    public specialty: string = "";
    public contactNumber: string = "";
    public email: string = "";
    public department: string = "";

    constructor() {
        this.doctorID = 0;
    }
}
