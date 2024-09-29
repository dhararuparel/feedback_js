const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'dhara16',  // Recommend using environment variables for sensitive info
    host: 'localhost',
    port: 5433,
    database: 'science_day',
});

pool.query(`
    CREATE TABLE FeedbackForm (
        id SERIAL PRIMARY KEY,
        institution_name VARCHAR(255),
        website VARCHAR(255),
        visit_date DATE,
        staff_name VARCHAR(255),
        staff_email VARCHAR(255),
        staff_mobile VARCHAR(15),
        total_students INT,
        accompanying_staff INT,
        sources VARCHAR(255)[],  -- Array to store multiple values
        campuses VARCHAR(255)[], -- Array to store multiple values
        ipr_rating INT,
        fcipt_rating INT,
        knowledge_rating INT,
        explanations_ipr INT,
        explanations_fcipt INT,
        knowledge_before INT,
        knowledge_after INT,
        technical_contents INT,
        ease_of_understanding INT,
        best TEXT,
        worst TEXT,
        suggestions TEXT,
        comments TEXT
    );
`)
.then(response => {
    console.log("Table created successfully");
    console.log(response);
})
.catch(err => {
    console.log("Error: ", err);
});

module.exports = pool;
