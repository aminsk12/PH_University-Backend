

export type TUser = {
    id: string;
    password: string;
    email:string;
    needsPasswordChange: boolean;
    role: "student" | "faculty" | "admin"
    status: "Activ" | "Bolcked";
    isDeleted: boolean

}
