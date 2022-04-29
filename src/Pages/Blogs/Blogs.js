import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>1. Difference between javascript and nodejs</h2>
            <p>

                <strong>Javascript</strong><br />
                1. Javascript is a programming language that is used for writing scripts on the website.<br />
                2. Javascript can only be run in the browsers.<br />
                3. It is basically used on the client-side.<br />
                4. Javascript is capable enough to add HTML and play with the DOM.<br />
                5. Javascript is used in frontend development.<br />
                6. Some of the javascript frameworks are RamdaJS, TypedJS, etc.<br />

                <strong>Node.Js</strong><br />
                1. NodeJS is a Javascript runtime environment.<br />
                2. We can run Javascript outside the browser with the help of NodeJS.<br />
                3. It is mostly used on the server-side.<br />
                4. Nodejs does not have capability to add HTML tags.<br />
                5. Nodejs is used in server-side development<br />
                6. Some of the Nodejs modules are Lodash, express etc.
            </p>


            <h2>2. When should i use nodejs and when should i use mongodb</h2>
            <p>
                Node.js runs Javascript, so i can use the same language on server and client, and even share some code between them.It's primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services. But was designed with real-time, push-based architectures in mind. If my use case does not contain CPU intensive operations nor access any blocking resources, i can exploit the benefits of Node.js and enjoy fast and scalable network applications.<br />

                MongoDB is an open-source document database built on a horizontal scale-out architecture that uses a flexible schema for storing data. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don't need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.
            </p>


            <h2>3. Differences between sql and nosql databases.</h2>
            <p>
                <strong>Sql</strong><br />
                1. Relational Database Management System.<br />
                2. These databases have fixed or static or predefined schemav.<br />
                3. These databases are not suited for hierarchical data storage.<br />
                4. Vertically Scalable.<br />
                5. Follows ACID property.<br />
                <strong>NoSql</strong><br />
                1. Non-relational or distributed database system.<br />
                2. They have dynamic schema<br />
                3. These databases are best suited for hierarchical data storage.<br />
                4. Horizontally scalable.<br />
                5. Follows CAP(consistency, availability, partition tolerance).
            </p>


            <h2>4. What is the purpose of jwt and how does it work</h2>
            <p>
                A JWT is a mechanism to verify the owner of some JSON data. The server generates a token that certifies the user identity, and sends it to the client. The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.<br />
                In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.
            </p>
        </div>
    );
};

export default Blogs;