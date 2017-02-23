SELECT * FROM world.countries;

SELECT * FROM countries JOIN languages ON countries.id = languages.country_id;

SELECT countries.name, languages.language, languages.percentage
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE languages.language = "Slovene";

SELECT countries.name, countries.surface_area, countries.population
FROM countries
WHERE countries.surface_area < 501 AND countries.population > 100000;

SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy
FROM countries
WHERE countries.government_form = "Constitutional Monarchy" AND countries.capital > 200 AND countries.life_expectancy >75;


SELECT countries.name, count(cities.name) FROM cities
JOIN countries ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY COUNT(countries.name)DESC;

SELECT countries.name AS country, cities.name AS city, cities.population FROM cities
JOIN countries ON countries.id = cities.country_id
WHERE countries.name = "Mexico" AND cities.population > 500000
ORDER BY cities.population DESC;


SELECT countries.name, cities.name, cities.district, cities.population
FROM cities
WHERE countries.name = "Argentina" AND cities.district = "Buenos Aires" AND cities.population = 500000;

SELECT countries.name, languages.language,languages.percentage 
FROM languages
JOIN countries ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;








