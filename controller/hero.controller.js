const express = require("express");
const router = express.Router();
const Hero = require("../model/Hero.model");


router.get("/", (request, response) => {
    Hero.getHero(response);
});

router.get("/skill/:id", (request, response) => {
    const id = request.params.id;
    Hero.getHeroDetail(id, response);
});

router.get("/:id", (request, response) => {
    const id = request.params.id;
    Hero.getHeroById(id, response);
});

router.post("/update", (request, response) => {
    const data = {
        id: request.body.id,
        name: request.body.name,
        role: request.body.role,
        sk1: request.body.skill1,
        sk2: request.body.skill2,
        sk3: request.body.skill3,
        ps: request.body.pasifSkill
    };

    Hero.updateHeroById(data, response);
});

router.post("/add", (request, response) => {
    const data = {
        name: request.body.name,
        role: request.body.role,
    };

    Hero.addHero(data, response);
});

router.post("/remove", (request, response) => {
    const id = request.body.id;
    Hero.removeHero(id, response);
});

module.exports = router;