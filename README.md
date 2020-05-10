![Scaling Node.js Guide Github Ali Abbas @realabbas](https://raw.githubusercontent.com/realabbas/scaling-nodejs/master/demo/cover_image.png)

## Scaling Types

- X Axis
- Y Axis
- Z Axis

## Node.js Native Modules

- `cluster`
- `os`
- `spawn`

<!-- ### Cluster

### Zero-Downtime

### PM2

### Spawn -->

## Resources and techniques

_Some techniques are implemented using stack other than node.js, but the concept is more important to comprehend and implement for better performance of the application_

### Blogs

- [Scaling Node.js Applications](https://jscomplete.com/learn/node-beyond-basics/scaling-node-apps)
- [A Beginner's Guide To Scaling To 11 Million+ Users On Amazon's AWS](http://highscalability.com/blog/2016/1/11/a-beginners-guide-to-scaling-to-11-million-users-on-amazons.html)
- [Good practices for high-performance and scalable Node.js applications [Part 1/3]](https://medium.com/iquii/good-practices-for-high-performance-and-scalable-node-js-applications-part-1-3-bb06b6204197)
- [Good practices for high-performance and scalable Node.js applications [Part 2/3]](https://medium.com/iquii/good-practices-for-high-performance-and-scalable-node-js-applications-part-2-3-2a68f875ce79)
- [Good practices for high-performance and scalable Node.js applications [Part 3/3]](https://medium.com/iquii/good-practices-for-high-performance-and-scalable-node-js-applications-part-3-3-c1a3381e1382)
- [Scaling Up to Your First 10 Million Users](https://medium.com/@evyborov/scaling-up-to-your-first-10-million-users-summary-aws-summit-sf-2017-819dcf532fb7)
- [Scaling Machine Learning from 0 to millions of users — part 1](https://towardsdatascience.com/scaling-machine-learning-from-0-to-millions-of-users-part-1-a2d36a5e849?gi=c9cd8046a155)
- [Scaling Machine Learning from 0 to millions of users — part 2](https://medium.com/faun/scaling-machine-learning-from-0-to-millions-of-users-part-2-80b0d1d7fc61)
- [https://cloudifie.com/uncategorized/scaling-from-mvp-to-10-million-users/](https://cloudifie.com/uncategorized/scaling-from-mvp-to-10-million-users/)
- [Scaling on AWS Part I: A Primer](https://aws.amazon.com/blogs/startups/scaling-on-aws-part-1-a-primer/)
- [Scaling on AWS (Part 2): > 10K Users](https://aws.amazon.com/blogs/startups/scaling-on-aws-part-2-10k-users/)
- [Scaling on AWS (Part 3): >500K Users](https://aws.amazon.com/blogs/startups/scaling-on-aws-part-3-500k-users/)
- [Scaling on AWS (Part 4) : > One Million Users](https://aws.amazon.com/blogs/startups/scaling-on-aws-part-4-one-million-users/)
- [Deploying and scaling Node.js on Google Kubernetes Engine with Continuous Integration](https://levelup.gitconnected.com/dockerizing-deploying-and-scaling-node-js-on-google-kubernetes-engine-with-continuous-integration-f895a98bf6e3)
- [Instagration Pt. 2: Scaling our infrastructure to multiple data centers](https://instagram-engineering.com/instagration-pt-2-scaling-our-infrastructure-to-multiple-data-centers-5745cbad7834)
- [Using Rust to Scale Elixir for 11 Million Concurrent Users](https://blog.discord.com/using-rust-to-scale-elixir-for-11-million-concurrent-users-c6f19fc029d3)
- [How to scale a Nodejs app based on number of users](https://adrianmejia.com/how-to-scale-a-nodejs-app-based-on-number-of-users/)
- [Scaling Node.js Socket Server with Nginx and Redis](https://blog.jscrambler.com/scaling-node-js-socket-server-with-nginx-and-redis/)
- [NODE.JS scalability problems and how to solve them 🚀](https://softwareontheroad.com/nodejs-scalability-issues/)
- [Divide and conquer: Scale your Node.js app using distributed queues](https://blog.logrocket.com/divide-and-conquer-scale-your-node-js-app-using-distributed-queues-8231a9486d3a/)
- [Serving Millions of Users in Real-Time with Node.js & Microservices [Case Study]](https://blog.risingstack.com/nodejs-microservices-scaling-case-study/)
- [Scalability in NodeJS Creating a Zero-downtime cluster](https://itnext.io/creating-a-zero-downtime-cluster-in-nodejs-ad879ee3160)
- [Monitoring & Vertically Scaling Node.js Applications](https://www.netguru.com/codestories/monitoring-vertically-scaling-nodejs-applications)
- [Node.js scaling in highload](https://www.slideshare.net/tshemsedinov/nodejs-scaling-in-highload-145786324)
- [How to Scale your Node.js app: Best Strategies and Built-in Tools for Scalability](https://medium.com/@OPTASY.com/how-to-scale-your-node-js-app-best-strategies-and-built-in-tools-for-scalability-a1725df082f5)
- [Securing and Scaling up Node.js Applications](https://blockchain.dcwebmakers.com/blog/best-practices-for-securing-and-scaling-nodejs-applications.html)
- [Scaling-out with Node Clusters](https://medium.com/the-andela-way/scaling-out-with-node-clusters-1dca4a39a2a)
- [Handling blocking operations in Node](https://medium.com/the-andela-way/handling-blocking-operations-in-node-dbe8baa58ae7)
- [Interrupts and Request Memoization](https://medium.com/the-andela-way/interrupts-and-request-memoization-23cfe925b0ec)

### Videos

- [Tech Talk: Server Scaling in Node.js](https://www.youtube.com/watch?v=w1IzRF6AkuI)
- [The Art of Building Node.js Projects at Scale](https://www.youtube.com/watch?v=_H6td2GaW3I)
- [Scaling Your Node.JS API Like a Boss (Part One)](https://www.youtube.com/watch?v=Ogjb60Fg10A)
- [Scaling Your Node.JS API Like a Boss (Part Two)](https://www.youtube.com/watch?v=f5phsX4VUOU)
- [Scaling NodeJS - Abhinav Rastogi, Flipkart](https://www.youtube.com/watch?v=OsHvD6EUAWM)
- [Abhinav Rastogi: Scaling NodeJS beyond the ordinary JSConf Iceland 2018](https://www.youtube.com/watch?v=K8spO4hHMhg)
- [Modular-services in a NodeJS monolith - Naval Saini, Flip Flop App](https://www.youtube.com/watch?v=XELSRLTk66o)
- [Scaling Real-time Apps on Cloud Foundry Using Node.js and Redis](https://www.youtube.com/watch?v=a19OfVfqsa8)
- [Node JS - Scaling Applications - Clusters](https://www.youtube.com/watch?v=Iz0MFOKmmDY&t=600s)
- [Node JS - Scaling Applications - Architecting Zero Downtime](https://www.youtube.com/watch?v=INM6TybFV9Q&t=495s)
- [Node JS - Scaling Applications - PM2](https://www.youtube.com/watch?v=iHzoQy1jx7M)
- [Using Clean Architecture for Microservice APIs in Node.js with MongoDB and Express](https://www.youtube.com/watch?v=CnailTcJV_U)
- [Scaling NodeJS apps with N-API by Ruben Harutyunyan(Arm) JSConfAM19](https://www.youtube.com/watch?v=o39BS_KzCg8)
- [Enterprise Node.JS Apps in 2018](https://www.youtube.com/watch?v=RNGCrz5Rx14)
- [Node JS - Scaling Applications](https://www.youtube.com/watch?v=RCyR5_9djik&list=PLrwNNiB6YOA3xc1dfQpHuaU8HsKxkEgiQ)
- [Scaling Node.js Applications with Kubernetes and Docker - Erick Wendel, EW.IT](https://www.youtube.com/watch?v=Jmf9jilQUsU)
- [Node.js at Scale with Erik Toth](https://www.youtube.com/watch?v=bvDtEcQdGs0)
- [Architect for Scale - My Learnings in Node.js (A case study)](https://www.youtube.com/watch?v=eFxSLn4VFRo)
- [Node.js Performance and Highly Scalable Micro-Services - Chris Bailey, IBM](https://www.youtube.com/watch?v=Fbhhc4jtGW4)
- [Scaling Node.js Applications with Kubernetes and Docker](https://www.youtube.com/watch?v=Pe-RaE163FE)
- [require('lx') - Scaling Node.js to 500 million Users by João Parreira](https://www.youtube.com/watch?v=8PTlEkwOjKg)
- [The Node.js Event Loop: Not So Single Threaded](https://www.youtube.com/watch?v=-IpkzpLuuPM)
- [Scalable Microservices with gRPC, Kubernetes, and Docker by Sandeep Dinesh, Google](https://www.youtube.com/watch?v=xsIwYL-N4vI)
- [Node.js at Netflix](https://www.youtube.com/watch?v=p74282nDMX8)
- [Node.js: Deploying, Monitoring and Scaling](https://www.youtube.com/watch?v=vR6xjmfc19Q)
- [A Million Connections...and Beyond! - Node.js at Scale](https://www.youtube.com/watch?v=AH7kw8sKefg)
- [Load Balancing with NGINX](https://www.youtube.com/watch?v=2X4ZO5tO7Co)

### Example Code

#### Cluster

###### Check number of CPUs

```
const cluster = require("cluster"); // Cluster Native Module
const cpus = require("os").cpus().length; // Number of CPUs

console.log("Number of CPUs available - ", cpus)

```

###### Full Clustering Example

```
const http = require("http");
const cluster = require("cluster"); // Cluster Native Module
const cpus = require("os").cpus().length; // Number of CPUs
const port = process.env.PORT || 3000;

if (cluster.isMaster) {
  // Checking whether the current cluser is master or not.Boolean value is returned
  console.log("Master CPU - ", process.pid);

  for (var i = 0; i < cpus; i++) {
    cluster.fork(); // Forking a new process from the cluster
  }

  cluster.on("exit", (worker) => {
    console.log("Worker Process has died - " + process.pid); // Process that exited/died.
    console.log("Process Remaining - " + Object.keys(cluster.workers).length); // Prints the number of running workers at any instance
    console.log("Starting New Working");
    console.log("Process Remaining - " + Object.keys(cluster.workers).length);
  });
} else {
  http
    .createServer((req, res) => {
      message = `Running Process: ${process.pid}`;
      res.end(message);

      // For Testing Purpose. Uncomment the following code to kill process by sending GET request to '/kill'

      //   if (req.url === "/kill") {
      //     process.exit();
      //   } else {
      //     console.log(process.pid);
      //   }
    })
    .listen(port);
}
```

###### Zero - Downtime Example

```
const http = require("http");
const cluster = require("cluster"); // Cluster Native Module
const cpus = require("os").cpus().length; // Number of CPUs
const port = process.env.PORT || 3000;

if (cluster.isMaster) {
  // Checking whether the current cluser is master or not.Boolean value is returned
  console.log("Master CPU - ", process.pid);

  for (var i = 0; i < cpus; i++) {
    cluster.fork(); // Forking a new process from the cluster
  }

  cluster.on("exit", (worker) => {
    console.log("Worker Process has died - " + process.pid); // Process that exited/died.
    console.log("Process Remaining - " + Object.keys(cluster.workers).length); // Prints the number of running workers at any instance
    console.log("Starting New Working");
    cluster.fork(); // Creating a new process again after the previous process exited so that max number of cpus are utilised.
    console.log("Process Remaining - " + Object.keys(cluster.workers).length);
  });
} else {
  http
    .createServer((req, res) => {
      message = `Running Process: ${process.pid}`;
      res.end(message);

      // For Testing Purpose. Uncomment the following code to kill process by sending GET request to '/kill'

      //   if (req.url === "/kill") {
      //     process.exit();
      //   } else {
      //     console.log(process.pid);
      //   }
    })
    .listen(port);
}

```