

export default function DateReturn() {

    //using url from browser
    var URL = window.location.href //http://127.0.0.1:8000/2020-07-28
    
    var cutURL = URL.slice(0,32)  //http://127.0.0.1:8000/2020-07-28
    var splitURL = cutURL.split("/")  //["http:" , "" , "127.0.0.1:8000", "2020-07-28"]

    var dateFromURL = splitURL[3] //"2020-07-28"

    return (

        dateFromURL
    )
}
