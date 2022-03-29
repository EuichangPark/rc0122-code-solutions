select "g"."name" as "genreName", count(*) as "numberOfMovies"
  from "actors" as "a"
  join "castMembers" as "cm" using ("actorId")
  join "films" as "f" using ("filmId")
  join "filmGenre" as "fg" using ("filmId")
  join "genres" as "g" using ("genreId")
  where "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe'
group by "g"."name"
