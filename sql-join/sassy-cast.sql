select "firstName", "lastName"
from "actors" as "a"
join "castMembers" as "cm" using ("actorId")
join "films" using ("filmId")
where "title" = 'Jersey Sassy'
