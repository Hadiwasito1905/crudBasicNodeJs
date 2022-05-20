const db = require("../config");
// const {response} = require("express");

exports.getHero = (response) => {
    //query data
    const sql = "SELECT * FROM `hero_ml`";

        //execute data
    db.query(sql, (error, result) => {
        if (error) return console.log("error: ", error);

        //response data
        const heroes = {
            title: "MOBILE LEGEND HERO LIST",
            data: JSON.parse(JSON.stringify(result)),
        };
        response.render("index", { heroes });
        response.end();
    });
};

exports.getHeroDetail = (response) => {
    //query data
    const sql = "SELECT *\n" +
        "FROM hero_ml\n" +
        "INNER JOIN hero_skill\n" +
        "ON hero_ml.id = hero_skill.hero_id;"

    //execute data
    db.query(sql, (error, result) => {
        if (error) return console.log("error: ", error);

        // response data
        const skill= {
            title: "MOBILE LEGEND HERO SKILL",
            data: JSON.parse(JSON.stringify(result))
        }

        response.render('heroSkill', { skill })
        response.end()
    });
};

exports.getHeroById = (id, response) => {
    //query data
    const sql = `SELECT * FROM hero_ml WHERE id=${id}`;

    db.query(sql, (error, result) => {
        if (error) return console.log("error: ", error);

        //response data
        const hero = {
            title: "DATA HERO BY ID",
            data: JSON.parse(JSON.stringify(result)),
        };
        response.render("heroDetail", { hero });
        response.end();
    });
};

exports.updateHeroById = (data, response) => {
    const id = data.id;
    const name = data.name;
    const role = data.role;

    const sql = `UPDATE hero_ml SET name='${name}', role='${role}' WHERE id=${id}`;

    db.query(sql, (error, result) => {
        if (error) return console.log("error: ", error);
        response.redirect("/hero");
        response.end();
    });
};

exports.addHero = (data, response) => {
    const name = data.name;
    const role = data.role;

    const sql = `INSERT INTO hero_ml (name, role) VALUES ('${name}', '${role}')`;

    db.query(sql, (error, result) => {
        if (error) return console.log("error: ", error);
        response.redirect("/hero");
        response.end();
    });
};

exports.removeHero = (id, response) => {
    const sql = `DELETE FROM hero_ml WHERE id='${id}'`;

    db.query(sql, (error, result) => {
        if (error) return console.log("error: ", error);
        response.redirect("/hero");
        response.end();
    });
};

exports;