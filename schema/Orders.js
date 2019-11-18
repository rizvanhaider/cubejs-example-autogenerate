const fetch = require('node-fetch');
const Funnels = require('Funnels');

asyncModule(async () => {
  const cmeasures = await (await fetch('http://127.0.0.1:8080/api.json')).json();

  
  cube(`Orders`, {
    sql: `select * from ecom.orders`,
  
    joins: {
      Users: {
        sql: `${CUBE}.user_id = ${Users}.id`,
        relationship: `belongsTo`
      }
    },
  
    measures: Object.assign({}, cmeasures.map(m => ({
      [`${m.title}`]: {
        type: `${m.type}`,
        sql: `${m.sql}`,
        title: `${m.friendlyTitle}`
      }
    })).reduce((a, b) => Object.assign(a, b))),
  
    dimensions: {
      id: {
        sql: `id`,
        type: `number`,
        primaryKey: true
      },
  
      status: {
        sql: `status`,
        type: `string`
      },
  
      createdAt: {
        sql: `created_at`,
        type: `time`
      },
  
      completedAt: {
        sql: `completed_at`,
        type: `time`
      }
    }
  });



})
