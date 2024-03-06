CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    user_fname VARCHAR(255) NOT NULL,
    user_lname VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_phone VARCHAR(255) NOT NULL,
);

CREATE TABLE dormitory (
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
    dormitory_duedate VARCHAR(255) NOT NULL,
    FOREIGN KEY (dormitory_user_id) REFERENCES user(user_id)
);

CREATE TABLE renter (
    renter_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    renter_dor_id INT NOT NULL,
    renter_name1 VARCHAR(255) NOT NULL,
    renter_name2 VARCHAR(255) NOT NULL,
    renter_phone1 VARCHAR(255) NOT NULL,
    renter_phone2 VARCHAR(255) NOT NULL,
    renter_num_room VARCHAR(255) NOT NULL,
    renter_type ENUM('ห้องธรรมดา(พัดลม)','ห้องธรรมดา(แอร์)', 'ห้องสูท(แอร์)') NOT NULL,
    renter_price INT NOT NULL,
    renter_email VARCHAR(255) NOT NULL,
    FOREIGN KEY (renter_dor_id) REFERENCES dormitory(dormitory_id)
);

CREATE TABLE payment (
    payment_id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    payment_dor_id INT NOT NULL,
    payment_renter_id VARCHAR(255) NOT NULL,
    payment_date VARCHAR(255) NOT NULL,
    payment_water INT NOT NULL,
    payment_light INT NOT NULL,
    payment_status ENUM('ชำระ', 'ยังไม่ชำระ') NOT NULL,
    FOREIGN KEY (payment_dor_id) REFERENCES dormitory(dormitory_id)
    FOREIGN KEY (payment_renter_id) REFERENCES renter(renter_id)
);