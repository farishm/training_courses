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

  let venues = [
       {id: 1, name: 'Net Hall 1', description: 'Net Hall 1', number: 1, reference: 'V001', capacity: 30, status: 'Free', phone:'07819912199', email: 'first1@gmail.com', line1: '123 Main Street',  city: 'City1', postcode: 'W10 5HJ',  county: 'County 1'},
       {id: 2, name: 'Net Hall 2', description: 'Net Hall 1', number: 2, reference: 'V002', capacity: 50, status: 'Free', phone:'07219912199', email: 'first2@gmail.com', line1: '123 Main Street',  city: 'City1', postcode: 'W10 5HJ',  county: 'County 1'},
       {id: 3, name: 'Net Hall 3', description: 'Net Hall 1', number: 3, reference: 'V003', capacity: 60, status: 'Free', phone:'07869912199', email: 'first3@gmail.com', line1: '123 Main Street',  city: 'City1', postcode: 'W10 5HJ',  county: 'County 1'},
       {id: 4, name: 'Net Hall 4', description: 'Net Hall 1', number: 4, reference: 'V004', capacity: 30, status: 'Free', phone:'07819912199', email: 'first4@gmail.com', line1: '123 Main Street',  city: 'City1', postcode: 'W10 5HJ',  county: 'County 1'},
       {id: 5, name: 'Net Hall 5', description: 'Net Hall 1', number: 5, reference: 'V005', capacity: 30, status: 'Free', phone:'07819512199', email: 'first5@gmail.com', line1: '123 Main Street',  city: 'City1', postcode: 'W10 5HJ',  county: 'County 1'},
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

    let members = [
       {
          id: 1,
          title: 'Mr', firstName: 'first1',}
          ];

    return {courses, venues, students, members};
  }
}