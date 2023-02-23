/* eslint-disable no-mixed-spaces-and-tabs */
import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

@Entity("movies")
class Movie {
    
    @PrimaryGeneratedColumn()
    	id: number;
    
    @Column({type: "varchar",length:50, unique: true})
    	name: string;
    
    @Column({type: "varchar",nullable: true})
    	description: string | null | undefined;

    @Column({type: "integer"})
    	duration: number;

    @Column({type: "integer"})
    	price: number;
}

export {
	Movie
};