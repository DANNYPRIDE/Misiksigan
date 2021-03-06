// import { timeInfo } from "src/routers";
import {AppDataSource} from "../data-source"
import {Time} from '../entity/Time'
import { timeInfo } from "../../routers";
/**
 * Loads all posts from the database.
 */
export class TimeModel{
  
  async findTimeByTimeId(timeId: number) {
    console.log(22222);
    const timeRepository= AppDataSource.getRepository(Time);
    // get a post repository to perform operations with post
    console.log(33333);
    console.log(timeRepository)
    const time = await timeRepository.findOneBy({
      timeId: timeId
    });
    console.log(44444);
    return (time);
  }

  async create(timeInfo:timeInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Time)
    .values([
      timeInfo,
    ])
    .execute()
  }

  async updateRemainder(timeId:number, remainder:number){
    await AppDataSource
      .createQueryBuilder()
      .update(Time)
      .set({ remainder: remainder})
      .where("timeId = :timeId", { timeId: timeId })
      .execute()
  }

  async deleteTime(timeId:number){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Time)
    .where('timeId = :timeId',{timeId:timeId})
    .execute()
  }
  async findTimeByQuery(REGNumber:string, year:number,month:number,date:number){
    let times;
    const timeRepository= AppDataSource.getRepository(Time)
    if(date){
    times= await timeRepository
    .find({
      where:{
        REGNumber:REGNumber,
          year:year,
          month:month,
          date:date,
        }
      })
    }
    else{
      times= await timeRepository
      .find({
        where:{
          REGNumber:REGNumber,
            year:year,
            month:month,
          }
        })
    }
    return times;
  }
  async updateTime( timeId:number, year:number, month:number, date:number, hour:number){
    await AppDataSource
      .createQueryBuilder()
      .update(Time)
      .set({
        year:year,
        month:month,
        date:date,
        hour:hour,
      })
      .where("timeId = :timeId", { timeId: timeId })
      .execute()
  }
  async findTime(timeId:number){
    const timeRepository= AppDataSource.getRepository(Time)
    const time = await timeRepository
    .find({
      where:{
        timeId:timeId
      }
    })
    return time;
  }
}

const timeModel= new TimeModel();
export{timeModel};