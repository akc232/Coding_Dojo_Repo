SELECT * FROM Friendships.users;

-- INSERT INTO users (first_name, last_name, created_at, updated_at) VALUES("Mica", "Love", now(), now());
-- 
-- UPDATE users SET first_name = "Mica" WHERE id = 7; 

-- SELECT *
-- FROM users
-- LEFT JOIN friendships ON users.id = friendships.users_id
-- LEFT JOIN users AS users2 ON users2.id = friendships.friend_id;



SELECT users.first_name, users.last_name, 
friend.first_name as friend_first, 
friend.last_name as friend_last

FROM users
LEFT JOIN friendships ON users.id = friendships.users_id
LEFT JOIN users AS friend ON friendships.friend_id = friend.id;

##not sure why this show null in friends but it joins together???











-- LEFT JOIN friendships ON users.id = friendships.users.id
-- LEFT JOIN users as users2 on friendships.users.id;