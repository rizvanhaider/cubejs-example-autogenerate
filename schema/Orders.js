const CubeDefination = require('../cubeautomation');
const cubeDefination = new CubeDefination();

cube(`Orders`, {
    sql: cubeDefination.cubeQuery(`orders`),
  
    joins: {
      Users: {
        sql: `${CUBE}.user_id = ${Users}.id`,
        relationship: `belongsTo`
      }
    },
  
    measures: cubeDefination.measuresDefination(),
  
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

