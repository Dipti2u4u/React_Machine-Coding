export const generateUsers = (count = 10000) => {
  return Array.from({ length: count }, (_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));
};
