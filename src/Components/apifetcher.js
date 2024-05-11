export async function getData() {
  const url = 'http://localhost:3001/jobs/v1';

  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error('Try again!');
    }
    const repo = await response.json();
    return repo;
  } catch (err) {
    console.log(err);
  }
}
