import { BaseEntity } from "./BaseEntity";

export class ArmyUnit extends BaseEntity {
    ParentId: String | undefined;
    Code: String | undefined;
    Name: String | undefined;
    Address: String | undefined;
    Tel: String | undefined;
    Type: String | undefined;
    Description: String | undefined;
}