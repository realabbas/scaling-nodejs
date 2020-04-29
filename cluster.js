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
