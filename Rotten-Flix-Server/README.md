# Rotten-Flix-Server Documentation

API for Rotten-Flix movie review/rating project.

https://rotten-flix-api.herokuapp.com/movies

## Routes

### Movies
| Type    | Route           | Description   |
| ------- | --------------- | ------------- |
| GET     | /movies         | Fetches All Movies in Collection |
| GET     | /movies/:id     | Fetches Movie That Matches :id |
| POST    | /movies         | Creates New Movie |
| PUT     | /movies/:id     | Updates Existing Movie That Matches :id |
| DELETE  | /movies/:id     | Deletes Existing Movie That Matches :id |

### Ratings

| Type    | Route            | Description   |
| ------- | ---------------  | ------------- |
| GET     | /ratings         | Fetches All Ratings in Collection |
| GET     | /ratings/:id     | Fetches Ratings That Matches :id |
| POST    | /ratings         | Creates New Rating |
| PUT     | /ratings/:id     | Updates Existing Rating That Matches :id |
| DELETE  | /ratings/:id     | Deletes Existing Rating That Matches :id |


### Review
| Type | Route | Description |
| ------ | ---- | ------- |
| GET | /reviews | Fetches All Reviews in Collection |
| POST | /reviews | Create New Review |
| GET | /reviews/:id| Fetches Ratings That Matches :id |
| PUT | /reviews/:id | Update Existing Rating That Matches :id |
| Delete | /reviews | Delete Existing Rating That Matches :id |


### User
| Type | Route | Description |
| ------ | ---- | ------- |
| GET | /users | Fetches All Users in Collection |
| POST | /users | Create New User|
| GET | /users/:id| Fetches Users That Matches :id|
| PUT | /users/:id | Update Existing User That Matches :id |
| Delete | /users | Delete Existing User That Matches :id |
