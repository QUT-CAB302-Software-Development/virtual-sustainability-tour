
// initialize database schema here

// Do not delete this, may break database initialization if deleted
create table if not exists placeholder();

create table if not exists users (
    user_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username varchar(255) unique,
    password varchar(255)
);

create table if not exists locations (
    location_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    location_name varchar(255),
    location_description varchar(65535),
    latitude double,
    longitude double
);

create table if not exists location_share (
    user_id BIGINT,
    location_id BIGINT,
    share_description varchar(65535),
    share_date timestamp,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (location_id) REFERENCES locations (location_id)
);


