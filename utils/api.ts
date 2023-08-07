const createUrl = (path: string) => {
  return window.location.origin + path;
};

export const createUser = async () => {
  const res = await fetch(
    new Request(createUrl('/api/team'), {
      method: 'POST',
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
