
-- ############################################ USERS ##############################################################
DROP TABLE IF EXISTS users;


 -- The reason we use TEXT instead of VARCHAR  is because VARCHAR behaves the same way as TEXT in SqlLite. Even though you Provide a limit on your VARCHAR it is not strictly enforced. --
CREATE TABLE users(
    user_pk                 TEXT,
    user_username           TEXT,
    user_first_name         TEXT,
    user_last_name          TEXT,
    user_email              TEXT UNIQUE,
    user_password           TEXT,
    user_role               TEXT,
    PRIMARY KEY(user_pk)
) WITHOUT ROWID;

INSERT INTO users VALUES(
    "d11854217ecc42b2bb17367fe33dc8f4",
    "johndoe",
    "Jhon",
    "Doe",
    "admin@company.com",
    "$2b$12$V/cXqWN/M2vTnYUcXMB9oODcNBX/QorJekmaDkq1Z7aeD3I5ZAjfu",
    "admin"
   
);

SELECT * FROM users



-- ################################################ POSTS #############################################################

DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    post_pk                 TEXT,
    post_description        TEXT,
    post_image_url          TEXT,
    post_created_at         TEXT,
    post_user_fk            TEXT,
    FOREIGN KEY(post_user_fk) REFERENCES users(user_pk)
    PRIMARY KEY(post_pk)
) WITHOUT ROWID;


INSERT INTO posts VALUES(
    "a1b2c3d4e5f67890",
    "This is a sample post description.",
    "https://picsum.photos/200",
    "2023-10-01T12:00:00Z",
    "d11854217ecc42b2bb17367fe33dc8f4"
);

SELECT * FROM posts;


-- ################################################ USERS_has_POSTS ###################################################


DROP TABLE IF EXISTS users_has_posts;

CREATE TABLE users_has_posts(
    user_fk                 TEXT,
    post_fk                 TEXT,
    FOREIGN KEY(user_fk) REFERENCES users(user_pk),
    FOREIGN KEY(post_fk) REFERENCES posts(post_pk),
    PRIMARY KEY(user_fk, post_fk)
) WITHOUT ROWID;

INSERT INTO users_has_posts VALUES(
    "d11854217ecc42b2bb17367fe33dc8f4",
    "a1b2c3d4e5f67890"
);

SELECT * FROM users_has_posts;


-- ################################################ COMMENTS ###################################################

DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
    comment_pk              TEXT,
    comment_text            TEXT,
    comment_created_at      TEXT,
    comment_post_fk         TEXT,
    FOREIGN KEY(comment_post_fk) REFERENCES posts(post_pk),
    PRIMARY KEY(comment_pk)
) WITHOUT ROWID;

INSERT INTO comments VALUES(
    "c1d2e3f4g5h67890",
    "This is a sample comment.",
    "2023-10-01T12:30:00Z",
    "a1b2c3d4e5f67890"
);

SELECT * FROM comments;

-- ################################################ POSTS_has_COMMENTS ################################################

DROP TABLE IF EXISTS posts_has_comments;

CREATE TABLE posts_has_comments(
    post_fk                 TEXT,
    comment_fk              TEXT,
    FOREIGN KEY(post_fk) REFERENCES posts(post_pk),
    FOREIGN KEY(comment_fk) REFERENCES comments(comment_pk),
    PRIMARY KEY(post_fk, comment_fk)
) WITHOUT ROWID;

INSERT INTO posts_has_comments VALUES(
    "a1b2c3d4e5f67890",
    "c1d2e3f4g5h67890"
);

SELECT * FROM posts_has_comments;
