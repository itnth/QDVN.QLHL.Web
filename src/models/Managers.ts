import { BaseEntity } from "./BaseEntity";

export class Managers extends BaseEntity {
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
}