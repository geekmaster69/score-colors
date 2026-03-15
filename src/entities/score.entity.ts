import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Score {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    score: number;

    @Column({
        default: ''
    })
    classification: string;




}