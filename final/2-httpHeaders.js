const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    // res.writeHead(200,{'content-type':'text/plain'})
    res.write('<h1>Home Page</h1>')
    res.end()
})

server.listen(5000)


// HEADERS - > The header tells the server details about the request such as what type of data the client, user, or request wants in the response. Type can be html , text , JSON , cookies or others.

// writeHead -> contains the meta information
// first argument is status code
// second argument is headers
// for eg-> setting content-type to text/html considers the text be html

// Structure of a MIME TYPE ->
// A MIME type most-commonly consists of just two parts: a type and a subtype, separated by a slash (/) — with no whitespace between:

// type/subtype
// The type represents the general category into which the data type falls, such as video or text.

// The subtype identifies the exact kind of data of the specified type the MIME type represents. For example, for the MIME type text, the subtype might be plain (plain text), html (HTML source code), or calendar (for iCalendar/.ics) files.

// Each type has its own set of possible subtypes. A MIME type always has both a type and a subtype, never just one or the other.

// An optional parameter can be added to provide additional details:

// type/subtype;parameter=value
// For example, for any MIME type whose main type is text, you can add the optional charset parameter to specify the character set used for the characters in the data. If no charset is specified, the default is ASCII (US-ASCII) unless overridden by the user agent's settings. To specify a UTF-8 text file, the MIME type text/plain;charset=UTF-8 is used.

// MIME types are case-insensitive but are traditionally written in lowercase. The parameter values can be case-sensitive.