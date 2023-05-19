import useTitle from "./useTitle";


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div tabIndex={0} className="collapse group">
                <div className="collapse-title text-3xl font-bold ">
                    1.What is an access token and refresh token? How do they work and where should we store them on the client-side?

                </div>
                <div className="collapse-content  text-orange-500 ">
                    <p><span className="text-slate-900 font-bold">Answer:-</span> A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires. You request a refresh token alongside the access and/or ID tokens as part of a users initial authentication and authorization flow. Applications must then securely store refresh tokens since they allow users to remain authenticated.</p>
                    <p>Typically, when a user logs in, the server generates a pair of tokens, an access token and a refresh token. The access token has a short lifetime and is used to authenticate the user and grant them access to protected resources. The refresh token has a longer lifetime and is used to obtain new access tokens after the original access token has expired.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse group">
                <div className="collapse-title text-3xl font-bold ">

                    2.Compare SQL and NoSQL databases?

                </div>
                <div className="collapse-content  text-orange-500 ">
                    <p><span className="text-slate-900 font-bold">Answer:-</span>An SQL database—also known as a relational database—and named for the programming language it’s written in, Structured Query Language (SQL). It’s the more rigid, structured way of storing data. A relational database management system (RDBMS) executes queries, retrieves data, and edits data by updating, deleting, or creating new records. SQL is a lightweight, declarative language that does the heavy lifting for the relational database, acting as a database’s version of a server-side script.</p>
                    <p>NoSQL databases--also known as “non SQL” or “not only SQL,” store data in a format other than relational tables. If your data requirements aren’t clear at the outset or if you’re dealing with massive amounts of unstructured data, you’ll want to use non-relational databases because they offer greater flexibility.</p>

                </div>
            </div>
            <div tabIndex={2} className="collapse group">
                <div className="collapse-title text-3xl font-bold">
                    3. What is express js? What is Nest JS ?

                </div>
                <div className="collapse-content text-orange-500 ">
                    <p> <span className="text-slate-900 font-bold">Answer:-</span>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. Its a layer built on the top of the Node js that helps manage servers and routes.</p>
                    <p> NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.</p>
                </div>
            </div>

            <div tabIndex={3} className="collapse group">
                <div className="collapse-title text-3xl font-bold ">
                    4.What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content  text-orange-500 ">
                    <p> <span className="text-slate-900 font-bold">Answer:-</span> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                    <p>MongoDB aggregate() function returns an instance of MongoDB Aggregate class. Aggregate instances are thenable, so you can use them with await and promise chaining. The Aggregate class also supports a chaining interface for building aggregation pipelines.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;