CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE dormitory (
<<<<<<< Updated upstream
    id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    province VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    parish VARCHAR(255) NOT NULL,
    post VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    room INT NOT NULL,
    floor INT NOT NULL,
    water INT NOT NULL,
    light INT NOT NULL,
    duedate VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
=======
    dormitory_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    dormitory_user_id INT NOT NULL,
    dormitory_name VARCHAR(255) NOT NULL,
    dormitory_address VARCHAR(255) NOT NULL,
    dormitory_province VARCHAR(255) NOT NULL,
    dormitory_district VARCHAR(255) NOT NULL,
    dormitory_parish VARCHAR(255) NOT NULL,
    dormitory_post VARCHAR(255) NOT NULL,
    dormitory_phone VARCHAR(255) NOT NULL,
    dormitory_room INT NOT NULL,
    dormitory_floor INT NOT NULL,
    dormitory_water INT NOT NULL,
    dormitory_light INT NOT NULL,
    dormitory_duedate DATE NOT NULL,
    FOREIGN KEY (dormitory_user_id) REFERENCES user(user_id)
);
>>>>>>> Stashed changes

CREATE TABLE renter (
    id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    dor_id INT NOT NULL,
    name1 VARCHAR(255) NOT NULL,
    name2 VARCHAR(255) NOT NULL,
    phone1 VARCHAR(255) NOT NULL,
    phone2 VARCHAR(255) NOT NULL,
    num_room VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    FOREIGN KEY (dor_id) REFERENCES dormitory(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE payment (
    id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    dor_id INT NOT NULL,
    renter_id INT NOT NULL,
    date VARCHAR(255) NOT NULL,
    water INT NOT NULL,
    light INT NOT NULL,
    status BOOLEAN NOT NULL,
    FOREIGN KEY (dor_id) REFERENCES dormitory(id)
    FOREIGN KEY (renter_id) REFERENCES renter(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;