import { BaseEntity } from "./BaseEntity";

export class Student extends BaseEntity {
    Code: String|undefined
    FullName: String|undefined
    Mobile: String|undefined
    DateOfBirth: Date|undefined
    Rank: String|undefined
    RankName: String|undefined
    Position: String|undefined
    PositionName: String|undefined
    ArmyUnitId: String|undefined
    ArmyUnitName: String|undefined
    Address: String|undefined
    ClassId: String|undefined
    ClassName: String|undefined
    StartTime: Date|undefined
    Point: Number|undefined
}