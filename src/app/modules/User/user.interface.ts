

export type TUser = {
    id: string;
    passward: string;
    needsPasswordChange: boolean;
    role: "student" | "faculty" | "admin"
    status: "Activ" | "Bolcked";
    isDeleted: boolean

}
