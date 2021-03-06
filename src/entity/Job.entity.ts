import { Entity, Column } from "typeorm";
import { ConstructEntity } from "./ConstructEntity.entity";
import { STATUS } from "../typings/enum";

@Entity("job")
export class Job extends ConstructEntity {
  @Column({ type: "enum", enum: STATUS, default:STATUS.STARTED })
  status: STATUS;

  @Column({ update: false })
  url: string;

  @Column({ nullable: true })
  file_location: string;
}
