import {IResort} from './Entity/ResortInterface';
import {of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';

export const resorts: IResort[] = [
    {
        id: 1,
        img: 'assets/images/hotel1.jpeg',
        address: 'Ekb hotel 1',
        phone:  '+7123456789',
        weather: {
            title: 'Sunny bolearic islands',
            icon: 'sunny',
            water: 23,
            temperature: 34
        },
        social_info: {
            title: 'Be the part of sunny Spain',
            img: 'assets/images/hotel1.jpeg',
            followers: 345,
            following: 2567
        },
        type: 'hotels'
    },
    {
        id: 2,
        img: 'assets/images/hotel2.jpeg',
        address: 'Ekb hotel 2',
        phone:  '+7123456789',
        weather: {
            title: 'Do not forget the sunscreen',
            icon: 'sunny',
            water: 30,
            temperature: 40
        },
        social_info: {
            title: 'You gotta go here! :)',
            img: 'assets/images/hotel2.jpeg',
            followers: 156000,
            following: 80000
        },
        type: 'hotels'
    },
    {
        id: 3,
        img: 'assets/images/hotel3.jpeg',
        address: 'Ekb hotel 3',
        phone:  '+71234567894',
        weather: {
            title: 'Don\'t forget raincoat',
            icon: 'rainy',
            water: 14,
            temperature: 18
        },
        social_info: {
            title: 'Only for men',
            img: 'assets/images/hotel3.jpeg',
            followers: 1000,
            following: 999
        },
        type: 'hotels'
    },
    {
        id: 4,
        img: 'assets/images/tour1.jpeg',
        address: 'Ekb tour 1',
        phone:  '+7123456789',
        weather: {
            title: 'Go to bed',
            icon: 'night',
            water: 10,
            temperature: 28
        },
        social_info: {
            title: 'Tours for babushkas',
            img: 'assets/images/tour1.jpeg',
            followers: 1,
            following: 1024
        },
        type: 'tours'
    },
    {
        id: 5,
        img: 'assets/images/tour2.jpeg',
        address: 'Ekb tour 2',
        phone:  '0986071482',
        weather: {
            title: 'Time to sleep',
            icon: 'night',
            water: 9,
            temperature: 27
        },
        social_info: {
            title: 'Tours for dedushkas',
            img: 'assets/images/tour2.jpeg',
            followers: 3,
            following: 1024
        },
        type: 'tours'
    },
    {
        id: 6,
        img: 'assets/images/tour3.jpeg',
        address: 'Ekb tour 3',
        phone:  '0986071482',
        weather: {
            title: 'Time to sleep',
            icon: 'night',
            water: 9,
            temperature: 27
        },
        social_info: {
            title: 'Tours for dedushkas',
            img: 'assets/images/tour3.jpeg',
            followers: 3,
            following: 1024
        },
        type: 'tours'
    },
    {
        id: 7,
        img: 'assets/images/fish1.jpeg',
        address: 'Ekb fish 1',
        phone:  '0986071482',
        weather: {
            title: 'Time to sleep',
            icon: 'night',
            water: 9,
            temperature: 27
        },
        social_info: {
            title: 'Tours for dedushkas',
            img: 'assets/images/fish1.jpeg',
            followers: 3,
            following: 1024
        },
        type: 'fishing'
    },
    {
        id: 8,
        img: 'assets/images/fish2.jpeg',
        address: 'Ekb fish 2',
        phone:  '0986071482',
        weather: {
            title: 'Time to sleep',
            icon: 'night',
            water: 9,
            temperature: 27
        },
        social_info: {
            title: 'Tours for dedushkas',
            img: 'assets/images/fish2.jpeg',
            followers: 3,
            following: 1024
        },
        type: 'fishing'
    },
    {
        id: 9,
        img: 'assets/images/fish3.jpeg',
        address: 'Ekb fish 3',
        phone:  '0986071482',
        weather: {
            title: 'Time to sleep',
            icon: 'night',
            water: 9,
            temperature: 27
        },
        social_info: {
            title: 'Tours for dedushkas',
            img: 'assets/images/fish3.jpeg',
            followers: 3,
            following: 1024
        },
        type: 'fishing'
    }
];

export const resorts$ = of(resorts).pipe(
    delay(3000)
);

