import { BaseEntity } from "./BaseEntity";

export class DeviceManager extends BaseEntity {
    Code: String | undefined
    Name: String | undefined
    Type: String | undefined
    TypeName: String | undefined
    Size: String | undefined
}