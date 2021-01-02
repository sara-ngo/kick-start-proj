CREATE TABLE commentTb (
    id INT AUTO_INCREMENT NOT NULL,
    comments VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE replyTb (
    id INT AUTO_INCREMENT NOT NULL,
    reply varchar(1000) NOT NULL,
    comment_id INT NOT NULL,
    PRIMARY KEY (id)
);