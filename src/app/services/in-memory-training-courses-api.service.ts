import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let courses = [
      {id: 1, title: 'ASP .Net Basics',description: 'ASP .Net Course for beginners',reference: 'ASPNETB001',duration: 6, fees: 500, status: 'Created',location: 'Net Hall 1',totalplaces: 100, availableplaces: 90},
      {id: 2, title: 'ASP .Net Advanced',description: 'ASP .Net Course for middle level programmers',reference: 'ASPNETA001',duration: 10, fees: 1500, status: 'Opened',location: 'Net Hall 3',totalplaces: 100, availableplaces: 60},
      {id: 3, title: 'JavaScript with 12 Projects',description: 'JavaScript Course with 12 interactive Project work',reference: 'JSCRM001',duration: 9, fees: 1000, status: 'Opened',location: 'Net Hall 2',totalplaces: 100, availableplaces: 50},
      {id: 4, title: 'AngularJS',description: 'AngularJS Course for developers with some JavaScript knowledge',reference: 'JSCRM006',duration: 6, fees: 1000, status: 'Opened',location: 'Net Hall 5',totalplaces: 100, availableplaces: 30},
       {id: 5, title: 'ReactJS',description: 'ReactJS Course for developers with some JavaScript knowledge',reference: 'JSCRM007',duration: 6, fees: 1000, status: 'Opened',location: 'Net Hall 5',totalplaces: 100, availableplaces: 90},
      {id: 6, title: 'HTML5 Basics',description: 'HTML5 Basics',reference: 'HTMLB001',duration: 6, fees: 500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 10},
      {id: 7, title: 'Bootstrap',description: 'Bootstrap',reference: 'BSTB001',duration: 6, fees: 500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 0},
      {id: 8, title: 'JQuery and Ajax',description: 'JQuery and Ajax',reference: 'JSCRM007',duration: 6, fees: 500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 0},
      {id: 9, title: 'SQL Server Development',description: 'SQL Server Development',reference: 'SQL001',duration: 15, fees: 2500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 0},
      {id: 10, title: 'ASP .Net Web API',description: 'ASP .Net Web API Development with Project work',reference: 'ASPNETB010',duration: 18, fees: 2500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 0},
    ];

    let seminars = [
      {id: 1, title: 'ASP .Net Basics',description: 'ASP .Net Course for beginners',reference: 'ASPNETB001',duration: 6, fees: 500, status: 'Created',location: 'Net Hall 1',totalplaces: 100, availableplaces: 90},
      {id: 2, title: 'ASP .Net Advanced',description: 'ASP .Net Course for middle level programmers',reference: 'ASPNETA001',duration: 10, fees: 1500, status: 'Opened',location: 'Net Hall 3',totalplaces: 100, availableplaces: 60},
      {id: 3, title: 'JavaScript with 12 Projects',description: 'JavaScript Course with 12 interactive Project work',reference: 'JSCRM001',duration: 9, fees: 1000, status: 'Opened',location: 'Net Hall 2',totalplaces: 100, availableplaces: 50},
      {id: 4, title: 'AngularJS',description: 'AngularJS Course for developers with some JavaScript knowledge',reference: 'JSCRM006',duration: 6, fees: 1000, status: 'Opened',location: 'Net Hall 5',totalplaces: 100, availableplaces: 30},
       {id: 5, title: 'ReactJS',description: 'ReactJS Course for developers with some JavaScript knowledge',reference: 'JSCRM007',duration: 6, fees: 1000, status: 'Opened',location: 'Net Hall 5',totalplaces: 100, availableplaces: 90},
      {id: 6, title: 'HTML5 Basics',description: 'HTML5 Basics',reference: 'HTMLB001',duration: 6, fees: 500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 10},
      {id: 7, title: 'Bootstrap',description: 'Bootstrap',reference: 'BSTB001',duration: 6, fees: 500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 0},
      {id: 8, title: 'JQuery and Ajax',description: 'JQuery and Ajax',reference: 'JSCRM007',duration: 6, fees: 500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 0},
      {id: 9, title: 'SQL Server Development',description: 'SQL Server Development',reference: 'SQL001',duration: 15, fees: 2500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 0},
      {id: 10, title: 'ASP .Net Web API',description: 'ASP .Net Web API Development with Project work',reference: 'ASPNETB010',duration: 18, fees: 2500, status: 'Opened',location: 'Net Hall 1',totalplaces: 100, availableplaces: 0},
    ];

    let colleges = [
       {id: 1, name: 'College 1', description: 'College 1', number: 1, reference: 'C001', capacity: 30, status: 'Free', phone:'07819912199', email: 'first1@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 2, name: 'College 2', description: 'College 1', number: 2, reference: 'C002', capacity: 50, status: 'Free', phone:'07219912199', email: 'first2@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 3, name: 'College 3', description: 'College 1', number: 3, reference: 'C003', capacity: 60, status: 'Free', phone:'07869912199', email: 'first3@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 4, name: 'College 4', description: 'College 1', number: 4, reference: 'C004', capacity: 30, status: 'Free', phone:'07819912199', email: 'first4@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 5, name: 'College 5', description: 'College 1', number: 5, reference: 'C005', capacity: 30, status: 'Free', phone:'07819512199', email: 'first5@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
    ];

 
     let halls = [
       {id: 1, name: 'Net Hall 1', description: 'Net Hall 1', number: 1, reference: 'V001', capacity: 30, status: 'Free', phone:'07819912199', email: 'first1@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 2, name: 'Net Hall 2', description: 'Net Hall 1', number: 2, reference: 'V002', capacity: 50, status: 'Free', phone:'07219912199', email: 'first2@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 3, name: 'Net Hall 3', description: 'Net Hall 1', number: 3, reference: 'V003', capacity: 60, status: 'Free', phone:'07869912199', email: 'first3@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 4, name: 'Net Hall 4', description: 'Net Hall 1', number: 4, reference: 'V004', capacity: 30, status: 'Free', phone:'07819912199', email: 'first4@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 5, name: 'Net Hall 5', description: 'Net Hall 1', number: 5, reference: 'V005', capacity: 30, status: 'Free', phone:'07819512199', email: 'first5@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
    ];

    let venues = [
       {id: 1, name: 'Venue 1', description: 'Venue 1', number: 1, reference: 'V001', capacity: 30, status: 'Free', phone:'07819912199', email: 'first1@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 2, name: 'Venue 2', description: 'Venue 1', number: 2, reference: 'V002', capacity: 50, status: 'Free', phone:'07219912199', email: 'first2@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 3, name: 'Venue 3', description: 'Venue 1', number: 3, reference: 'V003', capacity: 60, status: 'Free', phone:'07869912199', email: 'first3@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 4, name: 'Venue 4', description: 'Venue 1', number: 4, reference: 'V004', capacity: 30, status: 'Free', phone:'07819912199', email: 'first4@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 5, name: 'Venue 5', description: 'Venue 1', number: 5, reference: 'V005', capacity: 30, status: 'Free', phone:'07819512199', email: 'first5@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
    ];

     let instructors = [
       {id: 1, title: 'Mr', firstName: 'first1', lastName:'last1', phone:'07819912199', email: 'first1@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 2, title: 'Mr', firstName: 'first2', lastName:'last2', phone:'07219912199', email: 'first2@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 3, title: 'Mr', firstName: 'first3', lastName:'last3', phone:'07869912199', email: 'first3@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 4, title: 'Mr', firstName: 'first4', lastName:'last4', phone:'07819912199', email: 'first4@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
       {id: 5, title: 'Mr', firstName: 'first5', lastName:'last5', phone:'07819512199', email: 'first5@gmail.com', line1: '123 Main Street',  city: 'City1',  county: 'County 1', postcode: 'W10 5HJ'},
    ];


    let students = [
       {
          id: 1,
          title: 'Mr', firstName: 'first1', lastName:'last1', email: 'first1@gmail.com',
          addresses: [
            {type: 'Main', line1: '123 Main Street',  city: 'City1', postcode: 'W10 5HJ',  county: 'County 1'},
            {type: 'Delivery', line1: '56, BA Street',  city: 'City2', postcode: 'W10 5HJ',  county: 'County 2'},
          ],
          phones: [ 
              {type: 'Mobile', number: '07823555566'},
              {type: 'Home', number: '012344555566'},
          ],
          level: 'basic',
          agreedTerms: 'true'
        },
        {
          id: 2,
          title: 'Mr', firstName: 'first2', lastName:'last2', email: 'first2@gmail.com',
          addresses: [
            {type: 'Main', line1: '156, LA Street',  city: 'City2', postcode: 'W10 5HJ',  county: 'County 3'},
          ],
          phones: [ 
              {type: 'Mobile', number: '07823555566'},
              {type: 'Home', number: '012344555566'},
              {type: 'Office', number: '012344555566'},
          ],
          level: 'intermediate',
          agreedTerms: ''
        },
        {
          id: 3,
          title: 'Mr', firstName: 'first3', lastName:'last3', email: 'first3@gmail.com',
          addresses: [ ],
          phones: [ ],
          level: 'advanced',
          agreedTerms: ''
        },
    ];

    let users = [
        { id:1, title: 'mr', firstName: 'first1', lastName:'last1', email: 'first1@gmail.com',phone:'0233444455555' },
        { id:2, title: 'mr', firstName: 'first2', lastName:'last2', email: 'first2@gmail.com',phone:'0233489955555' },  
        { id:3, title: 'mr', firstName: 'first3', lastName:'last3', email: 'first3@gmail.com',phone:'0233444455555' },
        { id:4, title: 'mr', firstName: 'first4', lastName:'last4', email: 'first4@gmail.com',phone:'0244444455555' },  
        { id:5, title: 'mr', firstName: 'first5', lastName:'last5', email: 'first5@gmail.com',phone:'0255555555555' },
        { id:6, title: 'mr', firstName: 'first6', lastName:'last6', email: 'first6@gmail.com',phone:'0266666666666' },
        { id:7, title: 'mr', firstName: 'first7', lastName:'last7', email: 'first7@gmail.com',phone:'0277777777777' },
        { id:8, title: 'mr', firstName: 'first8', lastName:'last8', email: 'first8@gmail.com',phone:'0288888888888' },
        { id:9, title: 'mr', firstName: 'first9', lastName:'last9', email: 'first9@gmail.com',phone:'0299999999999' },
        { id:10, title: 'mr', firstName: 'first10', lastName:'last10', email: 'first10@gmail.com',phone:'02101010101010' },
        { id:11, title: 'mr', firstName: 'first11', lastName:'last11', email: 'first11@gmail.com',phone:'021010101010101' },
    ];


    let members = [
       {
          id: 1,
          title: 'Mr', firstName: 'first1',}
          ];

    return {courses, seminars, colleges, venues, halls, instructors,students, members, users};
  }
}