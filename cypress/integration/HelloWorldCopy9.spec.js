/// <reference types="Cypress"  />

import POM_HiWorld from "./POM_HiWorld";


const pom_hiWorld = new POM_HiWorld

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe("Prueba Cyrpess y Jenkins",()=>{
    it("Hola Mundo!",()=>{
        pom_hiWorld.HiWorld("https://demoqa.com/")
    })
})


