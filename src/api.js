export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `http://learn.codeit.kr/9984/film-reviews?${query}`
  );
  const body = await response.json();
  return body;
}