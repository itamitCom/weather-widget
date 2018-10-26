import {IWeather} from './WeatherInterface';
import {ISocial} from './SocialInterface';

export interface IResort {
    id: number,
    img: string;
    address: string;
    phone: string;
    weather: IWeather;
    social_info: ISocial;
    type: string;
}