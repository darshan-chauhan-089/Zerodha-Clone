export const getCookie = (name) =>  {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  const found = cookies.find(row => row.startsWith(name + "="));
  return found ? found.split("=")[1] : null;
}