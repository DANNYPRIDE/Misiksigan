import {BaseEntity, Entity, Column, PrimaryColumn, OneToOne, JoinColumn, PrimaryGeneratedColumn} from "typeorm"
import { OwnerReview } from "./OwnerReview";
import { Reserve } from "./Reserve";

@Entity('Review')   // mySQL 예약어 Like와 겹쳐도 되는가...?
export class Review extends BaseEntity{
  @PrimaryGeneratedColumn()
  reserveId: number;

  @Column({
  })
  comment: string;

  @Column()
  email: string;

  @Column()
  rating: number;

  @Column(
    {type: "simple-array"}
  )
  image: string[];

  @OneToOne(()=>Reserve, reserve=>reserve.review, {onDelete:'CASCADE'})
  @JoinColumn()
  reserve:Reserve;

  @OneToOne(()=>OwnerReview, ownerreview=> ownerreview.review)
  ownerreview:OwnerReview;
}