export async function getReviews({
  order = "",
  offset = 0,
  limit = 6,
  search = "",
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}&search=${search}`;
  const response = await fetch(
    `http://learn.codeit.kr/9004/film-reviews?${query}`
  );
  if (!response.ok) {
    throw new Error(`loading failed.`);
  }
  const body = await response.json();
  return body;
}
