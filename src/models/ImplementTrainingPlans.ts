import { BaseEntity } from "./BaseEntity";

export class ImplementTrainingPlans extends BaseEntity {
    AssignToId: String | undefined
    AssignToName: String | undefined
    TrainingPlanId: String | undefined
    TrainingPlanName: String | undefined
    TrainingPlanCode: String | undefined
    StudentId: String | undefined
    StudentName: String | undefined
    Score: Number | undefined
    Status: String | undefined
    StatusName: String | undefined
    StartDate: Date | undefined
    EndDate: Date | undefined
}