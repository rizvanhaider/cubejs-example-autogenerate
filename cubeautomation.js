class CubeDefination {
    constructor(){
        console.log("CubeConstructor");
    }
    
    measuresDefination() {
        // in future this will return the response from any api
        return {
           number: {
              sql: `number`,
              type: `sum`
            }
          };
    }    
    cubeQuery(table) {
        return `select * from ecom.${table}`
    }
}
module.exports = CubeDefination;