
declare var process: any

export function getUrl(path: string){
    var basePath = "https://apertum-interview.herokuapp.com/api";

    console.log(process.env.NODE_ENV)

    if(process.env.NODE_ENV === 'production') {
        basePath = ""
    }

    return `${basePath}${path}`;
} 