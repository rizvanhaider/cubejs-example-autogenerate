cube(`Users`, {
  sql: `SELECT * FROM ecom.users`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, city, createdAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  }
});
