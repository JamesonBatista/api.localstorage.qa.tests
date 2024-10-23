import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./scratch");

export default function saveData(name, data) {
  
  localStorage.setItem(name, JSON.stringify(data));
}
export function getData(name) {
  const data = localStorage.getItem(name);
  return data ? JSON.parse(data) : [];
}
