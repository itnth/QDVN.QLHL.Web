import { BaseEntity } from "./BaseEntity";

export class ArmyUnit extends BaseEntity {
    ParentId: String | undefined;
    ParentName: String | undefined;
    Code: String | undefined;
    Name: String | undefined;
    Address: String | undefined;
    Tel: String | undefined;
    Type: String | undefined;
    TypeName: String | undefined;
    Description: String | undefined;
    children: Array<ArmyUnit> | undefined;
}