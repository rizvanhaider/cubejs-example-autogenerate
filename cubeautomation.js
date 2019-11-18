class CubeDefination {
    constructor(){
        console.log("CubeConstructor");
    }
    
    measuresDefination() {
        // in future this will return the response from any api
        return [ {
            title : 'number',
           value : {
              sql: `number`,
              type: `sum`,
              title: 'this is order number'
            }
        }
        ];
    }    
    cubeQuery(table) {
        return `select * from ecom.${table}`
    }
}
module.exports = CubeDefination;