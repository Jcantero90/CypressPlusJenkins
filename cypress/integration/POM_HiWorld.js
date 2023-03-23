let data

before(() => {
    cy.fixture('data.json').then(d => {
        data = d;
    });
});

class POM_HiWorld {

    HiWorld(url){
        cy.visit(url)
        cy.log(data.HiWorld)
    }

}
export default POM_HiWorld