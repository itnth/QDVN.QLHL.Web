import { BaseEntity } from "./BaseEntity";

export class Student extends BaseEntity {
    SubjectId: String | undefined
    SubjectName: String | undefined
    Code: String | undefined
    Name: String | undefined
    StartDate: Date | undefined
    EndDate: Date | undefined
    ResouceId: String | undefined
    ResouceContent: String | undefined
}