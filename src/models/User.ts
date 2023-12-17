import { BaseEntity } from './BaseEntity'

export class User extends BaseEntity {
  Username: String | undefined
  Password: String | undefined
  Email: String | undefined
  Tel: String | undefined
}
