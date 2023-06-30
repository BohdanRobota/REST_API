import { Model } from 'sequelize-typescript';
export declare class Dog extends Model {
    name: string;
    color: string;
    tailLength: number;
    weight: number;
}
