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

export async function loginUser(credentials) {
  const urllog = 'http://localhost:3001/users/v1';
  const login = '/login';
  try {
    const response = await fetch(`${urllog}/${login}`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
    const repo = await response.json();

    return repo;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}

export async function SignUser(details) {
  const urllog = 'http://localhost:3001/users/v1';
  const signup = '/sign';
  try {
    const response = await fetch(`${urllog}/${signup}`, {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
    const repo = await response.json();

    return repo;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}

export async function postJob(details) {
  const urllog = 'http://localhost:3001/jobs/v1';

  try {
    const response = await fetch(`${urllog}`, {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
    const repo = await response.json();

    return repo;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}
