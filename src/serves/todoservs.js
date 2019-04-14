export function gettodo(){
    window.fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
}