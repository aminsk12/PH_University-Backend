export type TMonths= 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December'



export type TAcademicSemister = {
    name: "Autumn" | "Summer" | "Fall";
    code: "01" | "02" | "03";
    year: string;
    startMonth: TMonths;
    endMonth: TMonths;  
}


export type TAcademicSemesterNameCodeMapper = {
    [key:string]:string
}
